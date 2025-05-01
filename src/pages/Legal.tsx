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
import Header from '@/components/Header';

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
      className="space-y-3 mb-6" // Reduced vertical spacing
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      variants={variants}
    >
      <div className="flex items-center gap-2 pb-1 border-b border-gray-200"> {/* Reduced spacing */}
        <div className="bg-medical-50 p-1.5 rounded-md"> {/* Smaller icon container */}
          <Icon className="h-4 w-4 text-medical-600" /> {/* Smaller icon */}
        </div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2> {/* Smaller heading */}
      </div>
      <div className="space-y-3 text-gray-700 pl-1"> {/* Reduced spacing and padding */}
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
        "bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-200", // Reduced padding
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={variants}
    >
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3> {/* Smaller heading and margin */}
      <div className="text-sm text-gray-600 leading-relaxed"> {/* Smaller text */}
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
      
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <header className="bg-gradient-to-r from-medical-600 to-teal-600 text-white">
          <div className="container-custom py-8 text-center"> {/* Reduced vertical padding */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-1.5 bg-white/10 backdrop-blur-sm rounded-lg mb-4"> {/* Reduced size and margin */}
                <FileCheck className="h-5 w-5 text-white" /> {/* Smaller icon */}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Privacy Policy & Terms</h1> {/* Smaller heading and margin */}
              <p className="text-white/90 text-base max-w-2xl mx-auto"> {/* Smaller text */}
                Important information about our services and your rights
              </p>
            </motion.div>
          </div>
          <div className="h-8 bg-gradient-to-b from-medical-600/0 to-white/5 backdrop-blur-sm"></div> {/* Reduced height */}
        </header>

        <div className="container-custom py-4 -mt-6"> {/* Reduced padding and margin */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 overflow-hidden"> {/* Smaller radius */}
            <Tabs defaultValue="terms" className="w-full">
              <div className="flex justify-center px-4 pt-3"> {/* Reduced padding */}
                <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl">
                  <TabsTrigger value="terms" className="text-xs sm:text-sm"> {/* Smaller text */}
                    <FileText className="h-3 w-3 mr-1" /> Terms & Conditions {/* Smaller icon and margin */}
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="text-xs sm:text-sm"> {/* Smaller text */}
                    <Shield className="h-3 w-3 mr-1" /> Privacy Policy {/* Smaller icon and margin */}
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="text-xs sm:text-sm"> {/* Smaller text */}
                    <Mail className="h-3 w-3 mr-1" /> Contact Us {/* Smaller icon and margin */}
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-4"> {/* Reduced padding */}
                <TabsContent value="terms" className="max-w-4xl mx-auto mt-0">
                  <div className="space-y-4"> {/* Reduced spacing */}
                    <motion.div 
                      className="text-center mb-4" {/* Reduced margin */}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="block text-xs text-gray-500 mb-1">Effective Date</span>
                      <span className="text-medical-600 font-semibold">{currentDate}</span>
                    </motion.div>
                    
                    <div className="prose prose-sm max-w-none"> {/* Smaller text */}
                      <p className="text-base text-center text-gray-700 mb-4 max-w-2xl mx-auto"> {/* Smaller text and margin */}
                        Welcome to Admission Hands. By accessing or using our website and services, 
                        you agree to comply with and be bound by the following Terms and Conditions. 
                        Please read them carefully.
                      </p>
                    </div>
                    
                    <div className="grid gap-4"> {/* Reduced gap */}
                      <TermsSection id="introduction" title="Introduction" icon={Info} index={1}>
                        <p className="text-sm"> {/* Smaller text */}
                          Admission Hands ("we", "our", or "us") provides consultancy services for MBBS 
                          admissions in India. These terms govern your use of our website 
                          (www.admissionhands.com) and all associated services provided.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="eligibility" title="Eligibility" icon={FileCheck} index={2}>
                        <p className="text-sm"> {/* Smaller text */}
                          You must be at least 18 years old or have parental/guardian consent to use our services. 
                          By using our site, you represent and warrant that you meet all eligibility requirements.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="services" title="Services Provided" icon={Library} index={3}>
                        <p className="text-sm">We assist students and parents with:</p> {/* Smaller text */}
                        <ul className="list-disc pl-4 space-y-0.5 mt-1"> {/* Reduced spacing and padding */}
                          <li className="text-sm">MBBS admissions guidance in India</li> {/* Smaller text */}
                          <li className="text-sm">College selection support</li> {/* Smaller text */}
                          <li className="text-sm">Counseling and application processing</li> {/* Smaller text */}
                          <li className="text-sm">Documentation and admission updates</li> {/* Smaller text */}
                        </ul>
                        <p className="bg-gray-50 p-3 rounded-lg mt-2 text-xs italic"> {/* Smaller padding, margin and text */}
                          Note: We are not affiliated with any government or private medical college. 
                          We do not guarantee admission but offer expert consultancy to improve your 
                          chances based on eligibility and merit.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="fees" title="Fees and Payments" icon={File} index={4}>
                        <p className="text-sm">
                          All fees for our services will be clearly communicated before engagement. 
                          Once services have commenced, fees are non-refundable, unless otherwise agreed in writing.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="accuracy" title="Accuracy of Information" icon={Info} index={5}>
                        <p className="text-sm">
                          While we strive to provide accurate and updated information, Admission Hands 
                          is not responsible for any changes in admission criteria, college regulations, 
                          or government policies. Clients are encouraged to verify critical information independently.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="responsibility" title="Client Responsibility" icon={AlertTriangle} index={6}>
                        <p className="text-sm">Clients are responsible for:</p>
                        <ul className="list-disc pl-4 space-y-0.5 mt-1">
                          <li className="text-sm">Providing accurate personal and academic information</li>
                          <li className="text-sm">Following timelines for applications and documentation</li>
                          <li className="text-sm">Complying with the rules of colleges and regulatory authorities (e.g., NMC, MCC, etc.)</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="liability" title="Limitation of Liability" icon={Shield} index={7}>
                        <p className="text-sm">
                          We are not liable for any loss, damage, or delay caused by third parties, 
                          institutions, or regulatory changes beyond our control. Admission Hands is 
                          a consulting service only and does not promise or ensure admission.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="privacy-summary" title="Privacy Policy" icon={Shield} index={8}>
                        <p className="text-sm">
                          We respect your privacy. Any personal information collected will be used solely 
                          for consultancy purposes and will not be shared with third parties without your consent. 
                          Please review our full Privacy Policy for more details.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="intellectual" title="Intellectual Property" icon={FileText} index={9}>
                        <p className="text-sm">
                          All content on this site, including text, graphics, logos, and images, 
                          is the property of Admission Hands and may not be reused or republished 
                          without written permission.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="modifications" title="Modifications" icon={FileText} index={10}>
                        <p className="text-sm">
                          We reserve the right to update these Terms at any time. Continued use of our 
                          website and services after changes implies acceptance of the new terms.
                        </p>
                      </TermsSection>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="max-w-4xl mx-auto mt-0">
                  <div className="space-y-4">
                    <motion.div 
                      className="text-center mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="block text-xs text-gray-500 mb-1">Effective Date</span>
                      <span className="text-medical-600 font-semibold">{currentDate}</span>
                    </motion.div>
                    
                    <div className="prose prose-sm max-w-none">
                      <p className="text-base text-center text-gray-700 mb-4 max-w-2xl mx-auto">
                        Admission Hands ("we", "our", or "us") is committed to protecting your privacy. 
                        This Privacy Policy outlines how we collect, use, disclose, and safeguard your 
                        information when you visit our website and use our services.
                      </p>
                    </div>
                    
                    <div className="grid gap-4">
                      <TermsSection id="info-collection" title="Information We Collect" icon={Info} index={1}>
                        <p className="text-sm">We may collect the following types of personal data:</p>
                        <ul className="list-disc pl-4 space-y-0.5 mt-1">
                          <li className="text-sm">Contact Information: Name, email address, phone number</li>
                          <li className="text-sm">Academic Details: Marksheets, NEET scores, educational background</li>
                          <li className="text-sm">Demographic Information: Age, state, nationality, preferred colleges</li>
                        </ul>
                        <p className="mt-2 text-sm">We may also collect non-personal information such as:</p>
                        <ul className="list-disc pl-4 space-y-0.5 mt-1">
                          <li className="text-sm">IP address</li>
                          <li className="text-sm">Browser type</li>
                          <li className="text-sm">Device information</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="info-usage" title="How We Use Your Information" icon={FileCheck} index={2}>
                        <p className="text-sm">Your information is used to:</p>
                        <ul className="list-disc pl-4 space-y-0.5 mt-1">
                          <li className="text-sm">Provide consultancy services</li>
                          <li className="text-sm">Contact you with admission-related updates</li>
                          <li className="text-sm">Respond to your inquiries</li>
                          <li className="text-sm">Improve our services and user experience</li>
                          <li className="text-sm">Comply with legal obligations</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="info-sharing" title="Sharing of Information" icon={Shield} index={3}>
                        <p className="text-sm">
                          We do not sell or rent your personal information to third parties. 
                          Information may only be shared with:
                        </p>
                        <ul className="list-disc pl-4 space-y-0.5 mt-1">
                          <li className="text-sm">Partner consultants or institutions (with your consent)</li>
                          <li className="text-sm">Legal authorities (if required by law)</li>
                        </ul>
                      </TermsSection>
                      
                      <TermsSection id="data-security" title="Data Security" icon={Shield} index={4}>
                        <p className="text-sm">
                          We use industry-standard measures to protect your data. However, no digital 
                          method is 100% secure. We encourage you to take precautions while sharing 
                          sensitive documents.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="cookies" title="Cookies" icon={Info} index={5}>
                        <p className="text-sm">
                          Our website may use cookies to enhance your browsing experience. 
                          You can disable cookies in your browser settings at any time.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="third-party" title="Third-Party Links" icon={AlertTriangle} index={6}>
                        <p className="text-sm">
                          Our website may contain links to other sites. We are not responsible for 
                          the privacy practices of those websites.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="your-rights" title="Your Rights" icon={FileCheck} index={7}>
                        <p className="text-sm">You have the right to:</p>
                        <ul className="list-disc pl-4 space-y-0.5 mt-1">
                          <li className="text-sm">Access your data</li>
                          <li className="text-sm">Request correction or deletion</li>
                          <li className="text-sm">Withdraw consent (where applicable)</li>
                        </ul>
                        <p className="mt-3">
                          To exercise these rights, email us at info@admissionhands.com.
                        </p>
                      </TermsSection>
                      
                      <TermsSection id="policy-updates" title="Updates to Policy" icon={FileText} index={8}>
                        <p className="text-sm">
                          We may update this Privacy Policy from time to time. All changes will be 
                          posted on this page with an updated effective date.
                        </p>
                      </TermsSection>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="max-w-4xl mx-auto mt-0">
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h2>
                      <p className="text-sm text-gray-600">
                        If you have any questions about our Terms & Privacy Policy, we're here to help
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="bg-medical-50 p-2 rounded-full">
                            <Phone className="h-4 w-4 text-medical-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-800">Phone</h3>
                            <p className="text-sm text-gray-600">+91-9873133846</p>
                            <p className="text-xs text-gray-500 mt-0.5">Mon-Sat, 9:00 AM - 6:00 PM</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="bg-teal-50 p-2 rounded-full">
                            <Mail className="h-4 w-4 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-800">Email</h3>
                            <p className="text-sm text-gray-600">info@admissionhands.com</p>
                            <p className="text-xs text-gray-500 mt-0.5">We respond within 24 hours</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="bg-blue-50 p-2 rounded-full">
                            <MapPin className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-800">Office Address</h3>
                            <p className="text-sm text-gray-600">Logix Mall, Noida City Center,</p>
                            <p className="text-sm text-gray-600">Noida, U.P – 201301</p>
                          </div>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-base font-semibold text-gray-800 mb-3">Disclaimer</h3>
                        <div className="text-sm text-gray-600 space-y-2">
                          <p>
                            Admission Hands provides consultancy and guidance for MBBS admissions in 
                            India. While we aim to offer the most reliable information and personalized advice:
                          </p>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
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
