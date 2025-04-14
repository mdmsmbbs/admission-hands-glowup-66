
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/mbbs-india" element={<MBBSIndia />} />
          <Route path="/mbbs-india/maharashtra" element={<MBBSMaharashtra />} />
          <Route path="/mbbs-india/nri-quota" element={<NRIQuota />} />
          <Route path="/mbbs-india/nri-quota/colleges" element={<NRIColleges />} />
          <Route path="/mbbs-india/nri-quota/documents" element={<NRIDocs />} />
          <Route path="/about-contact" element={<AboutContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
