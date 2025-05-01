
import React from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Briefcase, 
  Building,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <GraduationCap className="h-7 w-7 text-medical-500" />,
    title: "College Selection",
    description: "Strategic guidance for choosing medical institutions based on profile and preferences.",
    bgColor: "from-blue-50 to-blue-100/50"
  },
  {
    icon: <ClipboardCheck className="h-7 w-7 text-medical-500" />,
    title: "Application Assistance",
    description: "Accurate Application Submission & Expert Choice Filling Support.",
    bgColor: "from-green-50 to-green-100/50"
  },
  {
    icon: <Briefcase className="h-7 w-7 text-teal-500" />,
    title: "Career Counseling",
    description: "Expert insights into medical specializations and career opportunities.",
    bgColor: "from-purple-50 to-purple-100/50"
  },
  {
    icon: <Building className="h-7 w-7 text-teal-500" />,
    title: "Institutional Guidance",
    description: "Support in navigating college options with accurate and up-to-date insights.",
    bgColor: "from-amber-50 to-amber-100/50"
  }
];

// Using React.memo to prevent unnecessary re-renders
const ServiceCard = React.memo(({ service, index }: { service: typeof services[0], index: number }) => (
  <div 
    key={index} 
    className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden`}
  >
    <div className={`h-2 bg-gradient-to-r from-medical-400 to-teal-400`}></div>
    <div className="p-6">
      <div className="flex flex-col items-start gap-5">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${service.bgColor}`}>
          {service.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    </div>
  </div>
));

const ServicesList: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px bg-medical-300 w-8"></div>
            <span className="text-medical-600 font-medium uppercase tracking-wider text-sm flex items-center">
              <Sparkles className="h-4 w-4 mr-1" /> What We Offer
            </span>
            <div className="h-px bg-medical-300 w-8"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end support for your medical education journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-medical-500 to-teal-500 rounded-lg hover:from-medical-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
