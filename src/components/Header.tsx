
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Phone
} from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-medical-600">Admission<span className="text-teal-500">Hands</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-medical-500 font-medium">Home</a>
          <a href="#services" className="text-gray-700 hover:text-medical-500 font-medium">Services</a>
          <a href="#about" className="text-gray-700 hover:text-medical-500 font-medium">About Us</a>
          <a href="#testimonials" className="text-gray-700 hover:text-medical-500 font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-medical-500 font-medium">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center text-medical-500 font-medium">
            <Phone size={18} className="mr-2" />
            <span>Call Now</span>
          </a>
          <Button className="btn-primary">Book Consultation</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-medical-500 font-medium py-2">Home</a>
            <a href="#services" className="text-gray-700 hover:text-medical-500 font-medium py-2">Services</a>
            <a href="#about" className="text-gray-700 hover:text-medical-500 font-medium py-2">About Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-medical-500 font-medium py-2">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-medical-500 font-medium py-2">Contact</a>
            <a href="tel:+1234567890" className="flex items-center text-medical-500 font-medium py-2">
              <Phone size={18} className="mr-2" />
              <span>Call Now</span>
            </a>
            <Button className="btn-primary w-full">Book Consultation</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
