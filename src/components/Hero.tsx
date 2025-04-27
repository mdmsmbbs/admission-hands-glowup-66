
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
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background images with fade transition */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${bg}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80"></div>
        </div>
      ))}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Your Journey to Medical Excellence 
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent block mt-2">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Expert guidance for MBBS admissions in top medical colleges. Transform your medical aspirations into reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'Expert Counselors',
                '100+ Partner Colleges',
                '95% Success Rate',
                'Personalized Guidance'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-200">
                  <CheckCircle className="text-blue-400 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                onClick={() => window.location.href = '/services'}
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
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
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base mt-2 text-gray-300">
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
