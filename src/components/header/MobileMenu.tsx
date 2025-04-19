
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
          className="p-1.5 rounded-md text-gray-600 focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[48px] bg-white overflow-y-auto z-50">
          <nav className="container-custom py-3 space-y-1">
            <Link 
              to="/" 
              className={cn(
                "px-3 py-1.5 rounded-md transition-colors",
                isActive('/') ? "bg-medical-50 text-medical-700" : "text-gray-700 hover:bg-gray-100"
              )}
            >
              Home
            </Link>
            
            <div>
              <div 
                className={cn(
                  "px-3 py-1.5 rounded-md transition-colors font-medium",
                  isActive('/mbbs-india') ? "bg-medical-50 text-medical-700" : "text-gray-700"
                )}
              >
                MBBS India
              </div>
              <div className="pl-3 space-y-0.5 mt-0.5">
                <Link 
                  to="/mbbs-india" 
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                >
                  Overview
                </Link>
                <Link 
                  to="/mbbs-india/nri-quota" 
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                >
                  NRI Quota
                </Link>
                <Link 
                  to="/mbbs-india/maharashtra" 
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                >
                  Maharashtra
                </Link>
              </div>
            </div>

            <Link 
              to="/services" 
              className={cn(
                "px-3 py-1.5 rounded-md transition-colors",
                isActive('/services') ? "bg-medical-50 text-medical-700" : "text-gray-700 hover:bg-gray-100"
              )}
            >
              Services
            </Link>
            
            <Link 
              to="/about-contact" 
              className={cn(
                "px-3 py-1.5 rounded-md transition-colors",
                isActive('/about-contact') ? "bg-medical-50 text-medical-700" : "text-gray-700 hover:bg-gray-100"
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
