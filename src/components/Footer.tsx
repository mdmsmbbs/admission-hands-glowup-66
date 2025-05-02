
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+919873133846";
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-10 pb-4">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-6">
          {/* Company Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex flex-col">
              <Link to="/" className="text-xl font-bold text-white">
                AdmissionHands
              </Link>
              <div className="h-1 w-12 bg-medical-500 mt-1.5 mb-2 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for MBBS admissions. We help aspiring medical students secure seats in top colleges across India.
            </p>
            
            <div className="flex space-x-2 pt-1">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors" 
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors" 
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors" 
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m9 10 6 4-6 4V10z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Details */}
              <div className="space-y-2.5">
                <ul className="space-y-2.5">
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2.5 text-medical-500" />
                    <a 
                      href={`tel:${phoneNumber}`} 
                      className="text-gray-300 hover:text-medical-400 text-sm transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </li>
                  
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2.5 text-medical-500" />
                    <a 
                      href="mailto:info@admissionhands.com" 
                      className="text-gray-300 hover:text-medical-400 text-sm transition-colors"
                    >
                      info@admissionhands.com
                    </a>
                  </li>
                  
                  <li className="flex">
                    <MapPin className="h-4 w-4 mr-2.5 text-medical-500 mt-0.5" />
                    <p className="text-gray-300 text-sm">
                      1104A, Bhutani City Center, Sector 32, Noida, Uttar Pradesh 201301
                    </p>
                  </li>
                </ul>
              </div>
              
              {/* Subscribe Form */}
              <div>
                <div className="bg-gray-800/50 rounded-lg p-3.5 border border-gray-700/50">
                  <p className="text-sm text-gray-300 mb-2.5">Subscribe for admission updates</p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="bg-gray-700/50 text-sm rounded-l-md border-gray-600 focus:ring-medical-500 focus:border-medical-500 block w-full p-2 text-white"
                    />
                    <button 
                      type="button"
                      className="bg-medical-500 hover:bg-medical-600 text-white rounded-r-md px-3 flex items-center justify-center"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4"></div>
        
        {/* Copyright & Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="mb-3 md:mb-0">
            &copy; {currentYear} AdmissionHands. All rights reserved.
          </div>
          
          <div className="flex gap-x-6">
            <Link to="/terms" className="hover:text-medical-400 transition-colors">Terms & Policies</Link>
          </div>
        </div>
      </div>
      
      {/* Add padding at the bottom for mobile devices with footer navigation */}
      {isMobile && <div className="h-14"></div>}
    </footer>
  );
};

export default Footer;
