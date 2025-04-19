
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface Alert {
  id: number;
  title: string;
  link: string;
  image_url?: string;
  is_active: boolean;
  order_index: number;
}

const LiveAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchAlerts();
    const subscription = supabase
      .channel('live_alerts_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'live_alerts' },
        () => fetchAlerts()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchAlerts = async () => {
    const { data, error } = await supabase
      .from('live_alerts')
      .select('*')
      .eq('is_active', true)
      .order('order_index', { ascending: true });

    if (!error && data) {
      setAlerts(data);
    }
  };

  useEffect(() => {
    if (alerts.length === 0) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % alerts.length;
          const itemWidth = scrollContainerRef.current?.firstElementChild?.clientWidth || 0;
          scrollContainerRef.current.scrollTo({
            left: itemWidth * nextIndex,
            behavior: 'smooth'
          });
          return nextIndex;
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [alerts.length]);

  if (alerts.length === 0) return null;

  return (
    <div className="bg-white border-b sticky top-[48px] z-40 shadow-sm">
      <div className="container-custom py-2">
        <div 
          ref={scrollContainerRef}
          className="flex items-center space-x-4 overflow-hidden whitespace-nowrap"
        >
          {alerts.map((alert) => (
            <Link
              key={alert.id}
              to={alert.link}
              className="flex items-center space-x-2 shrink-0 hover:bg-gray-50 p-1.5 rounded-md transition-colors group"
            >
              {alert.image_url && (
                <img
                  src={alert.image_url}
                  alt={alert.title}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="text-sm font-bold text-[#ea384c] group-hover:text-medical-600">
                {alert.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAlerts;
