
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './header/Logo';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenu from './header/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Check if the current route is MBBS India
  const isMBBSIndiaRoute = location.pathname.includes('/mbbs-india');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white text-gray-800 shadow-lg' 
          : 'py-2 bg-gray-50 text-gray-800'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Logo />
          
          {!isMobile ? (
            <DesktopNavigation 
              isActive={isActive}
              location={location}
              isMBBSIndiaRoute={isMBBSIndiaRoute}
            />
          ) : (
            <MobileMenu
              isOpen={isMenuOpen}
              onToggle={toggleMenu}
              isActive={isActive}
              isMBBSIndiaRoute={isMBBSIndiaRoute}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
