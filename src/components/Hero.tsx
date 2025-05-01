
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

// Updated backgrounds with Indian medical college and medical professional images
const backgrounds = [
  "https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=75", // Indian medical college
  "/lovable-uploads/7a37d019-89ff-4632-abcf-8a6187c5bdde.png", // Doctor writing notes
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=75", // AIIMS Delhi
  "/lovable-uploads/66449f65-b3de-4405-9be8-67e1274524ac.png", // Doctor with stethoscope
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1590302528159-1db3da4ed293?auto=format&fit=crop&w=1200&q=75", // Medical college library
  "/lovable-uploads/443c5eef-a15b-4769-ac61-b8b03ab7bc9e.png", // Medical staff discussion
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=75", // Medical college campus
  "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=75"
];

const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [animateItems, setAnimateItems] = useState(false);

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
        // Add delay to start bullet point animations after background loads
        setTimeout(() => {
          setAnimateItems(true);
        }, 500);
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

  // Color classes for bullet points
  const bulletColors = [
    'from-blue-600 to-teal-500',
    'from-purple-600 to-blue-500',
    'from-teal-500 to-emerald-500',
    'from-orange-500 to-red-500'
  ];

  // Bullet point items
  const bulletPoints = [
    'Complete Admission Support — From eligibility to enrollment',
    'Transparent Process — No hidden fees',
    'Latest Seat & Fee Insights — Stay informed, choose wisely',
    'Trusted Nationwide — Preferred by aspirants across India & abroad'
  ];

  // Stats items
  const statsItems = [
    { number: '1200+', label: 'Admissions Facilitated Worldwide' },
    { number: '95%', label: 'Success Rate' },
    { number: '100+', label: 'College Affiliations' },
    { number: '25+', label: 'Expert Counselors' }
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-0 mt-0">
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-medical-50 to-white"></div>
      )}
      
      {/* Background images with fade transition and 25% transparency overlay */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === visibleIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${bg}")` }}
          aria-hidden="true"
        >
          {/* Overlay with 75% opacity (25% transparency) for consistency */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 to-white/75"></div>
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
              Expert guidance for MBBS, PG (MD/MS) & SS (Courses) Admissions in top medical colleges. Transform your medical aspirations into reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {bulletPoints.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-2 p-3 rounded-lg shadow-md transition-all duration-500 ${
                    animateItems ? 'animate-fade-in' : 'opacity-0'
                  } bg-white/70 highlight-pulse hero-bullet-point`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-medical-500" />
                  <span className={`text-sm sm:text-base font-bold bg-gradient-to-r ${bulletColors[index]} bg-clip-text text-transparent`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {statsItems.map((stat, index) => (
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
