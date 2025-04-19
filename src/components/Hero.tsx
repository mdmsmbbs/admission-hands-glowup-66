
import React, { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import AlertsStrip from './AlertsStrip';
import ServiceCards from './ServiceCards';

const Hero = () => {
  const { isLoading, getContentByKey } = useContent();
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
    <div className="container-custom flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] mx-auto flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="relative min-h-[480px] @[480px]:rounded-xl overflow-hidden">
              {/* Dynamic backgrounds with crossfade */}
              {backgroundImages.map((img, index) => (
                <div
                  key={img}
                  className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat ${
                    index === currentBgIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>
              
              {/* Content */}
              <div className="relative flex flex-col items-start justify-end gap-6 px-4 pb-10 @[480px]:px-10 h-full z-10">
                <div className="flex flex-col gap-2 text-left animate-fade-up">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black">
                    Your Partner in Medical School Admissions in India
                  </h1>
                  <h2 className="text-white text-sm @[480px]:text-base">
                    Guidance and support for aspiring doctors. Learn how to secure your place at India's top medical colleges.
                  </h2>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-accent text-primary text-sm font-bold tracking-[0.015em] @[480px]:text-base hover:bg-accent/90 transition-colors animate-fade-in">
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <AlertsStrip />
        <ServiceCards />
      </div>
    </div>
  );
};

export default Hero;
