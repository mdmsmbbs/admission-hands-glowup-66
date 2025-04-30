
import React from 'react';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  FileCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Info, 
  AlertTriangle, 
  FileText, 
  File, 
  Library
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface TermsSectionProps {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  index?: number;
}

const TermsSection = ({ id, title, icon: Icon, children, index = 0 }: TermsSectionProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section 
      id={id} 
      className="space-y-5 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      variants={variants}
    >
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
        <div className="bg-medical-50 p-2 rounded-md">
          <Icon className="h-5 w-5 text-medical-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-700 pl-2">
        {children}
      </div>
    </motion.section>
  );
};

interface PolicyItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  index?: number;
}

const PolicyItem = ({ title, children, className, index = 0 }: PolicyItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.4
      }
    })
  };

  return (
    <motion.div 
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-200",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={variants}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="text-gray-600 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

const Legal = () => {
  const currentDate = "April 30, 2025";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Privacy & Terms | Admission Hands</title>
        <meta name="description" content="AdmissionHands privacy policy and terms of service. Learn about how we handle your data and the terms that govern our services." />
      </Helmet>

      <main className="flex-grow">
        <header className="bg-gradient-to-r from-medical-600 to-teal-600 text-white">
          <div className="container-custom py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-2 bg-white/10 backdrop-blur-sm rounded-lg mb-6">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Privacy Policy & Terms</h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Important information about our services and your rights
              </p>
            </motion.div>
          </div>
          <div className="h-16 bg-gradient-to-b from-medical-600/0 to-white/5 backdrop-blur-sm"></div>
        </header>

        <div className="container-custom py-8 -mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <Tabs defaultValue="terms" className="w-full">
              <div className="flex justify-center px-6 pt-6">
                <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl">
                  <TabsTrigger value="terms" className="text-sm sm:text-base">
                    <FileText className="h-4 w-4 mr-2" /> Terms & Conditions
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="text-sm sm:text-base">
                    <Shield className="h-4 w-4 mr-2" /> Privacy Policy
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="text-sm sm:text-base">
                    <Mail className="h-4 w-4 mr-2" /> Contact Us
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="terms" className="max-w-4xl mx-auto mt-0">
                  <div className="space-y-8">
                    <motion.div 
                      className="text-center mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="block text-xs text-gray-500 mb-1">Effective Date</span>
                      <span className="text-medical-600 font-semibold">{currentDate}</span>
                    </motion.div>
                    
                    <div className="prose prose-gray max-w-none">
                      <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                        Welcome to Admission Hands. By accessing or using our website and services, 
                        you agree to comply with and be bound by the following Terms and Conditions. 
                        Please read them carefully.
                      </p>
                    </div>
                    
                    <div className="grid gap-6">
                      <TermsSection id="introduction" title="Introduction" icon={Info} index={1}>
                        <p>
                          Admission Hands ("we", "our", or "us") provides consultancy services for MBBS 
                          admissions in India. These terms govern your use of our website 
                          (www.admissionhands.com) and all associated services provided.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="eligibility" title="Eligibility" icon={FileCheck} index={2}>
                        <p>
                          You must be at least 18 years old or have parental/guardian consent to use our services. 
                          By using our site, you represent and warrant that you meet all eligibility requirements.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="services" title="Services Provided" icon={Library} index={3}>
                        <p>We assist students and parents with:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>MBBS admissions guidance in India</li>
                          <li>College selection support</li>
                          <li>Counseling and application processing</li>
                          <li>Documentation and admission updates</li>
                        </ul>
                        <p className="bg-gray-50 p-4 rounded-lg mt-4 text-sm italic">
                          Note: We are not affiliated with any government or private medical college. 
                          We do not guarantee admission but offer expert consultancy to improve your 
                          chances based on eligibility and merit.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="fees" title="Fees and Payments" icon={File} index={4}>
                        <p>
                          All fees for our services will be clearly communicated before engagement. 
                          Once services have commenced, fees are non-refundable, unless otherwise agreed in writing.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="accuracy" title="Accuracy of Information" icon={Info} index={5}>
                        <p>
                          While we strive to provide accurate and updated information, Admission Hands 
                          is not responsible for any changes in admission criteria, college regulations, 
                          or government policies. Clients are encouraged to verify critical information independently.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="responsibility" title="Client Responsibility" icon={AlertTriangle} index={6}>
                        <p>Clients are responsible for:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Providing accurate personal and academic information</li>
                          <li>Following timelines for applications and documentation</li>
                          <li>Complying with the rules of colleges and regulatory authorities (e.g., NMC, MCC, etc.)</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="liability" title="Limitation of Liability" icon={Shield} index={7}>
                        <p>
                          We are not liable for any loss, damage, or delay caused by third parties, 
                          institutions, or regulatory changes beyond our control. Admission Hands is 
                          a consulting service only and does not promise or ensure admission.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="privacy-summary" title="Privacy Policy" icon={Shield} index={8}>
                        <p>
                          We respect your privacy. Any personal information collected will be used solely 
                          for consultancy purposes and will not be shared with third parties without your consent. 
                          Please review our full Privacy Policy for more details.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="intellectual" title="Intellectual Property" icon={FileText} index={9}>
                        <p>
                          All content on this site, including text, graphics, logos, and images, 
                          is the property of Admission Hands and may not be reused or republished 
                          without written permission.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="modifications" title="Modifications" icon={FileText} index={10}>
                        <p>
                          We reserve the right to update these Terms at any time. Continued use of our 
                          website and services after changes implies acceptance of the new terms.
                        </p>
                      </TermsSection>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="max-w-4xl mx-auto mt-0">
                  <div className="space-y-8">
                    <motion.div 
                      className="text-center mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="block text-xs text-gray-500 mb-1">Effective Date</span>
                      <span className="text-medical-600 font-semibold">{currentDate}</span>
                    </motion.div>
                    
                    <div className="prose prose-gray max-w-none">
                      <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                        Admission Hands ("we", "our", or "us") is committed to protecting your privacy. 
                        This Privacy Policy outlines how we collect, use, disclose, and safeguard your 
                        information when you visit our website and use our services.
                      </p>
                    </div>
                    
                    <div className="grid gap-6">
                      <TermsSection id="info-collection" title="Information We Collect" icon={Info} index={1}>
                        <p>We may collect the following types of personal data:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Contact Information: Name, email address, phone number</li>
                          <li>Academic Details: Marksheets, NEET scores, educational background</li>
                          <li>Demographic Information: Age, state, nationality, preferred colleges</li>
                        </ul>
                        <p className="mt-3">We may also collect non-personal information such as:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>IP address</li>
                          <li>Browser type</li>
                          <li>Device information</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="info-usage" title="How We Use Your Information" icon={FileCheck} index={2}>
                        <p>Your information is used to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Provide consultancy services</li>
                          <li>Contact you with admission-related updates</li>
                          <li>Respond to your inquiries</li>
                          <li>Improve our services and user experience</li>
                          <li>Comply with legal obligations</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="info-sharing" title="Sharing of Information" icon={Shield} index={3}>
                        <p>
                          We do not sell or rent your personal information to third parties. 
                          Information may only be shared with:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Partner consultants or institutions (with your consent)</li>
                          <li>Legal authorities (if required by law)</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="data-security" title="Data Security" icon={Shield} index={4}>
                        <p>
                          We use industry-standard measures to protect your data. However, no digital 
                          method is 100% secure. We encourage you to take precautions while sharing 
                          sensitive documents.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="cookies" title="Cookies" icon={Info} index={5}>
                        <p>
                          Our website may use cookies to enhance your browsing experience. 
                          You can disable cookies in your browser settings at any time.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="third-party" title="Third-Party Links" icon={AlertTriangle} index={6}>
                        <p>
                          Our website may contain links to other sites. We are not responsible for 
                          the privacy practices of those websites.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="your-rights" title="Your Rights" icon={FileCheck} index={7}>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Access your data</li>
                          <li>Request correction or deletion</li>
                          <li>Withdraw consent (where applicable)</li>
                        </ul>
                        <p className="mt-3">
                          To exercise these rights, email us at info@admissionhands.com.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="policy-updates" title="Updates to Policy" icon={FileText} index={8}>
                        <p>
                          We may update this Privacy Policy from time to time. All changes will be 
                          posted on this page with an updated effective date.
                        </p>
                      </TermsSection>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="max-w-4xl mx-auto mt-0">
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
                      <p className="text-gray-600">
                        If you have any questions about our Terms & Privacy Policy, we're here to help
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <motion.div 
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="bg-medical-50 p-3 rounded-full">
                            <Phone className="h-5 w-5 text-medical-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                            <p className="text-gray-600">+91-9873133846</p>
                            <p className="text-gray-500 text-sm mt-1">Mon-Sat, 9:00 AM - 6:00 PM</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="bg-teal-50 p-3 rounded-full">
                            <Mail className="h-5 w-5 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                            <p className="text-gray-600">info@admissionhands.com</p>
                            <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="bg-blue-50 p-3 rounded-full">
                            <MapPin className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
                            <p className="text-gray-600">Logix Mall, Noida City Center,</p>
                            <p className="text-gray-600">Noida, U.P – 201301</p>
                          </div>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Disclaimer</h3>
                        <div className="text-gray-600 space-y-4">
                          <p>
                            Admission Hands provides consultancy and guidance for MBBS admissions in 
                            India. While we aim to offer the most reliable information and personalized advice:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>We do not guarantee admission to any college or course.</li>
                            <li>
                              Admission is subject to NEET score, government policies, college seat 
                              availability, and student eligibility.
                            </li>
                            <li>We are not directly affiliated with any medical college or government body.</li>
                            <li>Information on the website is for general guidance and may change without notice.</li>
                            <li>
                              Users are advised to independently verify all official information before 
                              making decisions based on our services or content.
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
