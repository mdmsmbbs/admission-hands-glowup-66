
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LiveAlerts from "./components/LiveAlerts";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NRIQuota from "./pages/NRIQuota";
import NRIColleges from "./pages/NRIColleges";
import NRIDocs from "./pages/NRIDocs";
import AboutContact from "./pages/AboutContact";
import ServicesPage from "./pages/Services";
import MBBSIndia from "./pages/MBBSIndia";
import StateTemplate from "./components/mbbs/StateTemplate";
import MBBSMaharashtra from "./pages/MBBSMaharashtra";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import MobileFooter from "./components/MobileFooter";
import { useIsMobile } from "./hooks/use-mobile";
import LiveAlertsManager from "./pages/admin/LiveAlertsManager";
import AdminLogin from "./pages/admin/AdminLogin";
import MBBSStateManager from "./pages/admin/MBBSStateManager"; // New import

const queryClient = new QueryClient();

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
  const isAdminDomain = window.location.hostname === 'admin.admissionhands.com';

  // If on admin domain, redirect to admin path if not already there
  useEffect(() => {
    if (isAdminDomain && !isAdminPath) {
      window.location.pathname = '/admin/login';
    }
  }, [isAdminDomain, isAdminPath]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="canonical" href="https://www.admissionhands.com" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          {!isAdminPath ? (
            <div className="min-h-screen flex flex-col pt-[48px]">
              <Header />
              <LiveAlerts />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/mbbs-india" element={<MBBSIndia />} />
                  <Route path="/mbbs-india/maharashtra" element={<MBBSMaharashtra />} />
                  <Route path="/mbbs-india/andhra-pradesh" element={<StateTemplate stateName="Andhra Pradesh" />} />
                  <Route path="/mbbs-india/gujarat" element={<StateTemplate stateName="Gujarat" />} />
                  <Route path="/mbbs-india/rajasthan" element={<StateTemplate stateName="Rajasthan" />} />
                  <Route path="/mbbs-india/andaman-nicobar" element={<StateTemplate stateName="Andaman Nicobar" />} />
                  <Route path="/mbbs-india/meghalaya" element={<StateTemplate stateName="Meghalaya" />} />
                  <Route path="/mbbs-india/jammu-kashmir" element={<StateTemplate stateName="Jammu & Kashmir" />} />
                  <Route path="/mbbs-india/kerala" element={<StateTemplate stateName="Kerala" />} />
                  <Route path="/mbbs-india/west-bengal" element={<StateTemplate stateName="West Bengal" />} />
                  <Route path="/mbbs-india/assam" element={<StateTemplate stateName="Assam" />} />
                  <Route path="/mbbs-india/dadra-nagar-haveli" element={<StateTemplate stateName="Dadra Nagar Haveli" />} />
                  <Route path="/mbbs-india/madhya-pradesh" element={<StateTemplate stateName="Madhya Pradesh" />} />
                  <Route path="/mbbs-india/delhi" element={<StateTemplate stateName="Delhi" />} />
                  <Route path="/mbbs-india/himachal-pradesh" element={<StateTemplate stateName="Himachal Pradesh" />} />
                  <Route path="/mbbs-india/sikkim" element={<StateTemplate stateName="Sikkim" />} />
                  <Route path="/mbbs-india/tamil-nadu" element={<StateTemplate stateName="Tamil Nadu" />} />
                  <Route path="/mbbs-india/orissa" element={<StateTemplate stateName="Orissa" />} />
                  <Route path="/mbbs-india/bihar" element={<StateTemplate stateName="Bihar" />} />
                  <Route path="/mbbs-india/goa" element={<StateTemplate stateName="Goa" />} />
                  <Route path="/mbbs-india/arunachal-pradesh" element={<StateTemplate stateName="Arunachal Pradesh" />} />
                  <Route path="/mbbs-india/punjab" element={<StateTemplate stateName="Punjab" />} />
                  <Route path="/mbbs-india/telangana" element={<StateTemplate stateName="Telangana" />} />
                  <Route path="/mbbs-india/chattisgarh" element={<StateTemplate stateName="Chattisgarh" />} />
                  <Route path="/mbbs-india/chandigarh" element={<StateTemplate stateName="Chandigarh" />} />
                  <Route path="/mbbs-india/mizoram" element={<StateTemplate stateName="Mizoram" />} />
                  <Route path="/mbbs-india/haryana" element={<StateTemplate stateName="Haryana" />} />
                  <Route path="/mbbs-india/jharkhand" element={<StateTemplate stateName="Jharkhand" />} />
                  <Route path="/mbbs-india/uttarakhand" element={<StateTemplate stateName="Uttarakhand" />} />
                  <Route path="/mbbs-india/manipur" element={<StateTemplate stateName="Manipur" />} />
                  <Route path="/mbbs-india/karnataka" element={<StateTemplate stateName="Karnataka" />} />
                  <Route path="/mbbs-india/pondicherry" element={<StateTemplate stateName="Pondicherry" />} />
                  <Route path="/mbbs-india/uttar-pradesh" element={<StateTemplate stateName="Uttar Pradesh" />} />
                  <Route path="/mbbs-india/nri-quota" element={<NRIQuota />} />
                  <Route path="/mbbs-india/nri-quota/colleges" element={<NRIColleges />} />
                  <Route path="/mbbs-india/nri-quota/documents" element={<NRIDocs />} />
                  <Route path="/about-contact" element={<AboutContact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              {isMobile && <MobileFooter />}
            </div>
          ) : (
            <Routes>
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/live-alerts" element={<LiveAlertsManager />} />
              <Route path="/admin/mbbs-states" element={<MBBSStateManager />} /> {/* New admin route */}
              <Route path="/admin/*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
