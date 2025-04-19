import { useEffect } from "react";
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
import MBBSMaharashtra from "./pages/MBBSMaharashtra";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import MobileFooter from "./components/MobileFooter";
import { useIsMobile } from "./hooks/use-mobile";
import LiveAlertsManager from "./pages/admin/LiveAlertsManager";

const queryClient = new QueryClient();

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const isMobile = useIsMobile();

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
          <div className="min-h-screen flex flex-col pt-[56px]">
            <Header />
            <LiveAlerts />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/mbbs-india" element={<MBBSIndia />} />
                <Route path="/mbbs-india/maharashtra" element={<MBBSMaharashtra />} />
                <Route path="/mbbs-india/nri-quota" element={<NRIQuota />} />
                <Route path="/mbbs-india/nri-quota/colleges" element={<NRIColleges />} />
                <Route path="/mbbs-india/nri-quota/documents" element={<NRIDocs />} />
                <Route path="/about-contact" element={<AboutContact />} />
                <Route path="/admin/live-alerts" element={<LiveAlertsManager />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {isMobile && <MobileFooter />}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
