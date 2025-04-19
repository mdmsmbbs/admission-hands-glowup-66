
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-bold">AdmissionHands</h3>
            <div className="flex space-x-2">
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-1.5 rounded-full transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
