
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RequestCallbackForm } from '@/components/services/RequestCallbackForm';
import ServicesHero from '@/components/services/ServicesHero';
import SpecializedServices from '@/components/services/SpecializedServices';
import SupportSection from '@/components/services/SupportSection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <SpecializedServices />
        
        {/* Call to Action with Two Columns */}
        <section className="py-8 bg-gradient-to-b from-white to-medical-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <SupportSection />
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Request a Callback</h3>
                <RequestCallbackForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
