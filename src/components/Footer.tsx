
import React from 'react';
import { 
  Facebook, 
  Youtube, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+919873133846";
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 pb-6">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-6">
          {/* Company Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex flex-col">
              <Link to="/" className="text-xl font-bold text-white">
                AdmissionHands
              </Link>
              <div className="h-1 w-12 bg-medical-500 mt-2 mb-3 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for MBBS admissions. We help aspiring medical students secure seats in top colleges across India with specialized counseling and guidance.
            </p>
            
            <div className="flex space-x-2 pt-2">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors" 
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', to: '/know-us' },
                { label: 'Services', to: '/services' },
                { label: 'MBBS in India', to: '/mbbs-india' },
                { label: 'Testimonials', to: '/#testimonials' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-medical-400 transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {[
                { label: 'NRI Quota', to: '/mbbs-india/nri-quota' },
                { label: 'Deemed Universities', to: '/mbbs-india/deemed-universities' },
                { label: 'State Colleges', to: '/mbbs-india' },
                { label: 'Terms & Conditions', to: '/terms' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-medical-400 transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h3>
            
            <ul className="space-y-3">
              <li className="flex">
                <div className="mr-3 text-medical-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call us at</p>
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="text-gray-300 hover:text-medical-400 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-3 text-medical-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email us at</p>
                  <a 
                    href="mailto:info@admissionhands.com" 
                    className="text-gray-300 hover:text-medical-400 transition-colors"
                  >
                    info@admissionhands.com
                  </a>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-3 text-medical-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Our Location</p>
                  <p className="text-gray-300">
                    New Delhi, India
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
              <p className="text-sm text-gray-300 mb-3">Subscribe for admission updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700/50 text-sm rounded-l-md border-gray-600 focus:ring-medical-500 focus:border-medical-500 block w-full p-2.5 text-white"
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
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>
        
        {/* Copyright & Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="mb-3 md:mb-0">
            &copy; {currentYear} AdmissionHands. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/terms" className="hover:text-medical-400 transition-colors">Terms of Service</Link>
            <Link to="/terms" className="hover:text-medical-400 transition-colors">Privacy Policy</Link>
            <div className="flex items-center">
              <span>Made with</span>
              <Heart className="h-3 w-3 mx-1 text-red-500" />
              <span>for Indian medical students</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add padding at the bottom for mobile devices with footer navigation */}
      {isMobile && <div className="h-14"></div>}
    </footer>
  );
};

export default Footer;
