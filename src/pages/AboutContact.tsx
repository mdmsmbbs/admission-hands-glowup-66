
import React, { useEffect } from 'react';
import AboutHero from '@/components/about/AboutHero';
import TrackRecord from '@/components/about/TrackRecord';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurVision from '@/components/about/OurVision';
import SEO from '@/components/SEO';
import ContactSection from '@/components/terms/ContactSection';

const AboutContact = () => {
  // Effect to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Local Business structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AdmissionHands",
    "description": "Expert medical college admission guidance and counseling services",
    "url": "https://www.admissionhands.com/know-us",
    "telephone": "+919310301949",
    "openingHours": "Mo-Su 10:00-22:00",
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
        description="Learn about AdmissionHands - India's trusted medical admission consultancy with 12+ years of experience in MBBS and MD/MS counseling."
        keywords="medical admission consultancy, MBBS guidance, medical college experts, admission counseling"
        canonical="https://www.admissionhands.com/know-us"
        structuredData={localBusinessSchema}
      />
      
      <AboutHero />
      <TrackRecord />
      <WhyChooseUs />
      <OurVision />
      
      <div className="container-custom py-12 bg-gray-50" id="contact-us">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
