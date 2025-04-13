
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Phone,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "+919873133846"; 
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+|\s|-/g, '')}`;
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-medical-500/20 to-teal-500/20 blur-md rounded-lg transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-medical-600 to-medical-800 text-transparent bg-clip-text">
                  Admission
                </span>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-teal-500 to-teal-700 text-transparent bg-clip-text relative">
                  Hands
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-medical-600 via-teal-500 to-medical-600 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
              </div>
            </div>
          </Link>
        </div>

        {isMobile && (
          <div className="flex items-center gap-2 z-50">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex justify-center items-center bg-medical-500 text-white p-2 rounded-full shadow-md hover:bg-medical-600 transition-colors"
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-2 rounded-full shadow-md"
              aria-label="WhatsApp us"
            >
              <img 
                src="/lovable-uploads/62c66fdf-1c8a-432f-8b60-d67cc9183974.png" 
                alt="WhatsApp" 
                className="w-6 h-6"
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

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link to="/" className="text-gray-700 hover:text-medical-500 font-medium">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-medical-500 font-medium">Services</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-medical-500 font-medium bg-transparent">
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
          
          <a href="#testimonials" className="text-gray-700 hover:text-medical-500 font-medium">Testimonials</a>
          <Link to="/videos" className="text-gray-700 hover:text-medical-500 font-medium">Videos</Link>
          <Link to="/about-contact" className="text-gray-700 hover:text-medical-500 font-medium">Contact & About Us</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href={`tel:${phoneNumber}`} className="flex items-center text-medical-500 font-medium hover:text-medical-600 transition-colors">
            <Phone size={18} className="mr-2" />
            <span className="hidden lg:inline">Call Now</span>
          </a>
          <Button 
            className="btn-primary flex items-center px-3 py-1.5 text-xs lg:text-sm lg:px-4 lg:py-2" 
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <img 
              src="/lovable-uploads/62c66fdf-1c8a-432f-8b60-d67cc9183974.png" 
              alt="WhatsApp" 
              className="w-5 h-5 mr-1 lg:mr-2" 
            />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="hidden lg:inline">Connect</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-md max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Home</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Services</Link>
            
            <div className="py-2">
              <div className="flex items-center justify-between text-gray-700 font-medium">
                <Link to="/nri-quota" onClick={() => setMobileMenuOpen(false)} className="hover:text-medical-500">NRI Quota</Link>
                <ChevronDown size={16} />
              </div>
              <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
                <Link to="/nri-quota/colleges" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-medical-500">- Colleges List</Link>
                <Link to="/nri-quota/documents" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-medical-500">- Documentation Guide</Link>
              </div>
            </div>
            
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Testimonials</a>
            <Link to="/videos" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Videos</Link>
            <Link to="/about-contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-medical-500 font-medium py-2">Contact & About Us</Link>
            <a href={`tel:${phoneNumber}`} className="flex items-center text-medical-500 font-medium py-2 hover:text-medical-600 transition-colors">
              <Phone size={18} className="mr-2" />
              <span>Call Now</span>
            </a>
            <Button 
              className="btn-primary w-full flex items-center justify-center" 
              onClick={() => {
                window.open(whatsappUrl, '_blank');
                setMobileMenuOpen(false);
              }}
            >
              <img 
                src="/lovable-uploads/62c66fdf-1c8a-432f-8b60-d67cc9183974.png" 
                alt="WhatsApp" 
                className="w-5 h-5 mr-2" 
              />
              WhatsApp Connect
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
