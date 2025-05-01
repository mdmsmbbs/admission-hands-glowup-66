
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useEffect, useState } from 'react';
import ContactIcons from './ContactIcons';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  phoneNumber: string;
  isActive: (path: string) => boolean;
  isMBBSIndiaRoute?: boolean;
}

const MobileMenu = ({ isOpen, onToggle, phoneNumber, isActive, isMBBSIndiaRoute = false }: MobileMenuProps) => {
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

  // Reordered states list according to requirements
  const states = [
    "Deemed Universities", "Karnataka", "Uttar Pradesh", "Rajasthan",
    "Maharashtra", "Madhya Pradesh", "Haryana", "Himachal Pradesh", 
    "Bihar", "West Bengal", "Uttarakhand", "Chhattisgarh",
    "Telangana", "Kerala", "Gujarat", 
    "Delhi", "Odisha" // Delhi and Odisha at the end
  ];

  // Define state colors for vibrant hover effects
  const getStateColor = (state: string) => {
    const colorMap: Record<string, string> = {
      "Deemed Universities": "hover:bg-purple-100 hover:text-purple-700",
      "Karnataka": "hover:bg-pink-100 hover:text-pink-700",
      "Uttar Pradesh": "hover:bg-cyan-100 hover:text-cyan-700",
      "Rajasthan": "hover:bg-amber-100 hover:text-amber-700",
      "Maharashtra": "hover:bg-red-100 hover:text-red-700",
      "Madhya Pradesh": "hover:bg-emerald-100 hover:text-emerald-700",
      "Haryana": "hover:bg-blue-100 hover:text-blue-700",
      "Himachal Pradesh": "hover:bg-violet-100 hover:text-violet-700",
      "Bihar": "hover:bg-lime-100 hover:text-lime-700",
      "West Bengal": "hover:bg-sky-100 hover:text-sky-700",
      "Uttarakhand": "hover:bg-fuchsia-100 hover:text-fuchsia-700",
      "Chhattisgarh": "hover:bg-rose-100 hover:text-rose-700",
      "Telangana": "hover:bg-indigo-100 hover:text-indigo-700",
      "Kerala": "hover:bg-teal-100 hover:text-teal-700",
      "Gujarat": "hover:bg-yellow-100 hover:text-yellow-700",
      "Delhi": "hover:bg-orange-100 hover:text-orange-700",
      "Odisha": "hover:bg-slate-100 hover:text-slate-700",
    };
    
    return colorMap[state] || "hover:bg-gray-100 hover:text-medical-600";
  };

  return (
    <>
      <div className="flex items-center mobile-menu-container">
        <ContactIcons phoneNumber={phoneNumber} isMobile={true} />
        <button
          onClick={onToggle}
          className="mobile-menu-button p-2 ml-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-medical-500"
          aria-label="Toggle menu"
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
                  isActive('/mbbs-india') ? "bg-gradient-to-r from-orange-100 via-white to-green-100 text-gray-800 font-medium" : "text-gray-700 hover:bg-gray-50"
                )}
              >
                {isMBBSIndiaRoute ? (
                  <span className="font-bold flex">
                    <span className="text-orange-600">M</span>
                    <span className="text-blue-600">B</span>
                    <span className="text-blue-600">B</span>
                    <span className="text-green-600">S</span>
                    <span className="text-gray-800">&nbsp;</span>
                    <span className="text-orange-600">I</span>
                    <span className="text-blue-600">n</span>
                    <span className="text-blue-600">d</span>
                    <span className="text-green-600">i</span>
                    <span className="text-green-600">a</span>
                  </span>
                ) : (
                  <span>MBBS India</span>
                )}
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
                      className={`block px-4 py-2 text-[15px] text-gray-600 ${getStateColor(state)} rounded-md`}
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
              to="/know-us" 
              className={cn(
                "block px-4 py-2.5 rounded-lg transition-colors text-base",
                isActive('/know-us') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              )}
              onClick={onToggle}
            >
              Know Us
            </Link>

            <Link 
              to="/terms" 
              className={cn(
                "block px-4 py-2.5 rounded-lg transition-colors text-base",
                isActive('/terms') || isActive('/legal') ? "bg-medical-50 text-medical-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              )}
              onClick={onToggle}
            >
              Terms
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
