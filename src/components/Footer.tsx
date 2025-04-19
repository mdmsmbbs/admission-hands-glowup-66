
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">AdmissionHands</h3>
          <p className="text-gray-400 mb-6">
            Your trusted partner for MBBS admissions. We help aspiring medical students secure seats in top colleges across India.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AdmissionHands. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
