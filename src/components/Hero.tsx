
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const backgrounds = [
  "https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2070&q=80"
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
    <section className="relative min-h-screen flex items-center py-20 sm:py-24 overflow-hidden">
      {/* Background images with fade transition */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${bg}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-medical-900/95 to-medical-900/90"></div>
        </div>
      ))}

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 animate-fade-up text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Consultation for Your <span className="text-medical-400">Medical Journey</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-200">
              Get personalized guidance to secure admissions in top medical colleges. Transform your medical aspirations into reality.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                'Specialized in MBBS admissions counseling',
                'Access to 100+ premier medical institutions',
                '95% success rate in admissions',
                'One-on-one personalized guidance'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-medical-400 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-200">{item}</p>
                </div>
              ))}
            </div>

            <Button 
              className="bg-medical-500 hover:bg-medical-600 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/services'}
            >
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80" 
                alt="Medical Students Success"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
