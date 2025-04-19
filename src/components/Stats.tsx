
import React from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Users, 
  Building,
  LucideIcon
} from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { Skeleton } from '@/components/ui/skeleton';

// Map of icon names to icon components
const iconMap: Record<string, LucideIcon> = {
  Trophy,
  GraduationCap,
  Users,
  Building
};

const Stats: React.FC = () => {
  const { isLoading, stats, getContentByKey } = useContent();

  // Default stats data for fallback
  const defaultStats = [
    {
      id: '1',
      icon: 'Trophy',
      value: "95%",
      label: "Success Rate",
      description: "of our students secure admissions in their preferred medical colleges"
    },
    {
      id: '2',
      icon: 'GraduationCap',
      value: "1200+",
      label: "Success Stories",
      description: "students placed in top medical colleges across the country"
    },
    {
      id: '3',
      icon: 'Users',
      value: "25+",
      label: "Expert Counselors",
      description: "with decades of experience in medical admissions"
    },
    {
      id: '4',
      icon: 'Building',
      value: "100+",
      label: "Partner Institutions",
      description: "including government and private medical colleges"
    }
  ];

  // Use dynamic stats or fallback to defaults if empty
  const displayStats = stats.length > 0 ? stats : defaultStats;

  // Helper function to render the icon
  const renderIcon = (iconName: string | null) => {
    if (!iconName) return <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-medical-500" />;
    
    const IconComponent = iconMap[iconName] || Trophy;
    return <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-medical-500" />;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
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
                {getContentByKey('stats_section_title')?.title || "Our Impact in Numbers"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {getContentByKey('stats_section_subtitle')?.description || "We've been transforming medical aspirations into achievements for over a decade."}
              </p>
            </>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {isLoading ? 
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 sm:p-8 text-center border border-gray-100">
                <Skeleton className="h-10 w-10 mx-auto bg-gray-200 mb-3" />
                <Skeleton className="h-8 w-1/2 mx-auto bg-gray-200 mb-2" />
                <Skeleton className="h-5 w-2/3 mx-auto bg-gray-200 mb-2" />
                <Skeleton className="h-4 w-4/5 mx-auto bg-gray-200" />
              </div>
            )) : 
            displayStats.map((stat, index) => (
              <div 
                key={stat.id} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 sm:p-8 text-center border border-gray-100 card-hover"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {renderIcon(stat.icon)}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</h3>
                <h4 className="text-base sm:text-lg font-semibold text-medical-600 mb-2">{stat.label}</h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{stat.description}</p>
              </div>
            ))
          }
        </div>
        
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="max-w-2xl text-center px-4 sm:px-0">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-3/4 mx-auto bg-gray-200 mb-3" />
                <Skeleton className="h-4 w-full mx-auto bg-gray-200 mb-4" />
                <Skeleton className="h-4 w-1/3 mx-auto bg-gray-200" />
              </>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {getContentByKey('stats_footer_title')?.title || "A Decade of Excellence in MBBS Admissions"}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  {getContentByKey('stats_footer_description')?.description || "Since 2013, we've been helping students navigate the complex medical admission process with personalized guidance, strategic insights, and unwavering support."}
                </p>
                <a href="#about" className="text-medical-500 font-semibold hover:text-medical-600 transition-colors text-sm sm:text-base">
                  {getContentByKey('stats_footer_cta')?.title || "Learn more about our journey →"}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
