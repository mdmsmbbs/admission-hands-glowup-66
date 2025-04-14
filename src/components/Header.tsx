import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "+919873133846"; 
  const email = "Admissionhandss.com";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+|\s|-/g, '')}`;
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? "text-medical-600" : "text-gray-700 hover:text-medical-500";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className={`font-medium ${isActive('/')}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-medical-500/20 to-teal-500/20 blur-md rounded-lg transform group-hover:scale-105 transition-all duration-300"></div>
            <div className="relative">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-medical-600 to-medical-800 text-transparent bg-clip-text">
                Admission
              </span>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-teal-500 to-teal-700 text-transparent bg-clip-text">
                Hands
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link to="/" className={`font-medium ${isActive('/')}`}>Home</Link>
          <Link to="/services" className={`font-medium ${isActive('/services')}`}>Services</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`font-medium bg-transparent ${isActive('/nri-quota')}`}>
                  NRI Quota
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px]">
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/nri-quota"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-medical-50 to-white p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-medical-600">
                            NRI Quota for Medical Admissions
                          </div>
                          <p className="text-sm leading-tight text-gray-600">
                            Complete guide to securing medical seats through NRI, NRI-sponsored, and OCI quotas
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/nri-quota/colleges"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 focus:bg-medical-50"
                        >
                          <div className="text-sm font-medium leading-none">Colleges with NRI Quota</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Top medical institutions accepting NRI quota admissions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/nri-quota/documents"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 focus:bg-medical-50"
                        >
                          <div className="text-sm font-medium leading-none">Documentation Guide</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Required documents and preparation for NRI quota
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/about-contact" className={`font-medium ${isActive('/about-contact')}`}>Contact & About Us</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href={`tel:${phoneNumber}`}
            className="p-2 rounded-full bg-medical-500 text-white hover:bg-medical-600 transition-colors"
            aria-label="Call us"
          >
            <Phone size={20} />
          </a>
          <a 
            href={`mailto:${email}`}
            className="p-2 rounded-full bg-medical-500 text-white hover:bg-medical-600 transition-colors"
            aria-label="Email us"
          >
            <Mail size={20} />
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            aria-label="WhatsApp us"
          >
            <img 
              src="/lovable-uploads/c41143a0-d735-4158-bcea-e90495a363e5.png" 
              alt="WhatsApp"
              className="w-8 h-8 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {isMobile && (
          <div className="flex items-center gap-2 z-50">
            <a 
              href={`tel:${phoneNumber}`}
              className="p-2 rounded-full bg-medical-500 text-white hover:bg-medical-600 transition-colors"
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <a 
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-medical-500 text-white hover:bg-medical-600 transition-colors"
              aria-label="Email us"
            >
              <Mail size={18} />
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              aria-label="WhatsApp us"
            >
              <img 
                src="/whatsapp.png" 
                alt="WhatsApp"
                className="w-7 h-7 hover:opacity-80 transition-opacity"
              />
            </a>
            <button 
              className="text-gray-700 p-2 rounded-md"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-md max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Home</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Services</Link>
              
              <div className="py-2">
                <div className="flex items-center justify-between text-gray-700 font-medium">
                  <Link to="/nri-quota" onClick={() => setMobileMenuOpen(false)} className="hover:text-medical-500">NRI Quota</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </div>
                <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
                  <Link to="/nri-quota/colleges" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-medical-500">- Colleges List</Link>
                  <Link to="/nri-quota/documents" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-medical-500">- Documentation Guide</Link>
                </div>
              </div>
              
              <Link to="/about-contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Contact & About Us</Link>
              
              <a href={`tel:${phoneNumber}`} className="flex items-center text-medical-500 font-medium py-2 hover:text-medical-600 transition-colors">
                <Phone size={18} className="mr-2" />
                <span>Call Now</span>
              </a>
              
              <a href={`mailto:${email}`} className="flex items-center text-medical-500 font-medium py-2 hover:text-medical-600 transition-colors">
                <Mail size={18} className="mr-2" />
                <span>Email Us</span>
              </a>
              
              <Button 
                className="btn-primary w-full flex items-center justify-center" 
                onClick={() => {
                  window.open(whatsappUrl, '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                <img 
                  src="/lovable-uploads/25c5e9b0-56a9-4cd9-ac74-e70d782b95fd.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 mr-2" 
                />
                WhatsApp Connect
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
