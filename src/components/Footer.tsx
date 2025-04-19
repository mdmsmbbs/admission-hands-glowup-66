
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
  
  // Don't render footer on mobile
  if (isMobile) {
    return null;
  }
  
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-3">
              <h3 className="text-base font-bold">AdmissionHands</h3>
              <div className="flex space-x-1.5">
                <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1 rounded-full transition-colors">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1 rounded-full transition-colors">
                  <Twitter className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1 rounded-full transition-colors">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1 rounded-full transition-colors">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-400">Your trusted partner for MBBS admissions. We help aspiring medical students secure seats in top colleges across India.</p>
          </div>
          
          <div className="flex space-x-3 text-xs text-gray-400">
            <Link to="/legal" className="hover:text-white transition-colors">Privacy & Terms</Link>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
