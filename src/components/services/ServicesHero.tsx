
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative py-8 bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?auto=format&fit=crop&w=2070&q=80')`
    }}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Service Details</h1>
          <p className="text-lg text-gray-100 mb-8">
            Comprehensive counseling and admission services designed to help students secure their place in top medical colleges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
