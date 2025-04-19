
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import CallToActionSection from '@/components/services/CallToActionSection';
import ServiceDetails from '@/components/services/ServiceDetails';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <ServiceDetails />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
