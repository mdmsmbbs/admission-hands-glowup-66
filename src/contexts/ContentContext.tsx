
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
        // Fetch site content
        const { data: contentData, error: contentError } = await supabase
          .from('site_content')
          .select('*')
          .order('order_index');
          
        if (contentError) throw contentError;
        setContentItems(contentData || []);

        // Fetch services
        const { data: servicesData, error: servicesError } = await supabase
          .from('services')
          .select('*')
          .order('order_index');
          
        if (servicesError) throw servicesError;
        setServices(servicesData || []);

        // Fetch stats
        const { data: statsData, error: statsError } = await supabase
          .from('stats')
          .select('*')
          .order('order_index');
          
        if (statsError) throw statsError;
        setStats(statsData || []);

        // Fetch testimonials
        const { data: testimonialsData, error: testimonialsError } = await supabase
          .from('testimonials')
          .select('*');
          
        if (testimonialsError) throw testimonialsError;
        setTestimonials(testimonialsData || []);
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
