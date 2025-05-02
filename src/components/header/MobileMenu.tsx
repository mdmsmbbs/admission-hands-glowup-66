
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import MobileNavigation from './mobile/MobileNavigation';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  isActive: (path: string) => boolean;
  isMBBSIndiaRoute?: boolean;
}

const MobileMenu = ({ 
  isOpen, 
  onToggle, 
  isActive, 
  isMBBSIndiaRoute = false 
}: MobileMenuProps) => {
  const [isIndiaExpanded, setIsIndiaExpanded] = useState(false);
  
  // Effect to handle body overflow and menu state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsIndiaExpanded(false);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle toggle for India menu
  const toggleIndiaExpanded = () => setIsIndiaExpanded(!isIndiaExpanded);
  
  // Handle menu item click
  const handleMenuItemClick = () => onToggle();

  return (
    <>
      {/* Mobile menu button */}
      <div className="flex items-center md:hidden z-[60]">
        <button
          onClick={onToggle}
          className="p-2 ml-2 rounded-md text-medical-600 hover:bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 bg-white z-[60]" 
          style={{ top: '64px', height: 'calc(100% - 64px)', overflowY: 'auto' }}
        >
          <div className="pt-4 pb-20 container-custom h-full overflow-y-auto -webkit-overflow-scrolling-touch">
            <MobileNavigation 
              isActive={isActive}
              onMenuItemClick={handleMenuItemClick}
              isIndiaExpanded={isIndiaExpanded}
              toggleIndiaExpanded={toggleIndiaExpanded}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
