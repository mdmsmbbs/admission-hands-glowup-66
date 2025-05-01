
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
    
    // Set up real-time subscription for live updates
    const subscription = supabase
      .channel('live_alerts_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'live_alerts' },
        (payload) => {
          console.log('Live alert change detected:', payload);
          fetchAlerts();
        }
      )
      .subscribe();

    // Star blinking effect
    const blinkInterval = setInterval(() => {
      setStarBlink(prev => !prev);
    }, 1000);

    return () => {
      supabase.removeChannel(subscription);
      clearInterval(blinkInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const fetchAlerts = async () => {
    try {
      const { data, error } = await supabase
        .from('live_alerts')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true });

      if (!error && data) {
        setAlerts(data);
      } else if (error) {
        console.error("Error fetching alerts:", error);
      }
    } catch (err) {
      console.error("Exception fetching alerts:", err);
    }
  };

  useEffect(() => {
    if (alerts.length <= 1) return;

    const startScrolling = () => {
      if (!scrollContainerRef.current) return;
      
      let scrollPosition = 0;
      
      const animate = () => {
        if (!scrollContainerRef.current) return;
        
        if (!isPaused) {
          scrollPosition += 0.575; // 15% faster than the original 0.5 speed
          
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
      className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b fixed top-[64px] left-0 right-0 z-40 shadow-sm py-[4px] w-full live-alerts-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
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
                className="flex items-center space-x-2 shrink-0 hover:bg-white/70 p-1 rounded-md transition-colors group"
              >
                {alert.image_url && (
                  <img
                    src={alert.image_url}
                    alt={alert.title}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                )}
                <span className="text-sm font-bold text-[#1EAEDB] group-hover:text-[#F97316]">
                  {alert.title}
                </span>
              </Link>
              <Star 
                className={`w-4 h-4 shrink-0 ${starBlink ? 'text-[#1EAEDB]' : 'text-gray-200'} transition-colors duration-500`}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAlerts;
