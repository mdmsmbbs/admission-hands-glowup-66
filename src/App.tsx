import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AboutContact from './pages/AboutContact';
import Services from './pages/Services';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import Testimonials from './pages/Testimonials';
import NRIQuota from './pages/NRIQuota';
import NRIDocs from './pages/NRIDocs';
import NRIColleges from './pages/NRIColleges';
import MBBSIndia from './pages/MBBSIndia';
import MBBSMaharashtra from './pages/MBBSMaharashtra';
import DeemedUniversities from './pages/mbbs/DeemedUniversities';
import MBBSState from './pages/MBBSState';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import ContactManager from './pages/admin/ContactManager';
import LiveAlertsManager from './pages/admin/LiveAlertsManager';
import VideoManager from './pages/admin/VideoManager';
import MBBSStateManager from './pages/admin/MBBSStateManager';
import CollegesManager from './pages/admin/CollegesManager';

// Components
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/contacts"
          element={
            <AdminLayout>
              <ContactManager />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/live-alerts"
          element={
            <AdminLayout>
              <LiveAlertsManager />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/videos"
          element={
            <AdminLayout>
              <VideoManager />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/mbbs-states"
          element={
            <AdminLayout>
              <MBBSStateManager />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/colleges"
          element={
            <AdminLayout>
              <CollegesManager />
            </AdminLayout>
          }
        />
        
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Index />
              <Footer />
            </>
          }
        />
        <Route
          path="/know-us"
          element={
            <>
              <Header />
              <AboutContact />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Header />
              <Terms />
              <Footer />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <Header />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route
          path="/videos"
          element={
            <>
              <Header />
              <Videos />
              <Footer />
            </>
          }
        />
        <Route
          path="/nri-quota"
          element={
            <>
              <Header />
              <NRIQuota />
              <Footer />
            </>
          }
        />
        <Route
          path="/nri-documents"
          element={
            <>
              <Header />
              <NRIDocs />
              <Footer />
            </>
          }
        />
        <Route
          path="/nri-colleges"
          element={
            <>
              <Header />
              <NRIColleges />
              <Footer />
            </>
          }
        />
        <Route
          path="/mbbs-india"
          element={
            <>
              <Header />
              <MBBSIndia />
              <Footer />
            </>
          }
        />
        <Route
          path="/mbbs-india/maharashtra"
          element={
            <>
              <Header />
              <MBBSMaharashtra />
              <Footer />
            </>
          }
        />
        <Route
          path="/mbbs-india/deemed-universities"
          element={
            <>
              <Header />
              <DeemedUniversities />
              <Footer />
            </>
          }
        />
        
        {/* Dynamic State Routes */}
        <Route
          path="/mbbs-india/:stateName"
          element={
            <>
              <Header />
              <MBBSState />
              <Footer />
            </>
          }
        />
        
        {/* 404 Route */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
