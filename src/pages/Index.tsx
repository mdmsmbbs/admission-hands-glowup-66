
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesList from '@/components/Services';
import VideoSection from '@/components/VideoSection';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  // Organization structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AdmissionHands",
    "url": "https://www.admissionhands.com",
    "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "Expert guidance for medical college admissions in India. Get personalized counseling for MBBS and MD/MS.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919873133846",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/admissionhands",
      "https://twitter.com/admission_hands",
      "https://www.linkedin.com/company/admissionhands"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="AdmissionHands - Expert Medical College Admission Guidance"
        description="Get expert guidance for MBBS, MD/MS admissions in top medical colleges. Personalized counseling, guaranteed results. Start your medical journey today."
        keywords="medical admissions, MBBS admission, medical college counseling, NRI quota, medical education, admission guidance"
        structuredData={organizationSchema}
      />
      
      <main className="flex-grow">
        <Hero />
        <ServicesList />
        <VideoSection />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
