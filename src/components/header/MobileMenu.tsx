
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useEffect, useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  phoneNumber: string;
  isActive: (path: string) => boolean;
}

const MobileMenu = ({ isOpen, onToggle, phoneNumber, isActive }: MobileMenuProps) => {
  const [isIndiaExpanded, setIsIndiaExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsIndiaExpanded(false);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const states = [
    "Andhra Pradesh", "Gujarat", "Rajasthan", "Andaman Nicobar", "Meghalaya",
    "Jammu & Kashmir", "Kerala", "West Bengal", "Assam", "Dadra Nagar Haveli",
    "Maharashtra", "Madhya Pradesh", "Delhi", "Himachal Pradesh", "Sikkim",
    "Tamil Nadu", "Orissa", "Bihar", "Goa", "Arunachal Pradesh",
    "Punjab", "Telangana", "Chattisgarh", "Chandigarh", "Mizoram",
    "Haryana", "Jharkhand", "Uttarakhand", "Manipur", "Karnataka",
    "Pondicherry", "Uttar Pradesh"
  ].sort();

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
              onClick={onToggle}
            >
              Home
            </Link>
            
            <div>
              <button
                onClick={() => setIsIndiaExpanded(!isIndiaExpanded)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors text-base",
                  isActive('/mbbs-india') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <span>MBBS India</span>
                {isIndiaExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
              
              {isIndiaExpanded && (
                <div className="mt-1 pl-4 space-y-1 max-h-[60vh] overflow-y-auto">
                  <Link 
                    to="/mbbs-india" 
                    className="block px-4 py-2 text-[15px] text-gray-600 hover:text-medical-600 hover:bg-gray-50 rounded-md"
                    onClick={onToggle}
                  >
                    Overview
                  </Link>
                  <Link 
                    to="/mbbs-india/nri-quota" 
                    className="block px-4 py-2 text-[15px] text-gray-600 hover:text-medical-600 hover:bg-gray-50 rounded-md"
                    onClick={onToggle}
                  >
                    NRI Quota
                  </Link>
                  {states.map((state) => (
                    <Link 
                      key={state}
                      to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-[15px] text-gray-600 hover:text-medical-600 hover:bg-gray-50 rounded-md"
                      onClick={onToggle}
                    >
                      {state}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/services" 
              className={cn(
                "block px-4 py-2.5 rounded-lg transition-colors text-base",
                isActive('/services') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              )}
              onClick={onToggle}
            >
              Services
            </Link>
            
            <Link 
              to="/about-contact" 
              className={cn(
                "block px-4 py-2.5 rounded-lg transition-colors text-base",
                isActive('/about-contact') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              )}
              onClick={onToggle}
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
