
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import Footer from './components/Footer';
import Header from './components/Header';
import LiveAlerts from './components/LiveAlerts';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Eagerly load the most critical pages
import Index from './pages/Index';

// Lazy load other pages for better performance
const AboutContact = lazy(() => import('./pages/AboutContact'));
const Services = lazy(() => import('./pages/Services'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Videos = lazy(() => import('./pages/Videos'));
const MBBSIndia = lazy(() => import('./pages/MBBSIndia'));
const MBBSState = lazy(() => import('./pages/MBBSState'));
const DeemedUniversities = lazy(() => import('./pages/mbbs/DeemedUniversities'));

// Admin pages - lazy loaded
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const ContactManager = lazy(() => import('./pages/admin/ContactManager'));
const LiveAlertsManager = lazy(() => import('./pages/admin/LiveAlertsManager'));
const VideoManager = lazy(() => import('./pages/admin/VideoManager'));
const MBBSStateManager = lazy(() => import('./pages/admin/MBBSStateManager'));
const CollegesManager = lazy(() => import('./pages/admin/CollegesManager'));

import './App.css';

// Loading fallback for lazy-loaded components
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

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
          <Route 
            path="/admin" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AdminLogin />
              </Suspense>
            } 
          />
          <Route
            path="/admin/contacts"
            element={
              <Suspense fallback={<PageLoader />}>
                <AdminLayout>
                  <ContactManager />
                </AdminLayout>
              </Suspense>
            }
          />
          <Route
            path="/admin/live-alerts"
            element={
              <Suspense fallback={<PageLoader />}>
                <AdminLayout>
                  <LiveAlertsManager />
                </AdminLayout>
              </Suspense>
            }
          />
          <Route
            path="/admin/videos"
            element={
              <Suspense fallback={<PageLoader />}>
                <AdminLayout>
                  <VideoManager />
                </AdminLayout>
              </Suspense>
            }
          />
          <Route
            path="/admin/mbbs-states"
            element={
              <Suspense fallback={<PageLoader />}>
                <AdminLayout>
                  <MBBSStateManager />
                </AdminLayout>
              </Suspense>
            }
          />
          <Route
            path="/admin/colleges"
            element={
              <Suspense fallback={<PageLoader />}>
                <AdminLayout>
                  <CollegesManager />
                </AdminLayout>
              </Suspense>
            }
          />
          
          {/* MBBS India Routes - Using StandardLayout component */}
          <Route
            path="/mbbs-india"
            element={
              <StandardLayout>
                <Suspense fallback={<PageLoader />}>
                  <MBBSIndia />
                </Suspense>
              </StandardLayout>
            }
          />
          <Route
            path="/mbbs-india/:stateName"
            element={
              <StandardLayout>
                <Suspense fallback={<PageLoader />}>
                  <MBBSState />
                </Suspense>
              </StandardLayout>
            }
          />
          
          {/* Add Deemed Universities route */}
          <Route
            path="/mbbs-india/deemed-universities"
            element={
              <StandardLayout>
                <Suspense fallback={<PageLoader />}>
                  <DeemedUniversities />
                </Suspense>
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
                <Suspense fallback={<PageLoader />}>
                  <AboutContact />
                </Suspense>
              </StandardLayout>
            }
          />
          <Route
            path="/services"
            element={
              <StandardLayout>
                <Suspense fallback={<PageLoader />}>
                  <Services />
                </Suspense>
              </StandardLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <StandardLayout>
                <Suspense fallback={<PageLoader />}>
                  <Terms />
                </Suspense>
              </StandardLayout>
            }
          />
          <Route
            path="/videos"
            element={
              <StandardLayout>
                <Suspense fallback={<PageLoader />}>
                  <Videos />
                </Suspense>
              </StandardLayout>
            }
          />
          
          {/* Catch-all route - Handle 404 */}
          <Route
            path="*"
            element={
              <StandardLayout>
                <Suspense fallback={<PageLoader />}>
                  <NotFound />
                </Suspense>
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
