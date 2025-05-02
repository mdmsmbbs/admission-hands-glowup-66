
import React from 'react';
import { GraduationCap, Users, FileCheck, Building2, ChartBar, Calendar } from 'lucide-react';

const SpecializedServices = () => {
  const services = [
    {
      icon: <GraduationCap className="h-6 w-6 text-medical-600" />,
      title: "Comprehensive College Selection",
      description: "Expert guidance in selecting medical colleges based on your profile, preferences, and goals."
    },
    {
      icon: <Users className="h-6 w-6 text-medical-600" />,
      title: "Management Quota for MBBS Admissions",
      description: "Complete support for securing management quota seats in top private medical institutions across India."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-medical-600" />,
      title: "Document Verification",
      description: "Thorough verification and assistance with documentation for smooth admission process."
    },
    {
      icon: <Building2 className="h-6 w-6 text-medical-600" />,
      title: "Institution Connect",
      description: "Direct connections with premier medical colleges for streamlined admissions."
    },
    {
      icon: <ChartBar className="h-6 w-6 text-medical-600" />,
      title: "Career Planning",
      description: "Strategic guidance for long-term medical career planning and specialization choices."
    },
    {
      icon: <Calendar className="h-6 w-6 text-medical-600" />,
      title: "Application Timeline",
      description: "Structured timeline management for applications, deadlines, and counseling rounds."
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-1 w-8 bg-gradient-to-r from-medical-500 to-teal-500 rounded-full"></div>
          <span className="text-sm text-medical-600 font-medium uppercase tracking-wider">Services</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Specialized Services</h2>
        <p className="text-gray-600">Tailored admission solutions for every stage of your medical education journey</p>
      </div>
      
      {/* Redesigned service grid - fully responsive without horizontal scrolling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-medical-50 to-teal-50 rounded-lg mb-3 sm:mb-0 inline-flex sm:shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 italic">
          *Fees and service details subject to change as per institutional policies and Government notifications.
        </p>
      </div>
    </div>
  );
};

export default SpecializedServices;
