
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Building, MapPin, Users, FileText } from 'lucide-react';

const MBBSIndia: React.FC = () => {
  const phoneNumber = "+919873133846";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in India - AdmissionHands</title>
        <meta name="description" content="Find detailed information about MBBS colleges in India. State-wise list of medical colleges, fees, cutoffs, and admission processes across India." />
        <meta name="keywords" content="MBBS India, medical colleges, state-wise MBBS, medical admission, NEET cutoff" />
      </Helmet>

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section - Saffron (top part of tricolor) */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-400 py-16 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  MBBS in India
                </h1>
                <p className="text-lg md:text-xl text-white mb-6">
                  Comprehensive information about medical colleges across popular Indian states and deemed universities. Find details about fees, seats, cutoffs, and admission processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-all shadow-md hover:shadow-lg text-center">
                    Get Expert Guidance
                  </a>
                  <Link to="/services" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-2 px-6 rounded-md transition-all text-center">
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1470&auto=format&fit=crop" 
                  alt="Medical students" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Information Section - White (middle part of tricolor) */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                MBBS Education in India
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                India has a well-established medical education system with over 600 medical colleges offering MBBS programs across the country.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-orange-50 w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">NEET Required</h3>
                <p className="text-gray-600">
                  National Eligibility cum Entrance Test (NEET) is mandatory for admission to all medical colleges in India.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">5.5 Year Duration</h3>
                <p className="text-gray-600">
                  MBBS program in India spans 4.5 years of academic study followed by 1 year of mandatory internship.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-green-50 w-16 h-16 flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">600+ Medical Colleges</h3>
                <p className="text-gray-600">
                  India has both government and private medical colleges across all states and union territories.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Removed: MBBS Colleges by State Section */}
        
        {/* Admission Process - Complementary blue color */}
        <section className="py-16 bg-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                MBBS Admission Process
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Understanding the step-by-step process for securing admission in Indian medical colleges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1470&auto=format&fit=crop" 
                  alt="Medical college admission process" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center text-orange-700 font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">NEET Examination</h3>
                    <p className="text-gray-600">Appear for the National Eligibility cum Entrance Test (NEET) conducted by NTA.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 font-bold border border-gray-200">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Counseling Registration</h3>
                    <p className="text-gray-600">Register for counseling conducted by MCC for All India Quota or state counseling authorities.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-green-700 font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Choice Filling</h3>
                    <p className="text-gray-600">Fill your preferred colleges and courses in order of preference.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center text-orange-700 font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Seat Allotment</h3>
                    <p className="text-gray-600">Seats are allotted based on NEET rank, choices filled, and available seats.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 font-bold border border-gray-200">5</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Reporting & Admission</h3>
                    <p className="text-gray-600">Report to the allotted college with required documents and complete the admission process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fee Structure Overview - light green background */}
        <section className="py-16 bg-green-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fee Structure Overview
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                MBBS fees vary significantly across different states and types of institutions in India.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-green-100">
                    <th className="py-3 px-4 text-left border-b">Type of College</th>
                    <th className="py-3 px-4 text-right border-b">Approximate Annual Fee Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Government Medical Colleges</td>
                    <td className="py-3 px-4 text-right border-b">₹25,000 - ₹1,00,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Private Medical Colleges</td>
                    <td className="py-3 px-4 text-right border-b">₹5,00,000 - ₹25,00,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Deemed Universities</td>
                    <td className="py-3 px-4 text-right border-b">₹7,00,000 - ₹30,00,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Management Quota</td>
                    <td className="py-3 px-4 text-right border-b">₹15,00,000 - ₹50,00,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">NRI Quota</td>
                    <td className="py-3 px-4 text-right border-b">₹15,00,000 - ₹70,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center text-gray-600 text-sm">
              <p>* Fees mentioned are approximate and may vary based on individual institutions and states.</p>
              <p className="text-xs text-gray-500 mt-1 italic">*Fees and Seat Matrix (Seat Quotas) subject to change as per college and Government notifications.</p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Need Personalized Guidance?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Our experts can help you navigate the complex medical admission process and find the best college that matches your preferences and NEET score.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="bg-white text-orange-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg text-center">
                    Call Now
                  </a>
                  <Link to="/know-us" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-all text-center">
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl text-gray-800">
                <h3 className="text-xl font-bold mb-4">Why Choose AdmissionHands?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-50 p-1 rounded-full">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Expert Counselors</span>
                      <p className="text-sm text-gray-600">Guidance from experienced medical education counselors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-1 rounded-full border border-gray-200">
                      <MapPin className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Pan-India Coverage</span>
                      <p className="text-sm text-gray-600">Information and assistance for colleges across all states</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 p-1 rounded-full">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Documentation Support</span>
                      <p className="text-sm text-gray-600">Complete assistance with all required paperwork and verification</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MBBSIndia;
