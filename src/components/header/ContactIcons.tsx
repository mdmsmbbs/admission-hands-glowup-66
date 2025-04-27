
import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface ContactIconsProps {
  phoneNumber: string;
  isMobile?: boolean;
}

const ContactIcons: React.FC<ContactIconsProps> = ({ phoneNumber, isMobile = false }) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <a 
        href={`mailto:info@admissionhands.com`} 
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors text-medical-600"
        aria-label="Email us"
      >
        <Mail className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
      </a>
      
      <a 
        href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors text-green-600"
        aria-label="Contact on WhatsApp"
      >
        <Phone className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
      </a>

      <a 
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors text-blue-600"
        aria-label="Call us"
      >
        <Phone className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
      </a>
    </div>
  );
};

export default ContactIcons;
