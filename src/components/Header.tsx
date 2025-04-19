
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

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
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-medical-700">Admission<span className="text-medical-500">Hands</span></span>
            </Link>
          </div>

          {!isMobile ? (
            <div className="hidden md:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive('/') && location.pathname === '/' 
                            ? "bg-medical-50 text-medical-700" 
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive('/mbbs-india') 
                          ? "bg-medical-50 text-medical-700" 
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      MBBS India
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mbbs-india"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">MBBS in India Overview</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Complete guide to MBBS education across India
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mbbs-india/nri-quota"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">NRI Quota</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Expert guidance for NRI quota admissions
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mbbs-india/maharashtra"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">Maharashtra</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                51 medical colleges
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/services">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive('/services') 
                            ? "bg-medical-50 text-medical-700" 
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/about-contact">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive('/about-contact') 
                            ? "bg-medical-50 text-medical-700" 
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        About & Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="ml-4 flex items-center space-x-2">
                <a 
                  href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2.5 transition-colors shadow-md hover:shadow-lg"
                >
                  <img 
                    src="/lovable-uploads/62c66fdf-1c8a-432f-8b60-d67cc9183974.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5"
                  />
                </a>
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="flex items-center justify-center bg-medical-500 hover:bg-medical-600 text-white p-2.5 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <a 
                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition-colors shadow-md hover:shadow-lg"
              >
                <img 
                  src="/lovable-uploads/62c66fdf-1c8a-432f-8b60-d67cc9183974.png" 
                  alt="WhatsApp" 
                  className="w-4 h-4"
                />
              </a>
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-medical-500 hover:bg-medical-600 text-white p-2 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg px-2 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  isActive('/') && location.pathname === '/' 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Home
              </Link>
              
              <div>
                <div 
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors font-medium",
                    isActive('/mbbs-india') 
                      ? "bg-medical-50 text-medical-700" 
                      : "text-gray-700"
                  )}
                >
                  MBBS India
                </div>
                <div className="pl-4 space-y-1 mt-1">
                  <Link 
                    to="/mbbs-india" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    Overview
                  </Link>
                  <Link 
                    to="/mbbs-india/nri-quota" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    NRI Quota
                  </Link>
                  <Link 
                    to="/mbbs-india/maharashtra" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    Maharashtra
                  </Link>
                </div>
              </div>

              <Link 
                to="/services" 
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  isActive('/services') 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Services
              </Link>
              
              <Link 
                to="/about-contact" 
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  isActive('/about-contact') 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                About & Contact
              </Link>
              
              <div className="pt-2">
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="flex items-center justify-center space-x-2 bg-medical-500 hover:bg-medical-600 text-white px-4 py-3 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call Now: {phoneNumber}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
