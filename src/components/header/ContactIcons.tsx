
import { Phone } from 'lucide-react';

interface ContactIconsProps {
  phoneNumber: string;
  isMobile?: boolean;
}

const ContactIcons = ({ phoneNumber, isMobile = false }: ContactIconsProps) => {
  const phoneIconSize = isMobile ? "w-4 h-4" : "w-5 h-5";
  const whatsappIconSize = isMobile ? "w-4 h-4" : "w-[23px] h-[23px]"; // 15% larger for desktop
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
          src="/lovable-uploads/901ceaae-cb30-4393-bf05-87aa9b1f9318.png" 
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
