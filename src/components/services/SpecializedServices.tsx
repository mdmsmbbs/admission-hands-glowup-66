
import React from 'react';
import { Link } from 'react-router-dom';

const SpecializedServices = () => {
  return (
    <section className="py-4 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-3">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Specialized Services</h2>
          <p className="text-center text-gray-600">
            Targeted assistance for specific aspects of the medical admission process
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {/* NRI Quota Service */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-medical-100 flex items-center justify-center mb-4">
              <span className="text-medical-700 font-bold text-xl">NRI</span>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-3">NRI Quota Assistance</h3>
            <p className="text-gray-600 mb-4 text-center">
              Complete guidance on securing medical seats through NRI and NRI-sponsored quotas in top institutions.
            </p>
            <div className="text-center">
              <Link to="/nri-quota" className="text-medical-600 font-medium hover:text-medical-700">
                Learn more
              </Link>
            </div>
          </div>
          
          {/* College Selection */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <span className="text-teal-700 font-bold text-xl">CS</span>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-3">College Selection</h3>
            <p className="text-gray-600 mb-4 text-center">
              Personalized recommendations of medical colleges based on your profile, preferences, and budget.
            </p>
          </div>
          
          {/* Document Verification */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-gray-700 font-bold text-xl">DV</span>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Document Verification</h3>
            <p className="text-gray-600 mb-4 text-center">
              Expert verification and assistance with documentation to ensure compliance with admission requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
