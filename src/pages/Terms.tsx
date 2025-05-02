
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCheck, Shield } from 'lucide-react';
import TermsOfService from '@/components/terms/TermsOfService';
import PrivacyPolicy from '@/components/terms/PrivacyPolicy';

const Terms = () => {
  const currentDate = "April 30, 2025";
  
  // Effect to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 terms-page-content pt-24 md:pt-28">
      <Helmet>
        <title>Privacy & Terms | Admission Hands</title>
        <meta name="description" content="AdmissionHands privacy policy and terms of service. Learn about how we handle your data and the terms that govern our services." />
      </Helmet>
      
      <main className="flex-grow">
        <div className="container-custom py-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <Tabs defaultValue="terms" className="w-full">
              <div className="flex justify-center px-4 pt-3">
                <TabsList className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-2xl">
                  <TabsTrigger value="terms" className="text-xs sm:text-sm">
                    <FileCheck className="h-3 w-3 mr-1" /> Terms & Conditions
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="text-xs sm:text-sm">
                    <Shield className="h-3 w-3 mr-1" /> Privacy Policy
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
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
