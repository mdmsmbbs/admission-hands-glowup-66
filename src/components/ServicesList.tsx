
import React from 'react';
import { 
  GraduationCap,
  ClipboardCheck,
  Compass,
  Users,
  LineChart,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <GraduationCap className="h-7 w-7 text-white" />,
    emoji: "🎓",
    title: "Admission Strategy & Planning",
    description: "Tailored roadmaps crafted by expert counselors to align your career goals with the right institutions.",
    bgGradient: "from-medical-500 to-blue-700"
  },
  {
    icon: <ClipboardCheck className="h-7 w-7 text-white" />,
    emoji: "📝",
    title: "Application & Choice Filling",
    description: "Flawless, step-by-step guidance for accurate applications, preference selection, and document handling.",
    bgGradient: "from-teal-500 to-teal-700"
  },
  {
    icon: <Compass className="h-7 w-7 text-white" />,
    emoji: "🧭",
    title: "College Discovery & Shortlisting",
    description: "Smart, data-backed college recommendations based on rankings, fees, location, and eligibility.",
    bgGradient: "from-purple-500 to-indigo-700"
  },
  {
    icon: <Users className="h-7 w-7 text-white" />,
    emoji: "💡",
    title: "Personalized Counseling",
    description: "1-on-1 support from 25+ experienced admission experts for every stage of your journey.",
    bgGradient: "from-amber-500 to-orange-700"
  },
  {
    icon: <LineChart className="h-7 w-7 text-white" />,
    emoji: "📊",
    title: "Real-Time Seat & Fee Insights",
    description: "Access the latest seat matrix, fee structures, and admission trends — always stay ahead.",
    bgGradient: "from-green-500 to-emerald-700"
  },
  {
    icon: <CheckCircle className="h-7 w-7 text-white" />,
    emoji: "🔒",
    title: "Post-Admission Support",
    description: "Smooth transition with support on verification, onboarding, and college formalities.",
    bgGradient: "from-rose-500 to-red-700"
  }
];

// Using React.memo to prevent unnecessary re-renders
const ServiceCard = React.memo(({ service, index }: { service: typeof services[0], index: number }) => (
  <div 
    key={index} 
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex flex-col h-full">
      <div className={`p-4 bg-gradient-to-r ${service.bgGradient} flex items-center justify-between`}>
        <span className="text-2xl">{service.emoji}</span>
        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
          {service.icon}
        </div>
      </div>
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
