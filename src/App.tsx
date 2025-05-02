
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AboutContact from './pages/AboutContact';
import Services from './pages/Services';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';

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
              <LiveAlerts />
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
              <LiveAlerts />
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
              <LiveAlerts />
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
              <LiveAlerts />
              <Terms />
              <Footer />
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
            </>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
