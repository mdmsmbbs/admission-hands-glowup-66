
import React, { useEffect } from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import CallToActionSection from '@/components/services/CallToActionSection';
import SEO from '@/components/SEO';
import { generateServiceSchema } from '@/utils/schemaGenerator';
import SpecializedServices from '@/components/services/SpecializedServices';
import { Toaster } from '@/components/ui/toaster';

const ServicesPage = () => {
  // Generate schema for services
  const servicesSchema = generateServiceSchema(
    "Medical College Admission Services", 
    "Expert guidance services for MBBS, MD/MS admissions across India, including NRI quota and deemed universities.",
    {
      "offers": {
        "@type": "Offer",
        "price": "15000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      "areaServed": "India"
    }
  );
  
  // Effect to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Medical Admission Services - AdmissionHands"
        description="Comprehensive admission services for MBBS, BDS, and MD/MS students. Get personalized counseling, document assistance, and guaranteed results."
        keywords="medical admission services, MBBS counseling, medical college admission guidance, nri quota services, medical entrance counseling"
        ogTitle="Medical Admission Counseling Services - AdmissionHands"
        ogDescription="Expert services for medical admissions in India. Get personalized counseling from experienced professionals."
        structuredData={servicesSchema}
      />
      
      <main className="flex-grow">
        <ServicesHero />
        <div className="container-custom py-8">
          <SpecializedServices />
        </div>
        <CallToActionSection />
      </main>
      
      <Toaster />
    </div>
  );
};

export default ServicesPage;
