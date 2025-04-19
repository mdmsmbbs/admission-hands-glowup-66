
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServiceDetails = () => {
  const packages = [
    {
      title: "Initial Consultation Package",
      features: [
        "Personalized college selection strategy",
        "Merit-based admission probability analysis",
        "Detailed fee structure breakdown",
        "Documentation requirement checklist"
      ]
    },
    {
      title: "Comprehensive Admission Package",
      features: [
        "Complete application process management",
        "State & All India counseling guidance",
        "Document verification & submission",
        "Seat allocation assistance",
        "Fee payment coordination"
      ]
    },
    {
      title: "Premium Counseling Package",
      features: [
        "24/7 dedicated admission counselor",
        "Multi-state application handling",
        "NRI quota assistance if applicable",
        "College campus virtual tour arrangement",
        "Post-admission support services"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-medical-700">
          Our Service Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-medical-600">{pkg.title}</h3>
              <ul className="space-y-3">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
