
import React, { lazy, Suspense, useEffect } from 'react';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import Stats from '@/components/Stats';

// Use lazy loading for components that are not immediately visible
const ServicesList = lazy(() => import('@/components/ServicesList'));
const RecommendedColleges = lazy(() => import('@/components/RecommendedColleges'));
const VideoSection = lazy(() => import('@/components/VideoSection'));

// Loading placeholders
const SectionLoader = () => (
  <div className="py-12 w-full">
    <div className="container-custom">
      <div className="animate-pulse flex flex-col items-center space-y-8">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  // Organization structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AdmissionHands",
    "url": "https://www.admissionhands.com",
    "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "Expert guidance for medical college admissions in India. Get personalized counseling for MBBS, PG (MD/MS), and SS programs.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919873133846",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/admissionhands",
      "https://www.linkedin.com/company/admissionhands"
    ]
  };

  // Preload critical components
  useEffect(() => {
    // Preload components that will be needed soon after initial render
    const preloadComponents = async () => {
      const servicesListModule = import('@/components/ServicesList');
      const recommendedCollegesModule = import('@/components/RecommendedColleges');
      
      try {
        await Promise.all([servicesListModule, recommendedCollegesModule]);
      } catch (error) {
        console.error('Error preloading components:', error);
      }
    };
    
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        preloadComponents();
      });
    } else {
      setTimeout(preloadComponents, 200);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col mobile-footer-padding">
      <SEO 
        title="AdmissionHands - Expert Medical College Admission Guidance"
        description="Get expert guidance for MBBS, PG (MD/MS), and SS admissions in top medical colleges. Personalized counseling, guaranteed results. Start your medical journey today."
        keywords="medical admissions, MBBS admission, MD MS admission, medical college counseling, NRI quota, medical education, admission guidance"
        structuredData={organizationSchema}
      />
      
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <ServicesList />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <RecommendedColleges />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <VideoSection />
      </Suspense>
      <Stats />
    </div>
  );
};

export default Index;
