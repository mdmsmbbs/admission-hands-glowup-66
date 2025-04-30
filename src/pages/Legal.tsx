
import React from 'react';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BookOpen, FileSearch, Info, Mail, Phone, MapPin, Shield, FileBadge, FileCheck, LucideIcon } from 'lucide-react';

interface TermsSectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const TermsSection = ({ id, title, icon: Icon, children }: TermsSectionProps) => (
  <section id={id} className="space-y-6 mb-12">
    <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
      <Icon className="h-6 w-6 text-medical-600" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-6 text-gray-700">
      {children}
    </div>
  </section>
);

interface PolicyItemProps {
  title: string;
  children: React.ReactNode;
}

const PolicyItem = ({ title, children }: PolicyItemProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <div className="text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy & Terms | Admission Hands</title>
        <meta name="description" content="AdmissionHands privacy policy and terms of service. Learn about how we handle your data and the terms that govern our services." />
      </Helmet>

      <main className="flex-grow">
        <header className="bg-gradient-to-r from-medical-600 to-teal-600 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy & Terms</h1>
            <p className="text-white/90 text-lg">Last Updated: April 25, 2025</p>
          </div>
        </header>

        <div className="container-custom py-8">
          <Tabs defaultValue="privacy" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid sm:grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="privacy" className="text-sm sm:text-base">
                  <Shield className="h-4 w-4 mr-2" /> Privacy Policy
                </TabsTrigger>
                <TabsTrigger value="terms" className="text-sm sm:text-base">
                  <FileBadge className="h-4 w-4 mr-2" /> Terms & Conditions
                </TabsTrigger>
                <TabsTrigger value="contact" className="text-sm sm:text-base">
                  <Mail className="h-4 w-4 mr-2" /> Contact Us
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="privacy" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-medical-50 p-4 rounded-full">
                    <FileCheck className="h-8 w-8 text-medical-600" />
                  </div>
                </div>
                <p className="text-center text-gray-600 mb-10 text-lg">
                  At AdmissionHands, we value your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>

                <TermsSection id="information-collection" title="Information We Collect" icon={Info}>
                  <PolicyItem title="Personal Information">
                    <p>We collect the following types of information:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Contact details (name, email, phone number)</li>
                      <li>Educational background and qualifications</li>
                      <li>Location and demographic information</li>
                      <li>Documents required for admission processes</li>
                      <li>Communication preferences</li>
                    </ul>
                  </PolicyItem>
                  
                  <PolicyItem title="Usage Information">
                    <p>When you visit our website, we automatically collect certain information about your device, including:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>IP address and browser type</li>
                      <li>Pages you visit and time spent</li>
                      <li>Referring websites or sources</li>
                      <li>Device information and settings</li>
                    </ul>
                  </PolicyItem>
                </TermsSection>

                <TermsSection id="data-usage" title="How We Use Your Information" icon={FileSearch}>
                  <PolicyItem title="Primary Purposes">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Providing personalized admission consulting services</li>
                      <li>Processing applications and documentation</li>
                      <li>Communication about your admission process</li>
                      <li>Improving our services and user experience</li>
                    </ul>
                  </PolicyItem>
                  
                  <PolicyItem title="Secondary Purposes">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Market research and analytics</li>
                      <li>Sending promotional materials (with your consent)</li>
                      <li>Compliance with legal obligations</li>
                      <li>Fraud prevention and security</li>
                    </ul>
                  </PolicyItem>
                </TermsSection>

                <TermsSection id="data-sharing" title="Data Sharing & Confidentiality" icon={Shield}>
                  <PolicyItem title="Third-Party Sharing">
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Educational institutions (with your explicit consent)</li>
                      <li>Service providers who assist in our operations</li>
                      <li>Legal and regulatory authorities when required by law</li>
                    </ul>
                    <p className="mt-2 font-semibold text-medical-700">We never sell or rent your personal data to third parties.</p>
                  </PolicyItem>
                </TermsSection>

                <TermsSection id="data-rights" title="Your Data Rights" icon={BookOpen}>
                  <PolicyItem title="Your Rights Include">
                    <p>As a user, you have the right to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Access your personal data</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your data (where applicable)</li>
                      <li>Withdraw consent for processing</li>
                      <li>Object to certain processing activities</li>
                      <li>Data portability in certain circumstances</li>
                    </ul>
                    <p className="mt-2">To exercise these rights, please contact us at <strong>info@admissionhands.com</strong>.</p>
                  </PolicyItem>
                </TermsSection>

                <TermsSection id="cookies" title="Cookies & Tracking" icon={Info}>
                  <PolicyItem title="Cookie Policy">
                    <p>Our website uses cookies and similar technologies to enhance user experience and collect information. You can control cookies through your browser settings.</p>
                    
                    <p className="mt-2"><strong>Types of cookies we use:</strong></p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytical cookies to improve our services</li>
                      <li>Marketing cookies for relevant content (with consent)</li>
                    </ul>
                  </PolicyItem>
                </TermsSection>
              </div>
            </TabsContent>

            <TabsContent value="terms" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-teal-50 p-4 rounded-full">
                    <AlertTriangle className="h-8 w-8 text-teal-600" />
                  </div>
                </div>
                <p className="text-center text-gray-600 mb-10 text-lg">
                  By using AdmissionHands services, you agree to be bound by these Terms and Conditions.
                  Please read them carefully before proceeding with our services.
                </p>

                <TermsSection id="services" title="Scope of Services" icon={BookOpen}>
                  <PolicyItem title="Services Offered">
                    <p>AdmissionHands provides the following services:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>MBBS, MD, and MS admission guidance across India</li>
                      <li>Documentation assistance and verification</li>
                      <li>Eligibility assessment and college recommendations</li>
                      <li>Application process support and follow-up</li>
                      <li>NRI quota assistance and management</li>
                      <li>Career counseling for medical professionals</li>
                    </ul>
                  </PolicyItem>
                  
                  <PolicyItem title="Service Limitations">
                    <p>While we strive to provide comprehensive support, please note:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Success depends on various factors, including your academic qualifications</li>
                      <li>Medical institutions have final authority on admissions</li>
                      <li>Government regulations may change during the process</li>
                    </ul>
                  </PolicyItem>
                </TermsSection>

                <TermsSection id="client-obligations" title="Client Obligations" icon={FileSearch}>
                  <PolicyItem title="Your Responsibilities">
                    <p>As a client, you agree to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Provide accurate and complete information</li>
                      <li>Submit authentic documents for processing</li>
                      <li>Adhere to all deadlines provided by us or institutions</li>
                      <li>Remain responsive during critical application periods</li>
                      <li>Comply with all institutional and government requirements</li>
                    </ul>
                  </PolicyItem>
                  
                  <PolicyItem title="Communication Requirements">
                    <p>Effective communication is essential. You must:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Respond to our messages within 24-48 hours</li>
                      <li>Inform us immediately of any changes in contact details</li>
                      <li>Provide documents and information promptly when requested</li>
                      <li>Attend scheduled consultations and meetings</li>
                    </ul>
                  </PolicyItem>
                </TermsSection>

                <TermsSection id="fees" title="Fees & Payment Policy" icon={Info}>
                  <PolicyItem title="Fee Structure">
                    <p className="font-semibold text-red-700">All consulting fees are non-refundable under any circumstances.</p>
                    <p className="mt-2">Our fee structure includes:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Initial consultation fee</li>
                      <li>Service package fees based on chosen services</li>
                      <li>Document processing and verification charges</li>
                      <li>Additional services as requested</li>
                    </ul>
                  </PolicyItem>
                  
                  <PolicyItem title="Payment Terms">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Full payment is required before initiation of services</li>
                      <li>Payments are to be made through authorized channels only</li>
                      <li>Late payments may result in service delays or termination</li>
                      <li>All bank charges for transfers are borne by the client</li>
                    </ul>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="font-medium text-gray-800">No Refund Policy:</p>
                      <p>Fees are non-refundable regardless of:</p>
                      <ul className="list-disc pl-6 mt-1 text-gray-700">
                        <li>Admission outcome (success or failure)</li>
                        <li>Personal decisions to withdraw</li>
                        <li>Changes in government or institutional policies</li>
                        <li>Any other circumstances beyond our control</li>
                      </ul>
                    </div>
                  </PolicyItem>
                </TermsSection>

                <TermsSection id="disclaimer" title="Important Disclaimers" icon={AlertTriangle}>
                  <PolicyItem title="No Admission Guarantee">
                    <p className="font-medium">AdmissionHands does not guarantee:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Admission to any specific institution</li>
                      <li>Success in competitive examinations</li>
                      <li>Specific seat allocation or specialization</li>
                      <li>Fee concessions or scholarships</li>
                    </ul>
                    <p className="mt-2">Final admission decisions rest solely with the educational institutions and governing bodies.</p>
                  </PolicyItem>
                  
                  <PolicyItem title="Limitation of Liability">
                    <p>We are not liable for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Rejection of applications by institutions</li>
                      <li>Changes in government policies or regulations</li>
                      <li>Changes in institutional admission criteria</li>
                      <li>Delays caused by third parties</li>
                      <li>Consequences of providing inaccurate information</li>
                      <li>Any indirect or consequential losses</li>
                    </ul>
                  </PolicyItem>
                </TermsSection>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-50 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Get in Touch With Us</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-medical-50 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-medical-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+91-9873133846</p>
                        <p className="text-gray-500 text-sm mt-1">Mon-Sat, 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-50 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">info@admissionhands.com</p>
                        <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
                        <p className="text-gray-600">Logix Mall, Noida City Center,</p>
                        <p className="text-gray-600">Noida, U.P – 201301</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Legal Inquiries</h3>
                    <p className="text-gray-600 mb-4">For any specific questions about our Privacy Policy or Terms of Service, please contact our legal department directly:</p>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <p className="text-gray-700"><strong>Legal Department:</strong> legal@admissionhands.com</p>
                      <p className="text-gray-500 text-sm mt-2">Please allow 2-3 business days for a response to legal inquiries.</p>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800 mb-2">Governing Law</h4>
                      <p className="text-gray-600">All legal matters are governed by the laws of India and fall under the jurisdiction of courts in Noida, Uttar Pradesh.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
