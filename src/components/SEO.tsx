
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  structuredData?: object;
  preload?: Array<{href: string, as: string, type?: string}>;
}

const SEO: React.FC<SEOProps> = ({
  title = 'AdmissionHands - Expert Medical College Admission Guidance',
  description = 'Get expert guidance for MBBS, MD/MS admissions in top medical colleges. Personalized counseling, guaranteed results.',
  keywords = 'medical admissions, MBBS admission, medical college counseling, NRI quota, medical education',
  ogTitle = 'AdmissionHands - Medical College Admission Experts',
  ogDescription = 'Expert guidance for medical college admissions in India. Get personalized counseling for MBBS and MD/MS.',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogUrl = 'https://www.admissionhands.com',
  canonical = '',
  structuredData,
  preload = [],
}) => {
  const currentUrl = canonical || window.location.href;
  
  // Default preload resources for better performance
  const defaultPreload = [
    { href: '/lovable-uploads/12e86969-b579-43b5-9f4c-7442f78114e5.png', as: 'image' }
  ];
  
  const allPreloadResources = [...defaultPreload, ...preload];
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Performance Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Resource hints for performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical assets */}
      {allPreloadResources.map((resource, index) => (
        <link 
          key={index}
          rel="preload" 
          href={resource.href} 
          as={resource.as}
          type={resource.type}
          crossOrigin={resource.as === 'font' ? 'anonymous' : undefined}
        />
      ))}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AdmissionHands" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@admission_hands" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default React.memo(SEO);
