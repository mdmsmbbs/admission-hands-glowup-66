
import React from 'react';
import { useContent } from '@/contexts/ContentContext';
import AlertsStrip from './AlertsStrip';
import ServiceCards from './ServiceCards';

const Hero = () => {
  const { isLoading, getContentByKey } = useContent();

  return (
    <div className="container-custom flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] mx-auto flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?q=80&w=2070&auto=format&fit=crop")`
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black">
                  Your Partner in Medical School Admissions in India
                </h1>
                <h2 className="text-white text-sm @[480px]:text-base">
                  Guidance and support for aspiring doctors. Learn how to secure your place at India's top medical colleges.
                </h2>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-accent text-primary text-sm font-bold tracking-[0.015em] @[480px]:text-base hover:bg-accent/90 transition-colors">
                <span className="truncate">Get Started</span>
              </button>
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
