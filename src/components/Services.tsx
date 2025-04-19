
import React from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Briefcase, 
  Building,
  LucideIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '@/contexts/ContentContext';
import { Skeleton } from '@/components/ui/skeleton';

// Map of icon names to icon components
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  ClipboardCheck,
  Briefcase,
  Building
};

const Services: React.FC = () => {
  const { isLoading, services, getContentByKey } = useContent();

  // Default services data for fallback
  const defaultServices = [
    {
      id: '1',
      icon: 'GraduationCap',
      title: "College Selection",
      description: "Strategic guidance to choose the right medical institutions based on your profile, preferences, and potential."
    },
    {
      id: '2',
      icon: 'ClipboardCheck',
      title: "Application Assistance",
      description: "Comprehensive support for entrance exams, application procedures, and document verification to ensure error-free submissions."
    },
    {
      id: '3',
      icon: 'Briefcase',
      title: "Career Counseling",
      description: "Insights into various medical specializations, career paths, and opportunities to help you make informed decisions."
    },
    {
      id: '4',
      icon: 'Building',
      title: "Institution Connect",
      description: "Direct connections with 100+ medical colleges and universities to streamline your admission process."
    }
  ];

  // Use dynamic services or fallback to defaults if empty
  const displayServices = services.length > 0 ? services : defaultServices;

  // Helper function to render the icon
  const renderIcon = (iconName: string | null) => {
    if (!iconName) return <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-medical-500" />;
    
    const IconComponent = iconMap[iconName] || GraduationCap;
    return <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-medical-500" />;
  };

  const servicesTitle = getContentByKey('services_section_title');
  const servicesSubtitle = getContentByKey('services_section_subtitle');
  const servicesCta = getContentByKey('services_cta');

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-1/2 mx-auto bg-gray-200 mb-3" />
              <Skeleton className="h-6 w-2/3 mx-auto bg-gray-200" />
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {servicesTitle?.title || "Our Comprehensive Services"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {servicesSubtitle?.description || "From college selection to admission confirmation, we provide end-to-end support for your medical education journey."}
              </p>
            </>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {isLoading ? 
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100">
                <Skeleton className="h-10 w-10 bg-gray-200 mb-4" />
                <Skeleton className="h-6 w-1/2 bg-gray-200 mb-3" />
                <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                <Skeleton className="h-4 w-5/6 bg-gray-200" />
              </div>
            )) : 
            displayServices.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 sm:mb-6">{renderIcon(service.icon)}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            ))
          }
        </div>
        
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-medical-50 to-teal-50 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6 sm:pr-8">
              {isLoading ? (
                <>
                  <Skeleton className="h-6 w-2/3 bg-gray-200 mb-3" />
                  <Skeleton className="h-4 w-full bg-gray-200" />
                </>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {getContentByKey('services_cta_title')?.title || "Explore our complete service packages"}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {getContentByKey('services_cta_subtitle')?.description || "Visit our services page to learn about our Premium, Standard, and Basic packages designed to fit your specific admission needs."}
                  </p>
                </>
              )}
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link to="/services" className="btn-primary text-sm sm:text-base bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                {servicesCta?.title || "View All Services"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
