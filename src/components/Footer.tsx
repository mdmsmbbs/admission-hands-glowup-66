
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container-custom">
        <div className="flex flex-col space-y-4">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-bold">AdmissionHands</h3>
                <div className="flex space-x-2">
                  <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {!isMobile && (
                <p className="text-sm text-gray-400 max-w-md">
                  Your trusted partner for MBBS admissions. We help aspiring medical students secure seats in top colleges across India.
                </p>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6">
              <div className="flex space-x-4 text-sm">
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </div>
              <div className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} AdmissionHands
              </div>
            </div>
          </div>
          
          {/* Mobile tagline */}
          {isMobile && (
            <p className="text-xs text-gray-400 text-center">
              Your trusted partner for MBBS admissions. We help aspiring medical students secure seats in top colleges across India.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
