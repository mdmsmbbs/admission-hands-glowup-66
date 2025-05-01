
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const backgrounds = [
  "https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1530026454774-50cce722a1fb?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1583912267550-d980efa742d7?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=75"
];

const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = backgrounds.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoaded(true); // Show content even if some images fail to load
      }
    };
    
    preloadImages();
  }, []);

  // Handle background rotation
  useEffect(() => {
    if (!isLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % backgrounds.length;
        setTimeout(() => {
          setVisibleIndex(newIndex);
        }, 50); // Small delay to ensure smooth transition
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <section className="relative min-h-[85vh] flex items-center mt-2.5">
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-medical-50 to-white"></div>
      )}
      
      {/* Background images with fade transition */}
      {isLoaded && backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === visibleIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${bg}")` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80"></div>
        </div>
      ))}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-gray-900 space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Your Journey to Medical Excellence 
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block mt-2">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
              Expert guidance for MBBS admissions in top medical colleges. Transform your medical aspirations into reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'Expert Counselors',
                '100+ Partner Colleges',
                '95% Success Rate',
                'Personalized Guidance'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="text-blue-600 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              { number: '1000+', label: 'Students Placed' },
              { number: '95%', label: 'Success Rate' },
              { number: '100+', label: 'Partner Colleges' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base mt-2 text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
