
import React from 'react';
import { Sparkles } from 'lucide-react';

const OurVision = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-medical-50/30">
      <div className="container-custom max-w-4xl text-center px-4">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-medical-100 rounded-full blur-2xl opacity-30 animate-pulse" />
          <Sparkles className="w-12 h-12 text-medical-600 relative z-10" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Our Vision</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-medical-100/0 via-medical-100/30 to-medical-100/0 blur-xl" />
          <p className="relative z-10 text-xl text-gray-800 leading-relaxed font-medium px-4 md:px-8">
            To become India's most reliable and ethical medical admission consultancy — guiding students not just toward admission, but toward a lifetime of success in healthcare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
