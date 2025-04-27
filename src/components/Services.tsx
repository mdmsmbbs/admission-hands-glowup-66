
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

const ServicesList: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end support for your medical education journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-medical-50 to-teal-50 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-medical-500 to-teal-500 rounded-lg hover:from-medical-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
