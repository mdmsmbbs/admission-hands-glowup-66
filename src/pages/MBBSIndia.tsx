
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, GraduationCap, Building, MapPin, Users, FileText } from 'lucide-react';

const states = [
  { name: 'Karnataka', colleges: 60, image: 'https://images.unsplash.com/photo-1570557026077-71f8a3ee163c?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Rajasthan', colleges: 23, image: 'https://images.unsplash.com/photo-1590083948603-b270aff8d5e1?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Uttar Pradesh', colleges: 59, image: 'https://images.unsplash.com/photo-1631265427018-0cb9cd105d1b?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Maharashtra', colleges: 51, image: 'https://images.unsplash.com/photo-1588062516447-497d773f6d56?q=80&w=1471&auto=format&fit=crop' },
  { name: 'Madhya Pradesh', colleges: 27, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Haryana', colleges: 8, image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Deemed Universities', colleges: 48, image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Himachal Pradesh', colleges: 6, image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Bihar', colleges: 14, image: 'https://images.unsplash.com/photo-1605181063694-e8e0c82ab48d?q=80&w=1470&auto=format&fit=crop' },
  { name: 'West Bengal', colleges: 25, image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Uttarakhand', colleges: 5, image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Delhi', colleges: 12, image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Chhattisgarh', colleges: 10, image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Telangana', colleges: 32, image: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Kerala', colleges: 29, image: 'https://images.unsplash.com/photo-1602314953564-81692aeaf9a1?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Odisha', colleges: 10, image: 'https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Gujarat', colleges: 32, image: 'https://images.unsplash.com/photo-1630906386318-7f1998fb78d5?q=80&w=1470&auto=format&fit=crop' },
];

const MBBSIndia: React.FC = () => {
  const phoneNumber = "+919873133846";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in India - AdmissionHands</title>
        <meta name="description" content="Find detailed information about MBBS colleges in India. State-wise list of medical colleges, fees, cutoffs, and admission processes across India." />
        <meta name="keywords" content="MBBS India, medical colleges, state-wise MBBS, medical admission, NEET cutoff" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-medical-50 to-blue-50 py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  MBBS in India
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  Comprehensive information about medical colleges across popular Indian states and deemed universities. Find details about fees, seats, cutoffs, and admission processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="btn-primary text-center">
                    Get Expert Guidance
                  </a>
                  <Link to="/services" className="btn-outline text-center">
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
        
        {/* Key Information Section */}
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
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">NEET Required</h3>
                <p className="text-gray-600">
                  National Eligibility cum Entrance Test (NEET) is mandatory for admission to all medical colleges in India.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">5.5 Year Duration</h3>
                <p className="text-gray-600">
                  MBBS program in India spans 4.5 years of academic study followed by 1 year of mandatory internship.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">600+ Medical Colleges</h3>
                <p className="text-gray-600">
                  India has both government and private medical colleges across all states and union territories.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* States Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                MBBS Colleges by State
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Select a state or university type to explore medical colleges, fee structures, and admission details.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {states.map((state, index) => (
                <Link 
                  to={`/mbbs-india/${state.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={index}
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={state.image} 
                        alt={`Medical colleges in ${state.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-medical-600 transition-colors">{state.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm bg-blue-50 text-medical-700 px-3 py-1 rounded-full">
                          {state.colleges} Colleges
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-medical-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Admission Process */}
        <section className="py-16 bg-white">
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
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">NEET Examination</h3>
                    <p className="text-gray-600">Appear for the National Eligibility cum Entrance Test (NEET) conducted by NTA.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Counseling Registration</h3>
                    <p className="text-gray-600">Register for counseling conducted by MCC for All India Quota or state counseling authorities.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Choice Filling</h3>
                    <p className="text-gray-600">Fill your preferred colleges and courses in order of preference.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Seat Allotment</h3>
                    <p className="text-gray-600">Seats are allotted based on NEET rank, choices filled, and available seats.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Reporting & Admission</h3>
                    <p className="text-gray-600">Report to the allotted college with required documents and complete the admission process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fee Structure Overview */}
        <section className="py-16 bg-gray-50">
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
                  <tr className="bg-medical-50">
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
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
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
                  <a href={`tel:${phoneNumber}`} className="bg-white text-medical-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg text-center">
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
                    <div className="bg-medical-50 p-1 rounded-full">
                      <Users className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Expert Counselors</span>
                      <p className="text-sm text-gray-600">Guidance from experienced medical education counselors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <MapPin className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Pan-India Coverage</span>
                      <p className="text-sm text-gray-600">Information and assistance for colleges across all states</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <FileText className="w-5 h-5 text-medical-600" />
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
      <Footer />
    </div>
  );
};

export default MBBSIndia;
