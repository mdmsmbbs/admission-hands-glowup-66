
import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCheck, Shield } from 'lucide-react';

// Lazy load the terms and privacy content
const TermsOfService = lazy(() => import('@/components/terms/TermsOfService'));
const PrivacyPolicy = lazy(() => import('@/components/terms/PrivacyPolicy'));

// Loading placeholder
const TermsLoader = () => (
  <div className="p-4 space-y-4">
    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
    <div className="space-y-2">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
      ))}
    </div>
  </div>
);

const Terms = () => {
  const currentDate = "April 30, 2025";
  
  // Effect to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 terms-page-content">
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
                  <Suspense fallback={<TermsLoader />}>
                    <TermsOfService currentDate={currentDate} />
                  </Suspense>
                </TabsContent>

                <TabsContent value="privacy" className="max-w-4xl mx-auto mt-0">
                  <Suspense fallback={<TermsLoader />}>
                    <PrivacyPolicy currentDate={currentDate} />
                  </Suspense>
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
