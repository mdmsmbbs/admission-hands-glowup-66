
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
  const animationRef = useRef<number | null>(null);

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
    if (alerts.length <= 1) return;

    const startScrolling = () => {
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const containerWidth = scrollContainerRef.current.clientWidth;
        let scrollPosition = 0;
        
        const scroll = () => {
          if (!scrollContainerRef.current) return;
          
          scrollPosition += 1;
          
          // Reset when we've scrolled through all items
          if (scrollPosition >= scrollWidth) {
            scrollPosition = 0;
          }
          
          scrollContainerRef.current.scrollLeft = scrollPosition;
          animationRef.current = requestAnimationFrame(scroll);
        };
        
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    startScrolling();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [alerts.length]);

  if (alerts.length === 0) return null;

  return (
    <div className="bg-white border-b sticky top-[48px] z-40 shadow-sm">
      <div className="container-custom py-1">
        <div 
          ref={scrollContainerRef}
          className="flex items-center space-x-4 overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...alerts, ...alerts].map((alert, index) => (
            <Link
              key={`${alert.id}-${index}`}
              to={alert.link}
              className="flex items-center space-x-2 shrink-0 hover:bg-gray-50 p-1 rounded-md transition-colors group"
            >
              {alert.image_url && (
                <img
                  src={alert.image_url}
                  alt={alert.title}
                  className="w-6 h-6 rounded-full object-cover"
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
