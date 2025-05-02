
import React from 'react';
import MobileMenuItem from './MobileMenuItem';
import MBBSIndiaMenu from './MBBSIndiaMenu';

interface MobileNavigationProps {
  isActive: (path: string) => boolean;
  onMenuItemClick: () => void;
  isIndiaExpanded: boolean;
  toggleIndiaExpanded: () => void;
}

const MobileNavigation = ({
  isActive,
  onMenuItemClick,
  isIndiaExpanded,
  toggleIndiaExpanded
}: MobileNavigationProps) => {
  return (
    <nav className="py-2 space-y-3">
      <MobileMenuItem 
        to="/" 
        isActive={isActive('/')}
        onClick={onMenuItemClick}
      >
        Home
      </MobileMenuItem>
      
      <MBBSIndiaMenu 
        isExpanded={isIndiaExpanded}
        toggleExpanded={toggleIndiaExpanded}
        isActive={isActive}
        onMenuItemClick={onMenuItemClick}
      />

      <MobileMenuItem 
        to="/services" 
        isActive={isActive('/services')}
        onClick={onMenuItemClick}
      >
        Services
      </MobileMenuItem>
      
      <MobileMenuItem 
        to="/know-us" 
        isActive={isActive('/know-us')}
        onClick={onMenuItemClick}
      >
        Know Us
      </MobileMenuItem>

      <MobileMenuItem 
        to="/terms" 
        isActive={isActive('/terms') || isActive('/legal')}
        onClick={onMenuItemClick}
      >
        Terms
      </MobileMenuItem>
    </nav>
  );
};

export default MobileNavigation;
