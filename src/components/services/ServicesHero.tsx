
import React from 'react';
import SupportSection from './SupportSection';

const ServicesHero = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Personalized Admission Solutions for Every Medical Aspirant
          </h1>
          <p className="text-lg text-black mb-8">
            Comprehensive counseling and admission services designed to help students secure their place in top medical colleges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SupportSection />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
