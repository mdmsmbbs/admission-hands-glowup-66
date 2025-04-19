
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
    icon: <GraduationCap className="h-6 w-6 text-medical-500" />,
    title: "College Selection",
    description: "Strategic guidance for choosing medical institutions based on profile and preferences."
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-medical-500" />,
    title: "Application Assistance",
    description: "Comprehensive support for entrance exams and error-free application submissions."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-teal-500" />,
    title: "Career Counseling",
    description: "Expert insights into medical specializations and career opportunities."
  },
  {
    icon: <Building className="h-6 w-6 text-teal-500" />,
    title: "Institution Connect",
    description: "Direct connections with 100+ medical colleges for streamlined admissions."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-6 bg-white">
      <div className="container-custom">
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">Our Comprehensive Services</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            End-to-end support for your medical education journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-3 border border-gray-100 card-hover"
            >
              <div className="flex items-start gap-2">
                <div className="mt-0.5">{service.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/services" className="btn-primary text-sm">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
