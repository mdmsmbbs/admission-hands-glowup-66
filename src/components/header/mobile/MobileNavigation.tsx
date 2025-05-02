
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
    <nav className="py-2 space-y-2" aria-label="Mobile Navigation">
      <MobileMenuItem 
        to="/" 
        isActive={isActive('/')}
        onClick={onMenuItemClick}
      >
        <span className="font-medium">Home</span>
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
        <span className="font-medium">Services</span>
      </MobileMenuItem>
      
      <MobileMenuItem 
        to="/know-us" 
        isActive={isActive('/know-us')}
        onClick={onMenuItemClick}
      >
        <span className="font-medium">Know Us</span>
      </MobileMenuItem>

      <MobileMenuItem 
        to="/terms" 
        isActive={isActive('/terms') || isActive('/legal')}
        onClick={onMenuItemClick}
      >
        <span className="font-medium">Terms</span>
      </MobileMenuItem>
    </nav>
  );
};

export default MobileNavigation;
