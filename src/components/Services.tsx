
import React from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Briefcase, 
  Building
} from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-medical-500" />,
    title: "College Selection",
    description: "Strategic guidance to choose the right medical institutions based on your profile, preferences, and potential."
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 sm:h-10 sm:w-10 text-medical-500" />,
    title: "Application Assistance",
    description: "Comprehensive support for entrance exams, application procedures, and document verification to ensure error-free submissions."
  },
  {
    icon: <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-teal-500" />,
    title: "Career Counseling",
    description: "Insights into various medical specializations, career paths, and opportunities to help you make informed decisions."
  },
  {
    icon: <Building className="h-8 w-8 sm:h-10 sm:w-10 text-teal-500" />,
    title: "Institution Connect",
    description: "Direct connections with 100+ medical colleges and universities to streamline your admission process."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Comprehensive Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From college selection to admission confirmation, we provide end-to-end support for your medical education journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-medical-50 to-teal-50 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6 sm:pr-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Not sure which service you need?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Book a free 30-minute consultation with our experts to discuss your goals, concerns, and the best path forward for your medical education.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <button className="btn-primary text-sm sm:text-base">
                Schedule Free Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
