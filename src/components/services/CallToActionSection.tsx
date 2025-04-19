
import React from 'react';
import { RequestCallbackForm } from './RequestCallbackForm';
import SpecializedServices from './SpecializedServices';

const CallToActionSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-medical-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <SpecializedServices />
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Request a Callback</h3>
              <RequestCallbackForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
