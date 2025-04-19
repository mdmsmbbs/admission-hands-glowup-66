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
      title: "NRI Quota Assistance",
      description: "Complete support for securing seats through NRI and NRI-sponsored quotas in top institutions."
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
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Specialized Services</h2>
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 -mx-4 px-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-medical-50 rounded-lg">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializedServices;
