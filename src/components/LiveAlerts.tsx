
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
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
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [starBlink, setStarBlink] = useState(true);

  useEffect(() => {
    fetchAlerts();
    const subscription = supabase
      .channel('live_alerts_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'live_alerts' },
        () => fetchAlerts()
      )
      .subscribe();

    // Star blinking effect
    const blinkInterval = setInterval(() => {
      setStarBlink(prev => !prev);
    }, 1000);

    return () => {
      supabase.removeChannel(subscription);
      clearInterval(blinkInterval);
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
      if (!scrollContainerRef.current) return;
      
      let startTime: number;
      let scrollPosition = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        if (!scrollContainerRef.current) return;
        
        if (!isPaused) {
          scrollPosition += 1;
          
          // Reset when we've scrolled through all items
          if (scrollPosition >= scrollContainerRef.current.scrollWidth / 2) {
            scrollPosition = 0;
          }
          
          scrollContainerRef.current.scrollLeft = scrollPosition;
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    };

    startScrolling();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [alerts.length, isPaused]);

  if (alerts.length === 0) return null;

  return (
    <div 
      className="bg-white border-b sticky top-[72px] z-40 shadow-sm py-[6px] w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      style={{ marginTop: 0 }} // Ensure there's no extra margin
    >
      <div className="container-custom">
        <div 
          ref={scrollContainerRef}
          className="flex items-center space-x-4 overflow-hidden whitespace-nowrap"
        >
          {[...alerts, ...alerts].map((alert, index) => (
            <React.Fragment key={`${alert.id}-${index}`}>
              <Link
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
              <Star 
                className={`w-4 h-4 shrink-0 ${starBlink ? 'text-[#ea384c]' : 'text-gray-200'} transition-colors duration-500`}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAlerts;
