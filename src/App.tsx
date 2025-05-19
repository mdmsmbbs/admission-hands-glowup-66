
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Standard layout wrapper for public pages
const StandardLayout = ({ children }) => (
  <div className="w-full">
    <Header />
    <LiveAlerts />
    {children}
    <Footer />
  </div>
);

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
          
          {/* MBBS India Routes - Using StandardLayout component */}
          <Route
            path="/mbbs-india"
            element={
              <StandardLayout>
                <MBBSIndia />
              </StandardLayout>
            }
          />
          <Route
            path="/mbbs-india/:stateName"
            element={
              <StandardLayout>
                <MBBSState />
              </StandardLayout>
            }
          />
          
          {/* Add Deemed Universities route */}
          <Route
            path="/mbbs-india/deemed-universities"
            element={
              <StandardLayout>
                <DeemedUniversities />
              </StandardLayout>
            }
          />
          
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <StandardLayout>
                <Index />
              </StandardLayout>
            }
          />
          <Route
            path="/know-us"
            element={
              <StandardLayout>
                <AboutContact />
              </StandardLayout>
            }
          />
          <Route
            path="/services"
            element={
              <StandardLayout>
                <Services />
              </StandardLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <StandardLayout>
                <Terms />
              </StandardLayout>
            }
          />
          <Route
            path="/videos"
            element={
              <StandardLayout>
                <Videos />
              </StandardLayout>
            }
          />
          
          {/* Catch-all route - Handle 404 */}
          <Route
            path="*"
            element={
              <StandardLayout>
                <NotFound />
              </StandardLayout>
            }
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
