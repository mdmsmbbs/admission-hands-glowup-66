
import React, { lazy, Suspense, useEffect } from 'react';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import Stats from '@/components/Stats';
import { Toaster } from '@/components/ui/toaster';

// Use lazy loading for components that are not immediately visible
const ServicesList = lazy(() => import('@/components/ServicesList'));
const RecommendedColleges = lazy(() => import('@/components/RecommendedColleges'));
const VideoSection = lazy(() => import('@/components/VideoSection'));

// Optimized loading placeholders
const SectionLoader = () => (
  <div className="py-8 w-full" aria-label="Loading content">
    <div className="container-custom">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
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

  // Improved component preloading strategy
  useEffect(() => {
    // Preload components that will be needed soon after initial render
    const preloadComponents = () => {
      // Use browser idle time to preload components
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          import('@/components/ServicesList');
        });
        window.requestIdleCallback(() => {
          import('@/components/RecommendedColleges');
        }, { timeout: 2000 });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => import('@/components/ServicesList'), 1000);
        setTimeout(() => import('@/components/RecommendedColleges'), 2000);
      }
    };
    
    // Wait until after the initial render
    const timer = setTimeout(preloadComponents, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col mobile-footer-padding w-full" style={{ zIndex: 20 }}>
      <SEO 
        title="AdmissionHands - Expert Medical College Admission Guidance"
        description="Get expert guidance for MBBS, MD/MS admissions in top medical colleges. Personalized counseling, guaranteed results."
        keywords="medical admissions, MBBS admission, MD MS admission, medical college counseling, NRI quota, medical education"
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
      
      <Toaster />
    </div>
  );
};

export default Index;
