
import React from 'react';

const AboutHero = () => {
  return (
    <div className="bg-[#f8f9fb] py-4">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c" 
            alt="Medical Students" 
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-medical-500/20 rounded-full -z-10"></div>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-teal-500/20 rounded-full -z-10"></div>
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
