
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Phone,
  MessageSquare,
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
                <span className="text-2xl font-bold bg-gradient-to-br from-medical-600 to-medical-800 text-transparent bg-clip-text">
                  Admission
                </span>
                <span className="text-2xl font-bold bg-gradient-to-br from-teal-500 to-teal-700 text-transparent bg-clip-text relative">
                  Hands
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-medical-600 via-teal-500 to-medical-600 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
              </div>
            </div>
          </Link>
        </div>

        {isMobile && (
          <div className="flex items-center gap-3 z-50">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex justify-center items-center bg-medical-500 text-white p-2.5 rounded-full shadow-md hover:bg-medical-600 transition-colors"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-green-600 text-white p-2.5 rounded-full shadow-md hover:bg-green-700 transition-colors"
              aria-label="WhatsApp us"
            >
              <MessageSquare size={20} />
            </a>
          </div>
        )}

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-medical-500 font-medium">Home</Link>
          <a href="#services" className="text-gray-700 hover:text-medical-500 font-medium">Services</a>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-medical-500 font-medium bg-transparent">
                  NRI Quota
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
            <span>Call Now</span>
          </a>
          <Button 
            className="btn-primary flex items-center bg-green-600 hover:bg-green-700" 
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageSquare size={18} className="mr-2" />
            WhatsApp Connect
          </Button>
        </div>

        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-medical-500 font-medium py-2">Home</Link>
            <a href="#services" className="text-gray-700 hover:text-medical-500 font-medium py-2">Services</a>
            
            <div className="py-2">
              <div className="flex items-center justify-between text-gray-700 font-medium">
                <Link to="/nri-quota" className="hover:text-medical-500">NRI Quota</Link>
                <ChevronDown size={16} />
              </div>
              <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
                <Link to="/nri-quota/colleges" className="block text-gray-700 hover:text-medical-500">- Colleges List</Link>
                <Link to="/nri-quota/documents" className="block text-gray-700 hover:text-medical-500">- Documentation Guide</Link>
              </div>
            </div>
            
            <a href="#testimonials" className="text-gray-700 hover:text-medical-500 font-medium py-2">Testimonials</a>
            <Link to="/videos" className="text-gray-700 hover:text-medical-500 font-medium py-2">Videos</Link>
            <Link to="/about-contact" className="text-gray-700 hover:text-medical-500 font-medium py-2">Contact & About Us</Link>
            <a href={`tel:${phoneNumber}`} className="flex items-center text-medical-500 font-medium py-2 hover:text-medical-600 transition-colors">
              <Phone size={18} className="mr-2" />
              <span>Call Now</span>
            </a>
            <Button 
              className="btn-primary w-full flex items-center bg-green-600 hover:bg-green-700" 
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageSquare size={18} className="mr-2" />
              WhatsApp Connect
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
