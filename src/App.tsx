
import React, { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LiveAlerts from "./components/LiveAlerts";
import Header from "./components/Header";
import { useIsMobile } from "./hooks/use-mobile";
import { AuthProvider } from "./hooks/useAuth";
import { Helmet } from "react-helmet";

// Lazily load pages to improve initial load performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NRIQuota = lazy(() => import("./pages/NRIQuota"));
const NRIColleges = lazy(() => import("./pages/NRIColleges"));
const NRIDocs = lazy(() => import("./pages/NRIDocs"));
const AboutContact = lazy(() => import("./pages/AboutContact"));
const Legal = lazy(() => import("./pages/Legal"));
const ServicesPage = lazy(() => import("./pages/Services"));
const MBBSIndia = lazy(() => import("./pages/MBBSIndia"));
const StateTemplate = lazy(() => import("./components/mbbs/StateTemplate"));
const MBBSMaharashtra = lazy(() => import("./pages/MBBSMaharashtra"));
const LiveAlertsManager = lazy(() => import("./pages/admin/LiveAlertsManager"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const MBBSStateManager = lazy(() => import("./pages/admin/MBBSStateManager"));
const VideoManager = lazy(() => import("./pages/admin/VideoManager"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>
      <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (renamed from cacheTime)
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const isMobile = useIsMobile();
  const isAdminPath = window.location.pathname.startsWith('/admin');
  const domain = window.location.hostname;
  const isAdminDomain = domain === 'admin.admissionhands.com';
  const isUATDomain = domain === 'uat.admissionhands.com';

  useEffect(() => {
    if (isAdminDomain && !isAdminPath) {
      window.location.pathname = '/admin/login';
    } else if (!isAdminDomain && isAdminPath) {
      window.location.href = `https://admin.admissionhands.com${window.location.pathname}`;
    }
  }, [isAdminDomain, isAdminPath]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#2563EB" />
            <link rel="canonical" href="https://www.admissionhands.com" />
            <meta name="description" content="AdmissionHands - Expert guidance for medical college admissions across India. MBBS, MD/MS counseling services." />
          </Helmet>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
              {isAdminPath ? (
                <Routes>
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/live-alerts" element={<LiveAlertsManager />} />
                  <Route path="/admin/mbbs-states" element={<MBBSStateManager />} />
                  <Route path="/admin/videos" element={<VideoManager />} />
                  <Route path="/admin/*" element={<NotFound />} />
                </Routes>
              ) : (
                <div className="min-h-screen flex flex-col pt-[48px]">
                  <Header />
                  <LiveAlerts />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/know-us" element={<AboutContact />} />
                      <Route path="/legal" element={<Legal />} />
                      <Route path="/mbbs-india" element={<MBBSIndia />} />
                      <Route path="/mbbs-india/andaman-nicobar" element={<StateTemplate stateName="Andaman Nicobar" />} />
                      <Route path="/mbbs-india/andhra-pradesh" element={<StateTemplate stateName="Andhra Pradesh" />} />
                      <Route path="/mbbs-india/arunachal-pradesh" element={<StateTemplate stateName="Arunachal Pradesh" />} />
                      <Route path="/mbbs-india/assam" element={<StateTemplate stateName="Assam" />} />
                      <Route path="/mbbs-india/bihar" element={<StateTemplate stateName="Bihar" />} />
                      <Route path="/mbbs-india/chandigarh" element={<StateTemplate stateName="Chandigarh" />} />
                      <Route path="/mbbs-india/chattisgarh" element={<StateTemplate stateName="Chattisgarh" />} />
                      <Route path="/mbbs-india/dadra-nagar-haveli" element={<StateTemplate stateName="Dadra Nagar Haveli" />} />
                      <Route path="/mbbs-india/delhi" element={<StateTemplate stateName="Delhi" />} />
                      <Route path="/mbbs-india/goa" element={<StateTemplate stateName="Goa" />} />
                      <Route path="/mbbs-india/gujarat" element={<StateTemplate stateName="Gujarat" />} />
                      <Route path="/mbbs-india/haryana" element={<StateTemplate stateName="Haryana" />} />
                      <Route path="/mbbs-india/himachal-pradesh" element={<StateTemplate stateName="Himachal Pradesh" />} />
                      <Route path="/mbbs-india/jammu-kashmir" element={<StateTemplate stateName="Jammu & Kashmir" />} />
                      <Route path="/mbbs-india/jharkhand" element={<StateTemplate stateName="Jharkhand" />} />
                      <Route path="/mbbs-india/karnataka" element={<StateTemplate stateName="Karnataka" />} />
                      <Route path="/mbbs-india/kerala" element={<StateTemplate stateName="Kerala" />} />
                      <Route path="/mbbs-india/madhya-pradesh" element={<StateTemplate stateName="Madhya Pradesh" />} />
                      <Route path="/mbbs-india/maharashtra" element={<MBBSMaharashtra />} />
                      <Route path="/mbbs-india/manipur" element={<StateTemplate stateName="Manipur" />} />
                      <Route path="/mbbs-india/meghalaya" element={<StateTemplate stateName="Meghalaya" />} />
                      <Route path="/mbbs-india/mizoram" element={<StateTemplate stateName="Mizoram" />} />
                      <Route path="/mbbs-india/nri-quota" element={<NRIQuota />} />
                      <Route path="/mbbs-india/nri-quota/colleges" element={<NRIColleges />} />
                      <Route path="/mbbs-india/nri-quota/documents" element={<NRIDocs />} />
                      <Route path="/mbbs-india/orissa" element={<StateTemplate stateName="Orissa" />} />
                      <Route path="/mbbs-india/pondicherry" element={<StateTemplate stateName="Pondicherry" />} />
                      <Route path="/mbbs-india/punjab" element={<StateTemplate stateName="Punjab" />} />
                      <Route path="/mbbs-india/rajasthan" element={<StateTemplate stateName="Rajasthan" />} />
                      <Route path="/mbbs-india/sikkim" element={<StateTemplate stateName="Sikkim" />} />
                      <Route path="/mbbs-india/tamil-nadu" element={<StateTemplate stateName="Tamil Nadu" />} />
                      <Route path="/mbbs-india/telangana" element={<StateTemplate stateName="Telangana" />} />
                      <Route path="/mbbs-india/uttar-pradesh" element={<StateTemplate stateName="Uttar Pradesh" />} />
                      <Route path="/mbbs-india/uttarakhand" element={<StateTemplate stateName="Uttarakhand" />} />
                      <Route path="/mbbs-india/west-bengal" element={<StateTemplate stateName="West Bengal" />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              )}
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
