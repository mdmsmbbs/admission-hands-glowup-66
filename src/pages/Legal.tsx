
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy & Terms</h1>
            <p className="text-gray-300">Effective Date: 25th April 2025</p>
          </div>
        </header>

        <nav className="bg-gray-50 py-4">
          <div className="container-custom flex justify-center gap-6 flex-wrap">
            <a href="#privacy" className="text-gray-900 font-medium hover:text-medical-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-900 font-medium hover:text-medical-600 transition-colors">Terms & Conditions</a>
            <a href="#contact" className="text-gray-900 font-medium hover:text-medical-600 transition-colors">Contact Information</a>
          </div>
        </nav>

        <div className="container-custom py-12">
          <div className="max-w-3xl mx-auto space-y-12">
            <section id="privacy" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-200">Privacy Policy</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h3>
                  <p className="text-gray-700">We may collect personal data including contact details, educational background, location information, and any additional information shared voluntarily.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Purpose of Collection</h3>
                  <p className="text-gray-700">We use your information to offer personalized admission consulting, communicate updates, and fulfill legal obligations.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Data Sharing & Confidentiality</h3>
                  <p className="text-gray-700">We do not sell or rent your data. We may share it with partner institutions (with your consent), service providers, or legal authorities when required.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Data Protection</h3>
                  <p className="text-gray-700">We employ appropriate security measures, although no system is entirely immune to risk.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Cookies</h3>
                  <p className="text-gray-700">Cookies may be used to enhance user experience. You may disable cookies in your browser settings.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6. Your Rights</h3>
                  <p className="text-gray-700">You have the right to access, correct, or delete your data and withdraw consent by contacting us at <strong>info@admissionhands.com</strong>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7. Modifications</h3>
                  <p className="text-gray-700">This policy may be updated without prior notice. Continued use indicates acceptance of changes.</p>
                </div>
              </div>
            </section>

            <section id="terms" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-200">Terms & Conditions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Scope of Services</h3>
                  <p className="text-gray-700">Admission Hands offers guidance for MBBS, MD, and MS admissions in India, including documentation support and eligibility assessment.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Client Obligations</h3>
                  <p className="text-gray-700">You agree to provide accurate information, follow deadlines, and remain responsive throughout the process.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Fees & No Refund Policy</h3>
                  <p className="text-gray-700">All fees are payable in advance and <strong>non-refundable under any circumstances</strong>, including admission failure, personal decisions, or withdrawal of services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4. No Admission Guarantee</h3>
                  <p className="text-gray-700">Admission Hands does not guarantee admission to any institution. Final admission depends on government or university decisions.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Intellectual Property</h3>
                  <p className="text-gray-700">All content is the property of Admission Hands and may not be copied or distributed without permission.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6. Limitation of Liability</h3>
                  <p className="text-gray-700">We are not liable for admission denials, changes in policies, or third-party delays and breaches.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7. Governing Law</h3>
                  <p className="text-gray-700">All legal matters are governed by the laws of India and fall under the jurisdiction of courts in <strong>Noida, Uttar Pradesh</strong>.</p>
                </div>
              </div>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-200">Contact Information</h2>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> info@admissionhands.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91-9873133846</p>
                <p className="text-gray-700"><strong>Address:</strong> Logix Mall, Noida City Center, Noida, U.P – 201301</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
