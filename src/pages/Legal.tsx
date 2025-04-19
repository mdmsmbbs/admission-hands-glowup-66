
import React from 'react';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy & Terms | Admission Hands</title>
      </Helmet>

      <main className="flex-grow">
        <header className="bg-gray-900 text-white py-12">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy & Terms</h1>
            <p className="text-gray-300">Legal Information for Admission Hands Users</p>
          </div>
        </header>

        <nav className="bg-gray-50 py-4">
          <div className="container-custom flex justify-center gap-6 flex-wrap">
            <a href="#privacy" className="text-gray-900 font-medium hover:text-medical-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-900 font-medium hover:text-medical-600 transition-colors">Terms of Service</a>
            <a href="#disclaimer" className="text-gray-900 font-medium hover:text-medical-600 transition-colors">Disclaimer</a>
          </div>
        </nav>

        <div className="container-custom py-12">
          <div className="max-w-3xl mx-auto space-y-12">
            <section id="privacy" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. It is Admission Hands' policy to respect your privacy regarding any information we may collect from you across our website.
              </p>
              <p className="text-gray-700">
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
              </p>
            </section>

            <section id="terms" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
              <p className="text-gray-700">
                By accessing our website, you are agreeing to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.
              </p>
              <p className="text-gray-700">
                All content provided on this website is for informational purposes only. Admission Hands makes no representations as to the accuracy or completeness of any information on this site.
              </p>
            </section>

            <section id="disclaimer" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
              <p className="text-gray-700">
                The materials on Admission Hands' website are provided on an 'as is' basis. Admission Hands makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
