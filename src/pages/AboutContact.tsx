
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import TrackRecord from '@/components/about/TrackRecord';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurVision from '@/components/about/OurVision';
import Footer from '@/components/Footer';

const AboutContact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AboutHero />
      <TrackRecord />
      <WhyChooseUs />
      <OurVision />
      <Footer />
    </div>
  );
};

export default AboutContact;
