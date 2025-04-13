
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import NRIQuota from "./pages/NRIQuota";
import NRIColleges from "./pages/NRIColleges";
import NRIDocs from "./pages/NRIDocs";
import AboutContact from "./pages/AboutContact";
import ServicesPage from "./pages/Services";
import TestimonialsPage from "./pages/Testimonials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/nri-quota" element={<NRIQuota />} />
          <Route path="/nri-quota/colleges" element={<NRIColleges />} />
          <Route path="/nri-quota/documents" element={<NRIDocs />} />
          <Route path="/about-contact" element={<AboutContact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
