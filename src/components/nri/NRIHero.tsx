
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NRIHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-medical-50 to-white py-10 sm:py-14 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/nri-pattern.svg')] opacity-5"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="space-y-4 sm:space-y-5 animate-fade-in">
            <div className="inline-block px-3 py-1.5 bg-medical-100 text-medical-800 rounded-full text-xs sm:text-sm font-medium">
              NRI Quota Medical Admissions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Secure Your <span className="text-medical-600">Medical Seat</span> Through NRI Quota
            </h1>
            <p className="text-base text-gray-700">
              Expert guidance for NRI, NRI-sponsored, OCI, PIO, and foreign national candidates seeking MBBS & BDS seats in top medical colleges across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button className="btn-primary text-sm" asChild>
                <Link to="/nri-quota/colleges">
                  Explore NRI Colleges <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button className="btn-outline text-sm" asChild>
                <a href="#eligibility">Check Eligibility</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-500/20 to-teal-500/20 rounded-2xl transform rotate-3 scale-95"></div>
            <img
              src="/lovable-uploads/69823834-0515-4f12-9d2a-a54a8518ae6d.png"
              alt="Medical students in laboratory"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
              loading="lazy"
              width="600" 
              height="400"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-start gap-3">
                <div className="bg-medical-600 text-white p-2 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Why Choose NRI Quota?</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Higher chances of admission with specialized seats reserved exclusively for NRI candidates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRIHero;
