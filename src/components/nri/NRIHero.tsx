
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NRIHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-medical-50 to-white py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/nri-pattern.svg')] opacity-5"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-up">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-medical-100 text-medical-800 rounded-full text-xs sm:text-sm font-medium">
              NRI Quota Medical Admissions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Secure Your <span className="text-medical-600">Medical Seat</span> Through NRI Quota
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              Expert guidance for NRI, NRI-sponsored, OCI, PIO, and foreign national candidates seeking MBBS & BDS seats in top medical colleges across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
              <Button className="btn-primary text-sm sm:text-base" asChild>
                <Link to="/nri-quota/colleges">
                  Explore NRI Colleges <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button className="btn-outline text-sm sm:text-base" asChild>
                <a href="#eligibility">Check Eligibility</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-500/20 to-teal-500/20 rounded-2xl transform rotate-3 scale-95"></div>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?q=80&w=2070&auto=format&fit=crop"
              alt="Medical students in laboratory"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-medical-600 text-white p-2 sm:p-3 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[24px] sm:h-[24px]">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Why Choose NRI Quota?</h3>
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
