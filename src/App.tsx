
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import Index from './pages/Index';
import { Toaster } from './components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const AboutContact = lazy(() => import('./pages/AboutContact'));
const Services = lazy(() => import('./pages/Services'));
const MBBSIndia = lazy(() => import('./pages/MBBSIndia'));
const MBBSMaharashtra = lazy(() => import('./pages/MBBSMaharashtra'));
const DeemedUniversities = lazy(() => import('./pages/mbbs/DeemedUniversities'));
const NRIQuota = lazy(() => import('./pages/NRIQuota'));
const NRIColleges = lazy(() => import('./pages/NRIColleges'));
const NRIDocs = lazy(() => import('./pages/NRIDocs'));
const TestimonialsPage = lazy(() => import('./pages/Testimonials'));
const VideosPage = lazy(() => import('./pages/Videos'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin pages
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const LiveAlertsManager = lazy(() => import('./pages/admin/LiveAlertsManager'));
const ContactManager = lazy(() => import('./pages/admin/ContactManager'));
const VideoManager = lazy(() => import('./pages/admin/VideoManager'));
const MBBSStateManager = lazy(() => import('./pages/admin/MBBSStateManager'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 w-64 bg-gray-200 rounded"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about-contact" element={<AboutContact />} />
          <Route path="/know-us" element={<AboutContact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mbbs-india" element={<MBBSIndia />} />
          <Route path="/mbbs-maharashtra" element={<MBBSMaharashtra />} />
          <Route path="/mbbs-india/deemed-universities" element={<DeemedUniversities />} />
          <Route path="/nri-quota" element={<NRIQuota />} />
          <Route path="/nri-quota/colleges" element={<NRIColleges />} />
          <Route path="/nri-quota/documents" element={<NRIDocs />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/terms" element={<Terms />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/live-alerts" element={<LiveAlertsManager />} />
          <Route path="/admin/contacts" element={<ContactManager />} />
          <Route path="/admin/videos" element={<VideoManager />} />
          <Route path="/admin/mbbs-states" element={<MBBSStateManager />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <MobileFooter />
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;
