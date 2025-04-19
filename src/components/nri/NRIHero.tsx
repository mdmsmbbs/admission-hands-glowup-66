
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const NRIHero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-medical-900/95 to-teal-900/80" />
      <div className="absolute inset-0 bg-[url('/nri-pattern.svg')] opacity-10" />

      <div className="container-custom relative z-10 pt-32 pb-20 min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
              NRI Quota Medical Admissions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Secure Your <span className="text-accent-cyan bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-purple">Medical Seat</span> Through NRI Quota
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Expert guidance for NRI, NRI-sponsored, OCI, PIO, and foreign national candidates seeking MBBS & BDS seats in top medical colleges across India.
            </p>
            
            {/* Features list with animated entrance */}
            <div className="space-y-3 pt-2">
              {['Higher acceptance rates', 'Reserved quota seats', 'Premium institutions access', 'Simplified admission process'].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-5 w-5 rounded-full bg-accent-cyan/20 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-accent-cyan"></div>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-accent-cyan hover:bg-accent-cyan/90 text-white font-semibold px-8 py-6 rounded-xl transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/20" asChild>
                <Link to="/nri-quota/colleges">
                  Explore NRI Colleges <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-xl flex items-center justify-center group"
                asChild
              >
                <a href="#eligibility">
                  Check Eligibility
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right column */}
          <div className="relative h-[500px] lg:h-[600px] animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/20 rounded-2xl transform rotate-3 scale-95 blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?q=80&w=2070&auto=format&fit=crop"
              alt="Medical students in laboratory"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
            />
            
            {/* Info Card */}
            <div className="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-cyan to-accent-purple text-white p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Why Choose NRI Quota?</h3>
                  <p className="text-sm text-gray-200">Higher chances of admission with specialized seats reserved exclusively for NRI candidates.</p>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute top-6 right-6 glass-effect p-4 rounded-xl shadow-lg max-w-[200px]">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-cyan">100+</div>
                <div className="text-sm text-gray-200">Medical Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRIHero;
