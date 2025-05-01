
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
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
    "Delhi", "Odisha"
  ];

  return (
    <>
      <div className="flex items-center mobile-menu-container">
        <ContactIcons phoneNumber={phoneNumber} isMobile={true} />
        <button
          onClick={onToggle}
          className="mobile-menu-button p-2 ml-2 rounded-md text-medical-600 hover:bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-0 bg-white/98 overflow-y-auto z-50 pt-0">
          <div className="pt-16 pb-4 container-custom">
            <div className="flex justify-end mb-4">
              <button
                onClick={onToggle}
                className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
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
                  <span className="tricolor-text flex">
                    <span className="text-orange-500 font-bold">M</span>
                    <span className="text-blue-600 font-bold">B</span>
                    <span className="text-blue-600 font-bold">B</span>
                    <span className="text-green-600 font-bold">S</span>
                    <span className="text-gray-800 font-bold">&nbsp;</span>
                    <span className="text-orange-500 font-bold">I</span>
                    <span className="text-blue-600 font-bold">n</span>
                    <span className="text-blue-600 font-bold">d</span>
                    <span className="text-green-600 font-bold">i</span>
                    <span className="text-green-600 font-bold">a</span>
                  </span>
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
                      className="space-y-2 max-h-[60vh] overflow-y-auto pr-1"
                    >
                      {states.map((state) => {
                        const isStateActive = isActive(`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`);
                        return (
                          <Link 
                            key={state}
                            to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`block p-3 text-[15px] text-gray-700 bg-white hover:bg-gray-50 rounded-md transition-all transform hover:-translate-y-1 hover:shadow-sm ${
                              isStateActive ? 'border-l-4 border-medical-500' : ''
                            }`}
                            onClick={onToggle}
                            data-active={isStateActive}
                          >
                            <div className="font-medium">{state}</div>
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
