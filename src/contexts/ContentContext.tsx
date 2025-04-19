
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Define types for our dynamic content
export interface SiteContent {
  id: string;
  key: string;
  content_type: string;
  title: string | null;
  description: string | null;
  image_url: string | null;
  link_url: string | null;
  order_index: number;
  category: string | null;
}

export interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  order_index: number;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string | null;
  description: string | null;
  order_index: number;
}

export interface Testimonial {
  id: string;
  content: string;
  name: string;
  rating: number;
  image_url: string | null;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  meta_description: string | null;
  content: Record<string, any> | null;
  is_published: boolean;
}

interface ContentContextType {
  isLoading: boolean;
  heroContent: SiteContent | null;
  services: Service[];
  stats: Stat[];
  testimonials: Testimonial[];
  getContentByKey: (key: string) => SiteContent | null;
  getContentByCategory: (category: string) => SiteContent[];
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentItems, setContentItems] = useState<SiteContent[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Find specific content by key
  const getContentByKey = (key: string) => {
    return contentItems.find(item => item.key === key) || null;
  };

  // Get content items by category
  const getContentByCategory = (category: string) => {
    return contentItems
      .filter(item => item.category === category)
      .sort((a, b) => a.order_index - b.order_index);
  };

  // Hero content is a special case
  const heroContent = getContentByKey('hero');

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        // Using a more generic approach that works with the current type definitions
        // Fetch site content
        const contentData = await supabase
          .from('videos') // We use 'videos' as the base table name for type compatibility
          .select('*')
          .returns<any[]>() // Cast to any for now
          .then(result => {
            // Handle potential errors
            if (result.error) throw result.error;
            return result.data || [];
          });
         
        // We'll create mock data for now since we can't access the actual tables yet
        const mockSiteContent: SiteContent[] = [
          {
            id: '1',
            key: 'hero',
            content_type: 'hero',
            title: 'Expert Consultation for Your',
            description: 'MBBS, MD/MS Journey',
            image_url: null,
            link_url: null,
            order_index: 1,
            category: 'hero',
          },
          {
            id: '2',
            key: 'hero_subtitle',
            content_type: 'text',
            title: null,
            description: 'Expert guidance to secure admissions in top medical colleges. Personalized mentoring that turns aspirations into achievements.',
            image_url: null,
            link_url: null,
            order_index: 2,
            category: 'hero',
          },
          {
            id: '3',
            key: 'services_section_title',
            content_type: 'text',
            title: 'Our Comprehensive Services',
            description: null,
            image_url: null,
            link_url: null,
            order_index: 1,
            category: 'services',
          }
        ];
        
        setContentItems(mockSiteContent);
        
        // Mock services data
        const mockServices: Service[] = [
          {
            id: '1',
            title: "College Selection",
            description: "Strategic guidance to choose the right medical institutions based on your profile, preferences, and potential.",
            icon: 'GraduationCap',
            order_index: 1
          },
          {
            id: '2',
            title: "Application Assistance",
            description: "Comprehensive support for entrance exams, application procedures, and document verification to ensure error-free submissions.",
            icon: 'ClipboardCheck',
            order_index: 2
          },
          {
            id: '3',
            title: "Career Counseling",
            description: "Insights into various medical specializations, career paths, and opportunities to help you make informed decisions.",
            icon: 'Briefcase',
            order_index: 3
          },
          {
            id: '4',
            title: "Institution Connect",
            description: "Direct connections with 100+ medical colleges and universities to streamline your admission process.",
            icon: 'Building',
            order_index: 4
          }
        ];
        
        setServices(mockServices);
        
        // Mock stats data
        const mockStats: Stat[] = [
          {
            id: '1',
            value: "95%",
            label: "Success Rate",
            description: "of our students secure admissions in their preferred medical colleges",
            icon: 'Trophy',
            order_index: 1
          },
          {
            id: '2',
            value: "1200+",
            label: "Success Stories",
            description: "students placed in top medical colleges across the country",
            icon: 'GraduationCap',
            order_index: 2
          },
          {
            id: '3',
            value: "25+",
            label: "Expert Counselors",
            description: "with decades of experience in medical admissions",
            icon: 'Users',
            order_index: 3
          },
          {
            id: '4',
            value: "100+",
            label: "Partner Institutions",
            description: "including government and private medical colleges",
            icon: 'Building',
            order_index: 4
          }
        ];
        
        setStats(mockStats);
        
        // Mock testimonials data
        const mockTestimonials: Testimonial[] = [
          {
            id: '1',
            content: "Admission Hands guided me through every step of the MBBS application process. Their personalized approach and deep knowledge of medical admissions made all the difference.",
            name: "Dr. Priya Sharma",
            rating: 5,
            image_url: "https://randomuser.me/api/portraits/women/67.jpg"
          },
          {
            id: '2',
            content: "I was struggling with choosing the right medical college until I found Admission Hands. Their counselors helped me identify the best options based on my profile and preferences.",
            name: "Dr. Rahul Verma",
            rating: 5,
            image_url: "https://randomuser.me/api/portraits/men/66.jpg"
          },
          {
            id: '3',
            content: "The interview preparation sessions were incredibly helpful. I gained confidence and performed well in all my medical college interviews. Highly recommend their services!",
            name: "Dr. Anjali Gupta",
            rating: 5,
            image_url: "https://randomuser.me/api/portraits/women/42.jpg"
          },
          {
            id: '4',
            content: "Thanks to Admission Hands, I secured admission in my dream medical college. Their strategic guidance and support throughout the process was invaluable.",
            name: "Dr. Vikram Singh",
            rating: 5,
            image_url: "https://randomuser.me/api/portraits/men/73.jpg"
          }
        ];
        
        setTestimonials(mockTestimonials);

      } catch (error) {
        console.error('Error fetching content:', error);
        toast.error('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <ContentContext.Provider
      value={{
        isLoading,
        heroContent,
        services,
        stats,
        testimonials,
        getContentByKey,
        getContentByCategory,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
