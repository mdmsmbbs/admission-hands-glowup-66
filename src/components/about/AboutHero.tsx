
import React from 'react';

const AboutHero = () => {
  return (
    <div className="bg-[#f8f9fb] py-20">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Indian Medical Students" 
            className="w-full rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-medical-500/20 rounded-full -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/20 rounded-full -z-10"></div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About Admission Hands</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Admission Hands</strong> is a highly respected MBBS and MD/MS admission consultancy, serving aspiring medical professionals across India for over <strong>13 years</strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with a vision to make medical admissions transparent, accessible, and ethical, we are proud to be one of the most trusted names in the domain of medical education consulting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
