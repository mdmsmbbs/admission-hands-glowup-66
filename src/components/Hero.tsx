
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { Skeleton } from '@/components/ui/skeleton';

const Hero: React.FC = () => {
  const { isLoading, heroContent, getContentByCategory, getContentByKey } = useContent();
  const heroFeatures = getContentByCategory('hero_features');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic background with gradient overlay */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat ${
            index === currentBgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-900/95 via-medical-900/90 to-accent-purple/80" />

      <div className="container-custom relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-slide-up">
            {isLoading ? (
              <>
                <Skeleton className="h-12 w-3/4 bg-gray-700 mb-4" />
                <Skeleton className="h-6 w-full bg-gray-700 mb-2" />
              </>
            ) : (
              <>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  {heroContent?.title || "Expert Consultation for Your"}{" "}
                  <span className="text-accent-cyan bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink">
                    {heroContent?.description || "MBBS, MD/MS Journey"}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {getContentByKey('hero_subtitle')?.description || 
                   "Expert guidance to secure admissions in top medical colleges. Personalized mentoring that turns aspirations into achievements."}
                </p>
              </>
            )}

            {/* Features list with animated entrance */}
            <div className="space-y-4 py-6">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center">
                    <Skeleton className="h-5 w-5 mr-2 bg-gray-700" />
                    <Skeleton className="h-5 w-full bg-gray-700" />
                  </div>
                ))
              ) : (
                heroFeatures.length > 0 ? 
                  heroFeatures.map((feature, index) => (
                    <div 
                      key={feature.id} 
                      className="flex items-center animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="text-accent-cyan mr-3 h-5 w-5 animate-pulse-slow" />
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  )) : 
                  [
                    'Specialized in MBBS admissions counseling',
                    'Access to 100+ premier medical institutions',
                    '95% success rate in admissions',
                    'One-on-one personalized guidance'
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="text-accent-cyan mr-3 h-5 w-5 animate-pulse-slow" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-accent-cyan hover:bg-accent-cyan/90 text-white font-semibold px-8 py-6 rounded-xl transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/20"
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-accent-purple text-white hover:bg-accent-purple/10 font-semibold px-8 py-6 rounded-xl flex items-center justify-center group"
              >
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Column - Success Stories Card */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 rounded-2xl transform rotate-3 scale-105 blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10">
                {isLoading ? (
                  <Skeleton className="w-full aspect-video bg-gray-300" />
                ) : (
                  <img 
                    src={getContentByKey('hero_success_image')?.image_url || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} 
                    alt="Medical Student Success" 
                    className="w-full h-auto rounded-t-xl"
                  />
                )}
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900">
                        {getContentByKey('success_stories_title')?.title || "Success Stories"}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {getContentByKey('success_stories_subtitle')?.description || "From our students"}
                      </p>
                    </div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                          <img 
                            src={getContentByKey(`student_image_${item}`)?.image_url || `https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`} 
                            alt="Student" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded p-3 sm:p-4 mb-2 sm:mb-4">
                    <p className="text-sm sm:text-base text-gray-700 italic">
                      "{getContentByKey('success_story_quote')?.description || "Admission Hands helped me get into my dream medical college. Their personalized guidance was invaluable!"}"
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      {getContentByKey('success_story_author')?.description || "- Riya Sharma, AIIMS Delhi"}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-medical-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-40 sm:h-40 bg-teal-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
