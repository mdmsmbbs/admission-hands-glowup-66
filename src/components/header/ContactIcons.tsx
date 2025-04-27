
import React from 'react';
import { Phone } from 'lucide-react';

interface ContactIconsProps {
  phoneNumber: string;
  isMobile?: boolean;
}

const ContactIcons: React.FC<ContactIconsProps> = ({ phoneNumber, isMobile = false }) => {
  return (
    <div className="flex items-center justify-end">
      <a 
        href={`tel:${phoneNumber}`} 
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors text-medical-600"
        aria-label="Call us"
      >
        <Phone className={isMobile ? "w-5 h-5" : "w-4 h-4"} /> {/* Reduced size by 20% from w-5 h-5 to w-4 h-4 */}
        {!isMobile && <span className="text-sm font-medium">{phoneNumber}</span>}
      </a>
    </div>
  );
};

export default ContactIcons;
