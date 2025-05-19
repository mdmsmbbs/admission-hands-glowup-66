
import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useDeemedUniversities } from '@/hooks/useCollegesData';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { ChevronLeft, ChevronRight, MapPin, Users, CircleDollarSign, Trophy } from 'lucide-react';

const TopDeemedUniversities = () => {
  const { universities, loading } = useDeemedUniversities();
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Memoize scroll handlers for better performance
  const scrollLeft = useCallback(() => {
    if (containerRef.current) {
      const newPosition = Math.max(scrollPosition - 600, 0);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  }, [scrollPosition]);

  const scrollRight = useCallback(() => {
    if (containerRef.current) {
      const newPosition = scrollPosition + 600;
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  }, [scrollPosition]);

  // Calculate if scroll buttons should be shown
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  }, []);

  // Optimize animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="top-universities" className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Deemed Universities for MBBS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of the most prestigious deemed universities offering MBBS programs in India.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="relative">
            {/* Scroll Left Button */}
            {scrollPosition > 0 && (
              <button 
                onClick={scrollLeft}
                className="scroll-button scroll-button-left"
                aria-label="Scroll left"
              >
                <ChevronLeft className="text-gray-700" />
              </button>
            )}
            
            {/* Universities Carousel */}
            <div 
              ref={containerRef} 
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
              style={{
                scrollbarWidth: 'none',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <motion.div 
                className="flex gap-6" 
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {universities.map((university, index) => (
                  <motion.div 
                    key={university.id}
                    variants={cardVariant}
                    className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden snap-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'tween' }}
                  >
                    <div className="h-40 overflow-hidden bg-gray-100">
                      {university.image_url ? (
                        <img 
                          src={university.image_url} 
                          alt={university.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="300"
                          height="160"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <p className="text-gray-500">Image not available</p>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 h-14">{university.name}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{university.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span>{university.seats} seats</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleDollarSign className="w-4 h-4 text-gray-400" />
                          <span>{university.fees_range}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-gray-400" />
                          <span>{university.ranking}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Scroll Right Button */}
            {containerRef.current && 
              scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth - 10 && (
              <button 
                onClick={scrollRight}
                className="scroll-button scroll-button-right"
                aria-label="Scroll right"
              >
                <ChevronRight className="text-gray-700" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(TopDeemedUniversities);
