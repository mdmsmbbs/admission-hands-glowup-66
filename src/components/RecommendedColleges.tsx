import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { RecommendedCollege } from '@/types/colleges';
import { useRecommendedColleges } from '@/hooks/useCollegesData';

const RecommendedColleges: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { colleges, loading: isLoading, error } = useRecommendedColleges();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px bg-medical-300 w-8"></div>
            <span className="text-medical-600 font-medium uppercase tracking-wider text-sm flex items-center">
              <Sparkles className="h-4 w-4 mr-1" /> Educational Affiliates
            </span>
            <div className="h-px bg-medical-300 w-8"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Top Recommended Colleges</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prestigious medical institutions with excellent faculty, infrastructure, and placement records
          </p>
        </div>
        
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
          
          {/* Scrollable container */}
          {isLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 text-medical-600 animate-spin" />
            </div>
          ) : colleges.length > 0 ? (
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-5 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth"
              style={{ scrollbarWidth: 'thin', msOverflowStyle: 'none' }}
            >
              {colleges.map((college, index) => (
                <div 
                  key={college.id || index} 
                  className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={college.image} 
                      alt={college.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{college.name}</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Location:</span> {college.location}
                      </p>
                      <p className="text-sm text-emerald-600 font-medium">
                        {college.fees}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Seats:</span> Approx. {college.seats}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No recommended colleges found.</p>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/mbbs-india/deemed-universities" 
            className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-medical-500 to-teal-500 rounded-lg hover:from-medical-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Deemed Universities
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedColleges;
