
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from 'react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Scroll to the active state if the India menu is expanded
  useEffect(() => {
    if (isIndiaExpanded && scrollContainerRef.current) {
      const activeItem = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [isIndiaExpanded]);

  // Reordered states list according to requirements
  const states = [
    "Deemed Universities", "Karnataka", "Uttar Pradesh", "Rajasthan",
    "Maharashtra", "Madhya Pradesh", "Haryana", "Himachal Pradesh", 
    "Bihar", "West Bengal", "Uttarakhand", "Chhattisgarh",
    "Telangana", "Kerala", "Gujarat", 
    "Delhi", "Odisha" // Delhi and Odisha at the end
  ];

  // Define state colors for vibrant hover effects with border accents
  const getStateColor = (state: string, isActive: boolean = false) => {
    const colorMap: Record<string, string> = {
      "Deemed Universities": isActive ? "bg-purple-100 text-purple-800 border-l-4 border-purple-500" : "hover:bg-purple-50 hover:text-purple-700 border-l-4 border-purple-200 hover:border-purple-500",
      "Karnataka": isActive ? "bg-pink-100 text-pink-800 border-l-4 border-pink-500" : "hover:bg-pink-50 hover:text-pink-700 border-l-4 border-pink-200 hover:border-pink-500",
      "Uttar Pradesh": isActive ? "bg-cyan-100 text-cyan-800 border-l-4 border-cyan-500" : "hover:bg-cyan-50 hover:text-cyan-700 border-l-4 border-cyan-200 hover:border-cyan-500",
      "Rajasthan": isActive ? "bg-amber-100 text-amber-800 border-l-4 border-amber-500" : "hover:bg-amber-50 hover:text-amber-700 border-l-4 border-amber-200 hover:border-amber-500",
      "Maharashtra": isActive ? "bg-red-100 text-red-800 border-l-4 border-red-500" : "hover:bg-red-50 hover:text-red-700 border-l-4 border-red-200 hover:border-red-500",
      "Madhya Pradesh": isActive ? "bg-emerald-100 text-emerald-800 border-l-4 border-emerald-500" : "hover:bg-emerald-50 hover:text-emerald-700 border-l-4 border-emerald-200 hover:border-emerald-500",
      "Haryana": isActive ? "bg-blue-100 text-blue-800 border-l-4 border-blue-500" : "hover:bg-blue-50 hover:text-blue-700 border-l-4 border-blue-200 hover:border-blue-500",
      "Himachal Pradesh": isActive ? "bg-violet-100 text-violet-800 border-l-4 border-violet-500" : "hover:bg-violet-50 hover:text-violet-700 border-l-4 border-violet-200 hover:border-violet-500",
      "Bihar": isActive ? "bg-lime-100 text-lime-800 border-l-4 border-lime-500" : "hover:bg-lime-50 hover:text-lime-700 border-l-4 border-lime-200 hover:border-lime-500",
      "West Bengal": isActive ? "bg-sky-100 text-sky-800 border-l-4 border-sky-500" : "hover:bg-sky-50 hover:text-sky-700 border-l-4 border-sky-200 hover:border-sky-500",
      "Uttarakhand": isActive ? "bg-fuchsia-100 text-fuchsia-800 border-l-4 border-fuchsia-500" : "hover:bg-fuchsia-50 hover:text-fuchsia-700 border-l-4 border-fuchsia-200 hover:border-fuchsia-500",
      "Chhattisgarh": isActive ? "bg-rose-100 text-rose-800 border-l-4 border-rose-500" : "hover:bg-rose-50 hover:text-rose-700 border-l-4 border-rose-200 hover:border-rose-500",
      "Telangana": isActive ? "bg-indigo-100 text-indigo-800 border-l-4 border-indigo-500" : "hover:bg-indigo-50 hover:text-indigo-700 border-l-4 border-indigo-200 hover:border-indigo-500",
      "Kerala": isActive ? "bg-teal-100 text-teal-800 border-l-4 border-teal-500" : "hover:bg-teal-50 hover:text-teal-700 border-l-4 border-teal-200 hover:border-teal-500",
      "Gujarat": isActive ? "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500" : "hover:bg-yellow-50 hover:text-yellow-700 border-l-4 border-yellow-200 hover:border-yellow-500",
      "Delhi": isActive ? "bg-orange-100 text-orange-800 border-l-4 border-orange-500" : "hover:bg-orange-50 hover:text-orange-700 border-l-4 border-orange-200 hover:border-orange-500",
      "Odisha": isActive ? "bg-slate-100 text-slate-800 border-l-4 border-slate-500" : "hover:bg-slate-50 hover:text-slate-700 border-l-4 border-slate-200 hover:border-slate-500",
    };
    
    return colorMap[state] || "hover:bg-gray-50 hover:text-medical-600";
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
                <div className="mt-3 space-y-1 max-h-[60vh] overflow-y-auto">
                  <div className="flex justify-between items-center px-4 mb-2">
                    <h3 className="text-sm font-semibold text-gray-700">Select a State</h3>
                    <Link 
                      to="/mbbs-india" 
                      className="text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded-md"
                      onClick={onToggle}
                    >
                      Overview
                    </Link>
                  </div>
                  
                  <div 
                    ref={scrollContainerRef}
                    className="pl-2 space-y-1 snap-y"
                  >
                    {states.map((state) => {
                      const isStateActive = isActive(`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`);
                      return (
                        <Link 
                          key={state}
                          to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`block px-3 py-2 text-[15px] text-gray-600 ${getStateColor(state, isStateActive)} rounded-md transition-all transform hover:translate-x-1`}
                          onClick={onToggle}
                          data-active={isStateActive}
                        >
                          {state}
                        </Link>
                      );
                    })}
                  </div>
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
