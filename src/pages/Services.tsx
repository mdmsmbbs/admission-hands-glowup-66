
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-medical-50 to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services & Packages</h1>
              <p className="text-lg text-gray-600 mb-8">
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
                
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <p className="text-xl font-bold text-medical-700">₹50,000 - ₹1,00,000</p>
                    <p className="text-sm text-gray-500">Fees vary based on specific requirements</p>
                  </div>
                  <button className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center">
                    Contact for Details
                    <ArrowRight size={18} className="ml-2" />
                  </button>
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
                  
                  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-lg font-bold text-teal-700">₹25,000 - ₹40,000</p>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md font-medium transition-colors text-sm">
                      Learn More
                    </button>
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
                  
                  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-lg font-bold text-gray-700">₹10,000 - ₹20,000</p>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-medium transition-colors text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Specialized Services */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Specialized Services</h2>
              <p className="text-center text-gray-600">
                Targeted assistance for specific aspects of the medical admission process
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* NRI Quota Service */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-medical-100 flex items-center justify-center mb-4">
                  <span className="text-medical-700 font-bold text-xl">NRI</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">NRI Quota Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Complete guidance on securing medical seats through NRI and NRI-sponsored quotas in top institutions.
                </p>
                <Link to="/nri-quota" className="text-medical-600 font-medium hover:text-medical-700 flex items-center">
                  Learn more <ArrowRight size={16} className="ml-1" />
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
                <a href="#" className="text-teal-600 font-medium hover:text-teal-700 flex items-center">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
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
                <a href="#" className="text-gray-600 font-medium hover:text-gray-700 flex items-center">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-b from-white to-medical-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Medical Education Journey?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Book a free 30-minute consultation with our experts to discuss your goals and find the right service package for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                  Schedule Free Call
                </button>
                <button className="border border-medical-600 text-medical-600 hover:bg-medical-50 px-8 py-3 rounded-md font-medium transition-colors">
                  View Success Stories
                </button>
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
