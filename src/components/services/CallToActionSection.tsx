
import React from 'react';
import { RequestCallbackForm } from './RequestCallbackForm';
import SupportSection from './SupportSection';

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
