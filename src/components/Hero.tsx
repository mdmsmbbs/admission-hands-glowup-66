
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const backgrounds = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1583912267550-d6148f7ee16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1587746744499-03c44d739240?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
  "https://images.unsplash.com/photo-1611689102192-1f6e0e52df0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
];

const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
      {/* Background images with fade transition */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${bg}")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-medical-900/90 to-teal-900/90"></div>
        </div>
      ))}

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 animate-fade-up text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Expert Consultation for Your <span className="text-medical-500">MBBS, MD/MS</span> Journey
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              Expert guidance to secure admissions in top medical colleges. Personalized mentoring that turns aspirations into achievements.
            </p>
            
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              {[
                'Specialized in MBBS admissions counseling',
                'Access to 100+ premier medical institutions',
                '95% success rate in admissions',
                'One-on-one personalized guidance'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in px-3 sm:px-0" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Medical Student Success" 
                className="w-full h-auto rounded-t-xl"
              />
              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900">Success Stories</h3>
                    <p className="text-xs text-gray-600">From our students</p>
                  </div>
                  <div className="flex -space-x-1.5">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`} 
                          alt="Student" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded p-2 sm:p-3 mb-1 sm:mb-2">
                  <p className="text-xs sm:text-sm text-gray-700 italic">"Admission Hands helped me get into my dream medical college. Their personalized guidance was invaluable!"</p>
                  <p className="text-[0.7rem] sm:text-xs text-gray-600 mt-1">- Riya Sharma</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-medical-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 bg-teal-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
