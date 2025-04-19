
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  phoneNumber: string;
  isActive: (path: string) => boolean;
}

const MobileMenu = ({ isOpen, onToggle, phoneNumber, isActive }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggle}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-medical-500"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[48px] bg-white overflow-y-auto z-50">
          <nav className="container-custom py-4 space-y-2">
            <Link 
              to="/" 
              className={cn(
                "block px-4 py-2.5 rounded-lg transition-colors text-base",
                isActive('/') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              )}
            >
              Home
            </Link>
            
            <div className="space-y-1">
              <div 
                className={cn(
                  "px-4 py-2.5 rounded-lg transition-colors text-base font-medium",
                  isActive('/mbbs-india') ? "bg-medical-50 text-medical-700" : "text-gray-700 bg-gray-50"
                )}
              >
                MBBS India
              </div>
              <div className="pl-4 space-y-1 mt-1">
                <Link 
                  to="/mbbs-india" 
                  className="block px-4 py-2 text-[15px] text-gray-600 hover:text-medical-600 hover:bg-gray-50 rounded-md"
                >
                  Overview
                </Link>
                <Link 
                  to="/mbbs-india/nri-quota" 
                  className="block px-4 py-2 text-[15px] text-gray-600 hover:text-medical-600 hover:bg-gray-50 rounded-md"
                >
                  NRI Quota
                </Link>
                <Link 
                  to="/mbbs-india/maharashtra" 
                  className="block px-4 py-2 text-[15px] text-gray-600 hover:text-medical-600 hover:bg-gray-50 rounded-md"
                >
                  Maharashtra
                </Link>
              </div>
            </div>

            <Link 
              to="/services" 
              className={cn(
                "block px-4 py-2.5 rounded-lg transition-colors text-base",
                isActive('/services') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              )}
            >
              Services
            </Link>
            
            <Link 
              to="/about-contact" 
              className={cn(
                "block px-4 py-2.5 rounded-lg transition-colors text-base",
                isActive('/about-contact') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              )}
            >
              About & Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
