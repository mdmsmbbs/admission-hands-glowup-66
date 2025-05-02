
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AboutContact from './pages/AboutContact';
import Services from './pages/Services';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import MBBSIndia from './pages/MBBSIndia';
import MBBSState from './pages/MBBSState';
import DeemedUniversities from './pages/mbbs/DeemedUniversities';

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
import LiveAlerts from './components/LiveAlerts';
import MobileFooter from './components/MobileFooter';

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
        
        {/* MBBS India Routes - Fixed to include Header and Footer once */}
        <Route
          path="/mbbs-india"
          element={
            <>
              <Header />
              <LiveAlerts />
              <MBBSIndia />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        <Route
          path="/mbbs-india/:stateName"
          element={
            <>
              <Header />
              <LiveAlerts />
              <MBBSState />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        
        {/* Add Deemed Universities route */}
        <Route
          path="/mbbs-india/deemed-universities"
          element={
            <>
              <Header />
              <LiveAlerts />
              <DeemedUniversities />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <LiveAlerts />
              <Index />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        <Route
          path="/know-us"
          element={
            <>
              <Header />
              <LiveAlerts />
              <AboutContact />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <LiveAlerts />
              <Services />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Header />
              <LiveAlerts />
              <Terms />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        <Route
          path="/videos"
          element={
            <>
              <Header />
              <LiveAlerts />
              <Videos />
              <Footer />
              <MobileFooter />
            </>
          }
        />
        
        {/* 404 Route */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <LiveAlerts />
              <NotFound />
              <Footer />
              <MobileFooter />
            </>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
