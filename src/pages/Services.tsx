import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { RequestCallbackForm } from '@/components/services/RequestCallbackForm';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative py-8 bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?auto=format&fit=crop&w=2070&q=80')`
        }}>
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Services & Packages</h1>
              <p className="text-lg text-gray-100 mb-8">
                Comprehensive counseling and admission services designed to help students secure their place in top medical colleges.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-medical-700">Our Comprehensive Services</h2>
              <p className="text-center text-gray-600">
                We provide end-to-end support for medical school admissions through our various service packages designed to cater to different needs.
              </p>
            </div>

            {/* Premium Package */}
            <div className="mb-16 border border-medical-100 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-medical-600 text-white py-4 px-6">
                <h3 className="text-xl md:text-2xl font-bold">Premium Admission Package</h3>
                <p className="opacity-80 mt-1">Complete end-to-end admission assistance</p>
              </div>
              
              <div className="p-6 md:p-8 bg-white">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Personalized college selection based on student profile</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Comprehensive application assistance for up to 10 colleges</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Document preparation and verification</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Direct communication with college admission offices</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Interview preparation sessions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Benefits:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Priority application processing</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>24/7 admission counselor support</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Hostel and accommodation assistance</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Post-admission orientation guidance</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-medical-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Regular updates on admission status</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-xl font-bold text-medical-700">₹50,000 - ₹1,00,000</p>
                  <p className="text-sm text-gray-500">Fees vary based on specific requirements</p>
                </div>
              </div>
            </div>
            
            {/* Standard and Basic Packages */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard Package */}
              <div className="border border-gray-200 rounded-xl shadow-md overflow-hidden">
                <div className="bg-teal-600 text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Standard Package</h3>
                  <p className="opacity-80 mt-1">Application assistance and guidance</p>
                </div>
                
                <div className="p-6 bg-white">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>College selection guidance (up to 5 colleges)</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Document preparation assistance</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Application submission support</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Basic interview tips</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Regular email/phone support</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 text-center">
                    <p className="text-lg font-bold text-teal-700">₹25,000 - ₹40,000</p>
                  </div>
                </div>
              </div>
              
              {/* Basic Package */}
              <div className="border border-gray-200 rounded-xl shadow-md overflow-hidden">
                <div className="bg-gray-700 text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Basic Package</h3>
                  <p className="opacity-80 mt-1">Essential application support</p>
                </div>
                
                <div className="p-6 bg-white">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-gray-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Basic college list recommendation</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-gray-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Document checklist</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-gray-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Application form filling guidance</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-gray-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Email support (response within 48 hours)</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 text-center">
                    <p className="text-lg font-bold text-gray-700">₹10,000 - ₹20,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Specialized Services with reduced spacing */}
        <section className="py-4 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-6">
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">NRI Quota Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Complete guidance on securing medical seats through NRI and NRI-sponsored quotas in top institutions.
                </p>
                <Link to="/nri-quota" className="text-medical-600 font-medium hover:text-medical-700">
                  Learn more
                </Link>
              </div>
              
              {/* College Selection */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-teal-700 font-bold text-xl">CS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">College Selection</h3>
                <p className="text-gray-600 mb-4">
                  Personalized recommendations of medical colleges based on your profile, preferences, and budget.
                </p>
              </div>
              
              {/* Document Verification */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-gray-700 font-bold text-xl">DV</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Document Verification</h3>
                <p className="text-gray-600 mb-4">
                  Expert verification and assistance with documentation to ensure compliance with admission requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action with Two Columns */}
        <section className="py-8 bg-gradient-to-b from-white to-medical-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">How Admission Hands Supports You</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔍</span>
                    <p className="text-gray-700"><strong>College Profiling:</strong> We assess both clinical and non-clinical aspects such as patient inflow, hospital infrastructure, academic quality, faculty, and internship exposure — helping you identify colleges that match your career goals.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <p className="text-gray-700"><strong>Transparent Budget Planning:</strong> We ensure realistic planning by clearly explaining hidden costs, government fees, and management quota expectations — allowing your family to prepare confidently.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <p className="text-gray-700"><strong>Multi-State Counseling Expertise:</strong> Our experts break down the counseling processes of various states, including AIQ, state quotas, private and deemed universities, management and NRI seats — removing confusion and uncertainty.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <p className="text-gray-700"><strong>Scientific Cutoff Analysis:</strong> We use real data to analyze previous year cutoffs and apply predictive insights based on NEET trends to help you make the smartest choices during counseling.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🗂️</span>
                    <p className="text-gray-700"><strong>Strategic Admission Planning:</strong> Every student receives a customized step-by-step roadmap to avoid missed deadlines and impulsive decisions, ensuring a smooth journey from NEET result to final admission.</p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-bold text-medical-700">Beyond Admission: Building Futures</h3>
                  <p className="text-gray-700">At Admission Hands, it's not just about securing any seat. It's about helping you secure the right seat at the right institution — one that aligns with your profile, your ambition, and your future in healthcare.</p>
                  <p className="text-gray-700">We're not here to just "get you admitted." We're here to help you make a life-changing decision with clarity, confidence, and care.</p>
                </div>
              </div>

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
