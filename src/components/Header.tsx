
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './header/Logo';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenu from './header/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const phoneNumber = "+919873133846";
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white shadow-sm">
        <div className="container-custom py-2">
          <div className="flex justify-between items-center">
            <Logo />
            
            {!isMobile ? (
              <DesktopNavigation 
                isActive={isActive}
                location={location}
                phoneNumber={phoneNumber}
              />
            ) : (
              <MobileMenu
                isOpen={isMenuOpen}
                onToggle={toggleMenu}
                phoneNumber={phoneNumber}
                isActive={isActive}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
