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
                    <NavigationMenuTrigger
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive('/nri-quota') 
                          ? "bg-medical-50 text-medical-700" 
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      NRI Quota
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-medical-50 to-medical-100 p-6 no-underline outline-none focus:shadow-md"
                              to="/nri-quota"
                            >
                              <img src="/nri-pattern.svg" className="h-12 w-12 mb-2" />
                              <div className="mb-2 mt-4 text-lg font-medium text-medical-700">
                                NRI Quota
                              </div>
                              <p className="text-sm leading-tight text-medical-600">
                                Expert guidance for NRI quota admissions in Indian medical colleges.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/nri-quota"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                NRI Quota Overview
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Learn about NRI quota eligibility and process.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/nri-quota/colleges"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                NRI Colleges
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Explore medical colleges offering NRI quota.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/nri-quota/documents"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                Required Documents
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Complete list of documents for NRI applications.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
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
                      <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                        <li className="col-span-2">
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                              to="/mbbs-india"
                            >
                              <div className="text-sm font-medium leading-none">
                                MBBS in India Overview
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Complete guide to MBBS education across India
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
                              <div className="text-sm font-medium leading-none">
                                Maharashtra
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                51 colleges
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mbbs-india/karnataka"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                Karnataka
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                60 colleges
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mbbs-india/tamil-nadu"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                Tamil Nadu
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                70 colleges
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mbbs-india/uttar-pradesh"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                Uttar Pradesh
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                59 colleges
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="col-span-2">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mbbs-india"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700 text-center"
                            >
                              <div className="text-sm font-medium leading-none text-medical-600">
                                View All States
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
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
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition-colors"
                >
                  <img 
                    src="/lovable-uploads/62c66fdf-1c8a-432f-8b60-d67cc9183974.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5"
                  />
                </a>
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="flex items-center space-x-2 bg-medical-500 hover:bg-medical-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium text-sm">Call Now</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <a 
                href={`tel:${phoneNumber}`} 
                className="mr-4 bg-medical-500 hover:bg-medical-600 text-white p-2 rounded-md transition-colors"
              >
                <Phone className="w-5 h-5" />
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
              <div>
                <div 
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors font-medium",
                    isActive('/nri-quota') 
                      ? "bg-medical-50 text-medical-700" 
                      : "text-gray-700"
                  )}
                >
                  NRI Quota
                </div>
                <div className="pl-4 space-y-1 mt-1">
                  <Link 
                    to="/nri-quota" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    Overview
                  </Link>
                  <Link 
                    to="/nri-quota/colleges" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    NRI Colleges
                  </Link>
                  <Link 
                    to="/nri-quota/documents" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    Required Documents
                  </Link>
                </div>
              </div>
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
                    to="/mbbs-india/maharashtra" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    Maharashtra
                  </Link>
                  <Link 
                    to="/mbbs-india/karnataka" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    Karnataka
                  </Link>
                  <Link 
                    to="/mbbs-india/tamil-nadu" 
                    className="block px-4 py-1 text-sm text-gray-600 hover:text-medical-600 rounded"
                  >
                    Tamil Nadu
                  </Link>
                </div>
              </div>
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
