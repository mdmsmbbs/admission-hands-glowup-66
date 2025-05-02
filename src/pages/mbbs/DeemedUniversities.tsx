
import React from 'react';
import { Helmet } from 'react-helmet';
import { University, GraduationCap, Book, MapPin, Users, FileText, Award, Globe, ArrowRight, Check, Calendar, Clipboard, Shield, Medal, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import TopDeemedUniversities from '@/components/mbbs/TopDeemedUniversities';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useDeemedUniversities } from '@/hooks/useCollegesData';

const DeemedUniversities: React.FC = () => {
  const { universities } = useDeemedUniversities();
  const phoneNumber = "+919310301949";
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Deemed Universities for MBBS in India - AdmissionHands",
    "description": "Information about top deemed universities offering MBBS in India. Find details on fees, admissions, seats and NEET cutoffs.",
    "publisher": {
      "@type": "Organization",
      "name": "AdmissionHands",
      "logo": "https://lovable.dev/opengraph-image-p98pqg.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": universities.map((uni, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": uni.name,
        "description": `MBBS at ${uni.name} located in ${uni.location} with approximately ${uni.seats} seats.`
      }))
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-24 md:pt-28">
      <Helmet>
        <title>Deemed Universities for MBBS in India - AdmissionHands</title>
        <meta name="description" content="Find detailed information about MBBS in Deemed Universities across India. Complete guide to fees, seats, admission process, and NEET cutoffs for deemed universities." />
        <meta name="keywords" content="deemed universities, MBBS India, medical colleges, NEET cutoff, deemed university admission" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section - Updated with new image */}
        <section className="py-16 bg-gradient-to-r from-medical-50 to-blue-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-2xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  MBBS in <span className="text-medical-600">Deemed Universities</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  Comprehensive information about medical education in top deemed universities across India. Find details about fees, seats, and admission processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="btn-primary text-center">
                    Get Expert Guidance
                  </a>
                  <a href="#top-universities" className="btn-outline text-center">
                    View Top Universities
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/lovable-uploads/7b076029-494c-4b32-92bd-cee2af8e99fa.png"
                  alt="Medical students in lab" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Key Information Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Understanding Deemed Universities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Deemed universities possess academic, administrative, and financial autonomy, enabling them to design and implement their own curriculum independently.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <University className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Autonomous Status</h3>
                <p className="text-gray-600">
                  Deemed universities have academic, administrative, and financial autonomy, allowing them to establish their own curriculum and admission criteria.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">All-India Quota</h3>
                <p className="text-gray-600">
                  Admissions to deemed universities for MBBS are conducted through All India Quota counseling, based on NEET scores.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence in Education</h3>
                <p className="text-gray-600">
                  Many deemed universities are known for their state-of-the-art infrastructure, quality education, and strong emphasis on research.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Top Universities */}
        <TopDeemedUniversities />
        
        {/* Redesigned Admission Process */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-8"
            >
              <Badge variant="modern" className="mb-2">NEET-Based Admissions</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-medical-600 to-blue-600">
                Admission Process for Deemed Universities
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
                A streamlined path to securing your MBBS seat through centralized counseling
              </p>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Admission Steps */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:w-3/5 bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1470"
                    alt="Medical students collaborating" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">6-Step Process</h3>
                      <p className="text-sm opacity-90">Follow these steps to secure your admission</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: <GraduationCap className="h-5 w-5 text-pink-500" />,
                        title: "NEET Qualification",
                        desc: "Qualify with a competitive score (85+ percentile recommended)"
                      },
                      {
                        icon: <Clipboard className="h-5 w-5 text-cyan-500" />,
                        title: "MCC Registration",
                        desc: "Register on the Medical Counseling Committee portal"
                      },
                      {
                        icon: <FileText className="h-5 w-5 text-amber-500" />,
                        title: "Document Verification",
                        desc: "Upload & verify all required documents"
                      },
                      {
                        icon: <Shield className="h-5 w-5 text-emerald-500" />,
                        title: "Choice Filling",
                        desc: "Select and arrange colleges in order of preference"
                      },
                      {
                        icon: <Medal className="h-5 w-5 text-purple-500" />,
                        title: "Seat Allotment",
                        desc: "Await results based on rank and choices"
                      },
                      {
                        icon: <Calendar className="h-5 w-5 text-medical-500" />,
                        title: "Reporting & Fee Payment",
                        desc: "Pay fees and report to the allotted institution"
                      },
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex flex-col hover:shadow-sm transition-shadow"
                      >
                        <div className="mb-2 rounded-full w-8 h-8 bg-white flex items-center justify-center shadow-sm">
                          {step.icon}
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-xs text-gray-500 line-clamp-2">{step.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <div className="p-1 bg-blue-100 rounded-full mr-2">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <p className="text-xs text-gray-700">
                        <span className="font-medium">Important:</span> Counseling happens in multiple rounds - participate in all rounds if not allotted initially.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Resources Panel */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:w-2/5 flex flex-col gap-4"
              >
                {/* MCC Information Card with UPDATED Important Dates */}
                <div className="bg-gradient-to-br from-medical-600 to-medical-700 p-5 rounded-xl text-white flex-1 shadow-md relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-medical-500 rounded-full opacity-20"></div>
                  
                  <h3 className="text-xl font-bold mb-3">MCC Counselling</h3>
                  <p className="text-sm opacity-90 mb-5">
                    All admissions to deemed universities are conducted centrally through the Medical Counselling Committee (DGHS).
                  </p>
                  
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm mb-4">
                    <h4 className="font-medium mb-2">2025-26 Important Dates</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span>14th June 2025 NEET UG Results Date</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span>Counselling Forms dates to be announced soon after NEET UG Results.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-sm opacity-90 mb-3">
                    For the most accurate and up-to-date information, please regularly check the official MCC website
                  </p>
                  
                  <a 
                    href="https://mcc.nic.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white text-medical-700 text-sm py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors w-full justify-center"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit MCC Website</span>
                  </a>
                </div>
                
                {/* Expert Help */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-lg font-bold mb-2">Need Expert Guidance?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our counsellors can help you navigate the complex admission process and improve your chances of securing a seat.
                  </p>
                  
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="flex items-center gap-2 bg-medical-100 hover:bg-medical-200 text-medical-800 text-sm py-3 px-4 rounded-lg transition-colors w-full justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">Call Now: {phoneNumber}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Advantages & Features */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advantages of Studying in Deemed Universities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Deemed universities offer several unique benefits for aspiring medical professionals.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">International Exposure</h3>
                <p className="text-gray-600 text-sm">
                  Many deemed universities have international collaborations, providing students with global exposure and opportunities.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">Research Opportunities</h3>
                <p className="text-gray-600 text-sm">
                  Strong emphasis on research with dedicated centers, projects, and funding for student researchers.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">Diverse Student Body</h3>
                <p className="text-gray-600 text-sm">
                  Students from across India and sometimes internationally, creating a culturally rich learning environment.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">Quality Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art facilities including advanced labs, libraries, and specialized training centers.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Common queries about MBBS admissions in deemed universities
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-4"
            >
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">How are seats allocated in deemed universities?</h3>
                  <p className="mt-2 text-gray-600">
                    Seats are allocated based on NEET scores through centralized counseling conducted by DGHS. The higher your rank, the better your chances of getting your preferred university.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">What is the fee structure in deemed universities?</h3>
                  <p className="mt-2 text-gray-600">
                    Fees vary widely but typically range from ₹15 lakhs to ₹30 lakhs per annum. This includes tuition, hostel, and other charges. Some universities might offer scholarships based on merit or other criteria.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">Do deemed universities have management quota seats?</h3>
                  <p className="mt-2 text-gray-600">
                    No, deemed universities do not have a separate management quota. All admissions are based on NEET scores through centralized counseling conducted by DGHS.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">Can I get admission to a deemed university through state quotas?</h3>
                  <p className="mt-2 text-gray-600">
                    No, deemed universities do not have state quotas. All seats are filled through the All India Quota counseling conducted by DGHS.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Need Help with Deemed University Admissions?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Our experts can guide you through the entire process, from university selection to final admission. Let us help you secure a seat in your dream medical college.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="bg-white text-medical-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg text-center">
                    Call For Expert Guidance
                  </a>
                  <a href="#top-universities" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-all text-center">
                    Explore Universities
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-xl text-gray-800"
              >
                <h3 className="text-xl font-bold mb-4">Our Admission Support Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <University className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">University Selection</span>
                      <p className="text-sm text-gray-600">Personalized recommendation based on your NEET score and preferences</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <FileText className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Documentation Support</span>
                      <p className="text-sm text-gray-600">Guidance for preparing all required documents for admission</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <GraduationCap className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Counseling Assistance</span>
                      <p className="text-sm text-gray-600">Step-by-step support during the counseling and admission process</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeemedUniversities;
