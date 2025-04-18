
import React from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Briefcase, 
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <GraduationCap className="h-5 w-5 text-medical-500" />,
    title: "College Selection",
    description: "Strategic guidance for choosing medical institutions based on profile and preferences."
  },
  {
    icon: <ClipboardCheck className="h-5 w-5 text-medical-500" />,
    title: "Application Assistance",
    description: "Comprehensive support for entrance exams and error-free application submissions."
  },
  {
    icon: <Briefcase className="h-5 w-5 text-teal-500" />,
    title: "Career Counseling",
    description: "Expert insights into medical specializations and career opportunities."
  },
  {
    icon: <Building className="h-5 w-5 text-teal-500" />,
    title: "Institution Connect",
    description: "Direct connections with 100+ medical colleges for streamlined admissions."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-4 bg-white">
      <div className="container-custom">
        <div className="text-center mb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Our Comprehensive Services</h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            End-to-end support for your medical education journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-2 border border-gray-100 card-hover"
            >
              <div className="flex items-start gap-2">
                <div>{service.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-0.5">{service.title}</h3>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-3 text-center">
          <Link to="/services" className="btn-primary text-xs">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
