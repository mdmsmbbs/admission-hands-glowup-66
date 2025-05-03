
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

import './App.css';

function App() {
  return (
    <Router>
      <div className="w-full max-w-[100vw] overflow-x-hidden">
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
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <MBBSIndia />
                <Footer />
              </div>
            }
          />
          <Route
            path="/mbbs-india/:stateName"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <MBBSState />
                <Footer />
              </div>
            }
          />
          
          {/* Add Deemed Universities route */}
          <Route
            path="/mbbs-india/deemed-universities"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <DeemedUniversities />
                <Footer />
              </div>
            }
          />
          
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <Index />
                <Footer />
              </div>
            }
          />
          <Route
            path="/know-us"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <AboutContact />
                <Footer />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <Services />
                <Footer />
              </div>
            }
          />
          <Route
            path="/terms"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <Terms />
                <Footer />
              </div>
            }
          />
          <Route
            path="/videos"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <Videos />
                <Footer />
              </div>
            }
          />
          
          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="w-full">
                <Header />
                <LiveAlerts />
                <NotFound />
                <Footer />
              </div>
            }
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
