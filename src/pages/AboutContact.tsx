
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import TrackRecord from '@/components/about/TrackRecord';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurVision from '@/components/about/OurVision';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AboutContact = () => {
  // Local Business structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AdmissionHands",
    "description": "Expert medical college admission guidance and counseling services",
    "url": "https://www.admissionhands.com/know-us",
    "telephone": "+919873133846",
    "openingHours": "Mo-Sa 09:00-18:00",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "priceRange": "₹₹₹",
    "areaServed": "India"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About AdmissionHands - Medical Admission Experts"
        description="Learn about AdmissionHands - India's trusted medical admission consultancy with 13+ years of experience in MBBS and MD/MS counseling."
        keywords="medical admission consultancy, MBBS guidance, medical college experts, admission counseling"
        canonical="https://www.admissionhands.com/know-us"
        structuredData={localBusinessSchema}
      />
      
      <AboutHero />
      <TrackRecord />
      <WhyChooseUs />
      <OurVision />
      <Footer />
    </div>
  );
};

export default AboutContact;
