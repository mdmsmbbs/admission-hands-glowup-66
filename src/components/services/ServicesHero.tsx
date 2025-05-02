
import React from 'react';
import SupportSection from './SupportSection';
import { Card, CardContent } from '@/components/ui/card';

const ServicesHero = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-medical-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-12 w-72 h-72 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-medical-100 to-teal-100 rounded-full">
              <span className="h-2 w-2 rounded-full bg-medical-500 animate-pulse"></span>
              <span className="text-sm font-medium text-medical-700">Trusted by 1200+ medical students</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-medical-700 via-medical-600 to-teal-600 bg-clip-text text-transparent">
            Personalized Admission Solutions for Every Medical Aspirant
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            At Admission Hands, we provide expert-led counseling designed to help you secure admission in top medical colleges across India — with complete support, stress-free guidance, and absolute clarity at every step.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-medical-600 to-teal-600 h-2 w-full"></div>
            <div className="p-6 md:p-8">
              <SupportSection />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesHero;
