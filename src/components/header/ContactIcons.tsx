
import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface ContactIconsProps {
  phoneNumber: string;
  isMobile?: boolean;
}

const ContactIcons = ({ phoneNumber, isMobile = false }: ContactIconsProps) => {
  const iconSize = isMobile ? "w-3.5 h-3.5" : "w-4 h-4";
  const emailIconSize = "w-6 h-6";
  const phoneIconSize = isMobile ? "w-6 h-6" : "w-6 h-6";
  const whatsappIconSize = isMobile ? "w-6 h-6" : "w-6 h-6";
  const containerPadding = isMobile ? "p-1" : "p-1.5";
  
  return (
    <div className={`${isMobile ? 'flex' : 'hidden md:flex'} items-center space-x-1.5`}>
      <a 
        href="mailto:info@admissionhands.com" 
        className={`flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-medical-600 ${containerPadding} rounded-full transition-colors`}
      >
        <Mail className={emailIconSize} />
      </a>
      
      <a 
        href={`https://wa.me/${phoneNumber.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center bg-gray-100 hover:bg-gray-200 ${containerPadding} rounded-full transition-colors`}
      >
        <img 
          src="/lovable-uploads/ec3aadb9-57f9-4fea-b9b5-0a08127ca9b0.png" 
          alt="WhatsApp" 
          className={whatsappIconSize}
        />
      </a>
      
      <a 
        href={`tel:${phoneNumber}`} 
        className={`flex items-center justify-center bg-medical-500 hover:bg-medical-600 text-white ${containerPadding} rounded-full transition-colors shadow-sm hover:shadow-md`}
      >
        <Phone className={phoneIconSize} />
      </a>
    </div>
  );
};

export default ContactIcons;
