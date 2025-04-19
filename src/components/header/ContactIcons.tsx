
import { Phone } from 'lucide-react';

interface ContactIconsProps {
  phoneNumber: string;
  isMobile?: boolean;
}

const ContactIcons = ({ phoneNumber, isMobile = false }: ContactIconsProps) => {
  const iconSize = isMobile ? "w-4 h-4" : "w-5 h-5";
  const containerPadding = isMobile ? "p-1.5" : "p-2";
  
  return (
    <div className="flex items-center space-x-2">
      <a 
        href={`https://wa.me/${phoneNumber.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${containerPadding} rounded-full transition-colors hover:bg-gray-100`}
      >
        <img 
          src="/lovable-uploads/2dc684b9-feb6-42a9-a077-0275db07d2ec.png" 
          alt="WhatsApp" 
          className={iconSize}
        />
      </a>
      <a 
        href={`tel:${phoneNumber}`} 
        className={`flex items-center justify-center bg-medical-500 hover:bg-medical-600 text-white ${containerPadding} rounded-full transition-colors shadow-sm hover:shadow-md`}
      >
        <Phone className={iconSize} />
      </a>
    </div>
  );
};

export default ContactIcons;
