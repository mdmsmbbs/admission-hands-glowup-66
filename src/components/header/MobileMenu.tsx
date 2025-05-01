
import { Menu, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from 'react';
import ContactIcons from './ContactIcons';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  isActive: (path: string) => boolean;
  isMBBSIndiaRoute?: boolean;
}

const MobileMenu = ({ isOpen, onToggle, isActive, isMBBSIndiaRoute = false }: MobileMenuProps) => {
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
    "Delhi", "Odisha"
  ];

  return (
    <>
      <div className="flex items-center mobile-menu-container">
        {/* No contact icons in mobile header - removed the ContactIcons component */}
        <button
          onClick={onToggle}
          className="mobile-menu-button p-2 ml-2 rounded-md text-medical-600 hover:bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-200"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-0 bg-white overflow-y-auto z-50 pt-0">
          <div className="pt-16 pb-4 container-custom">
            {/* Removed the X close button */}
            
            <nav className="py-4 space-y-3">
              <Link 
                to="/" 
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => setIsIndiaExpanded(!isIndiaExpanded)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-base",
                    isActive('/mbbs-india') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <span className="text-medical-600 font-bold">MBBS India</span>
                  {isIndiaExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {isIndiaExpanded && (
                  <div className="mt-3 space-y-1 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-end mb-3">
                      <Link 
                        to="/mbbs-india" 
                        className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 bg-white text-purple-600 hover:shadow-md rounded-full transition-all"
                        onClick={onToggle}
                      >
                        <span>MBBS India</span>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                      </Link>
                    </div>
                    
                    <div 
                      ref={scrollContainerRef}
                      className="space-y-2 max-h-[60vh] overflow-y-auto pr-1 mbbs-india-submenu"
                      onClick={(e) => e.stopPropagation()} // Prevent background scrolling
                    >
                      {states.map((state) => {
                        const isStateActive = isActive(`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`);
                        return (
                          <Link 
                            key={state}
                            to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`block p-3 text-[15px] bg-white hover:bg-gray-50 rounded-md transition-all transform hover:-translate-y-1 hover:shadow-sm ${
                              isStateActive 
                                ? 'border-l-4 border-medical-500 bg-gradient-to-r from-medical-50 to-white text-medical-700 font-medium'
                                : 'text-gray-700'
                            }`}
                            onClick={onToggle}
                            data-active={isStateActive}
                          >
                            <div className={`font-medium ${isStateActive ? 'text-medical-600' : ''}`}>{state}</div>
                            <div className="text-xs text-gray-500 mt-0.5">Medical Colleges</div>
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
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/services') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Services
              </Link>
              
              <Link 
                to="/know-us" 
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/know-us') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Know Us
              </Link>

              <Link 
                to="/terms" 
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/terms') || isActive('/legal') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Terms
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
