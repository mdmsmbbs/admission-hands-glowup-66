
import React, { useState, useEffect, useCallback } from 'react';
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
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);
  
  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
    // Use passive event listener for better performance
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check if a link is active - moved outside of return statement to avoid conditional hook usage
  const isActive = useCallback((path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  // Check if the current route is MBBS India - moved outside of return statement
  const isMBBSIndiaRoute = location.pathname.includes('/mbbs-india');

  // Force visibility for all pages
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[64px] w-full ${
    isScrolled 
      ? 'py-2 bg-white text-gray-800 shadow-lg' 
      : 'py-2 bg-gray-50 text-gray-800'
    }`;

  return (
    <header className={headerClass}>
      <div className="container-custom h-full w-full">
        <div className="flex justify-between items-center h-full w-full">
          {/* Only show the Logo component once, whether mobile or desktop */}
          <Logo />
          
          {/* Always initialize both components but conditionally render based on isMobile */}
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

export default React.memo(Header);
