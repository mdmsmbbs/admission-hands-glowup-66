
import React from 'react';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCheck, Mail, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import TermsOfService from '@/components/terms/TermsOfService';
import PrivacyPolicy from '@/components/terms/PrivacyPolicy';
import ContactSection from '@/components/terms/ContactSection';

const Terms = () => {
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
          <div className="container-custom py-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-1.5 bg-white/10 backdrop-blur-sm rounded-lg mb-4">
                <FileCheck className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Privacy Policy & Terms</h1>
              <p className="text-white/90 text-base max-w-2xl mx-auto">
                Important information about our services and your rights
              </p>
            </motion.div>
          </div>
          <div className="h-8 bg-gradient-to-b from-medical-600/0 to-white/5 backdrop-blur-sm"></div>
        </header>

        <div className="container-custom py-4 -mt-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <Tabs defaultValue="terms" className="w-full">
              <div className="flex justify-center px-4 pt-3">
                <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl">
                  <TabsTrigger value="terms" className="text-xs sm:text-sm">
                    <FileCheck className="h-3 w-3 mr-1" /> Terms & Conditions
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="text-xs sm:text-sm">
                    <Shield className="h-3 w-3 mr-1" /> Privacy Policy
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="text-xs sm:text-sm">
                    <Mail className="h-3 w-3 mr-1" /> Contact Us
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-4">
                <TabsContent value="terms" className="max-w-4xl mx-auto mt-0">
                  <TermsOfService currentDate={currentDate} />
                </TabsContent>

                <TabsContent value="privacy" className="max-w-4xl mx-auto mt-0">
                  <PrivacyPolicy currentDate={currentDate} />
                </TabsContent>

                <TabsContent value="contact" className="max-w-4xl mx-auto mt-0">
                  <ContactSection />
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

export default Terms;
