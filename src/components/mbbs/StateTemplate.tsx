
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface StateTemplateProps {
  stateName: string;
}

const StateTemplate: React.FC<StateTemplateProps> = ({ stateName }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in {stateName} - AdmissionHands</title>
        <meta 
          name="description" 
          content={`Find detailed information about MBBS colleges in ${stateName}. List of medical colleges, fees, cutoffs, and admission processes in ${stateName}.`} 
        />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-r from-medical-50 to-blue-50">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MBBS in {stateName}
            </h1>
            <p className="text-lg text-gray-700">
              Comprehensive information about medical colleges in {stateName}.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <p className="text-gray-600">Content for {stateName} will be added soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StateTemplate;
