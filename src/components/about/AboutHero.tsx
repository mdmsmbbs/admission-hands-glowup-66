
import React from 'react';

const AboutHero = () => {
  return (
    <div className="bg-[#f8f9fb] py-4">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" 
            alt="Medical Students"
            loading="eager"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-medical-500/20 rounded-full -z-10"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full -z-10"></div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            About Admission Hands
          </h1>
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
