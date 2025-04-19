
import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    "13+ Years of Specialized Experience",
    "Personalized Counseling with One-on-One Strategy Calls",
    "Detailed Profile Analysis & Best-Fit College Suggestions",
    "Full Support for Document Verification & Registration",
    "Guidance for Government and Private Institutions",
    "Trusted by Parents, Students, and Schools",
    "Strong Network with Leading Medical Colleges",
    "Transparent Fee Structures with Zero Hidden Charges"
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What Sets Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-medical-600" />
              </div>
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
