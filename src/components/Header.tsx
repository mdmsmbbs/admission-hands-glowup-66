
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "+919711110766"; 
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+|\s|-/g, '')}`;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-medical-600">Admission<span className="text-teal-500">Hands</span></span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-medical-500 font-medium">Home</Link>
          <a href="#services" className="text-gray-700 hover:text-medical-500 font-medium">Services</a>
          <a href="#about" className="text-gray-700 hover:text-medical-500 font-medium">About Us</a>
          <a href="#testimonials" className="text-gray-700 hover:text-medical-500 font-medium">Testimonials</a>
          <Link to="/videos" className="text-gray-700 hover:text-medical-500 font-medium">Videos</Link>
          <a href="#contact" className="text-gray-700 hover:text-medical-500 font-medium">Contact</a>
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

      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-medical-500 font-medium py-2">Home</Link>
            <a href="#services" className="text-gray-700 hover:text-medical-500 font-medium py-2">Services</a>
            <a href="#about" className="text-gray-700 hover:text-medical-500 font-medium py-2">About Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-medical-500 font-medium py-2">Testimonials</a>
            <Link to="/videos" className="text-gray-700 hover:text-medical-500 font-medium py-2">Videos</Link>
            <a href="#contact" className="text-gray-700 hover:text-medical-500 font-medium py-2">Contact</a>
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
