
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from '@/components/about/AboutHero';
import OurVision from '@/components/about/OurVision';
import ContactForm from '@/components/ContactForm';
import TrackRecord from '@/components/about/TrackRecord';

const AboutContact = () => {
  // Effect to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col know-us-page-content pt-24 md:pt-32"> {/* Added more top padding to fix overlap */}
      <Helmet>
        <title>About Us & Contact | Admission Hands</title>
        <meta name="description" content="Learn about AdmissionHands' mission, values, and how we can assist with your medical admission journey. Contact us for personalized guidance." />
      </Helmet>
      
      <main className="flex-grow">
        <AboutHero />
        <OurVision />
        <TrackRecord />
        <ContactForm />
      </main>
    </div>
  );
};

export default AboutContact;
