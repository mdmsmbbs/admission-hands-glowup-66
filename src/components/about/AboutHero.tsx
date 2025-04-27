
import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_100%)]" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-medical-600">AdmissionHands</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              For over <span className="font-semibold">13 years</span>, we've been India's trusted partner in medical admissions, guiding aspiring doctors through every step of their journey.
            </p>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700">
                Our mission is simple: To make medical admissions <span className="font-semibold">transparent</span>, <span className="font-semibold">accessible</span>, and <span className="font-semibold">ethical</span>.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Medical Students"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medical-500/20 rounded-full -z-10 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-teal-500/20 rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
