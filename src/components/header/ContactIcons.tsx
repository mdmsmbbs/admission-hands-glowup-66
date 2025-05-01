
import React, { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useIsMobile } from '@/hooks/use-mobile';

interface ContactIconsProps {
  isMobile?: boolean;
}

interface ContactInfo {
  email: string;
  phone_number: string;
  whatsapp_number: string;
}

const ContactIcons: React.FC<ContactIconsProps> = ({ isMobile = false }) => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: 'info@admissionhands.com',
    phone_number: '+919873133846',
    whatsapp_number: '+919873133846'
  });
  
  // Use the hook to determine if the device is mobile
  const isMobileDevice = useIsMobile();
  
  // If we're on mobile device, don't show the contact icons in the header
  if (isMobileDevice) {
    return null;
  }
  
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const { data } = await supabase
          .from('contact_info')
          .select('*')
          .order('id', { ascending: false })
          .limit(1);
        
        if (data && data.length > 0) {
          setContactInfo({
            email: data[0].email,
            phone_number: data[0].phone_number,
            whatsapp_number: data[0].whatsapp_number
          });
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };
    
    fetchContactInfo();
  }, []);

  // Calculate the base size for icons
  const baseIconSize = isMobile ? "w-5 h-5" : "w-4 h-4";
  const whatsappIconSize = isMobile ? "w-6 h-6" : "w-5 h-5";  // 25% larger

  return (
    <div className="flex items-center justify-end gap-2">
      <a 
        href={`mailto:${contactInfo.email}`} 
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors text-medical-600"
        aria-label="Email us"
      >
        <Mail className={baseIconSize} />
      </a>
      
      <a 
        href={`https://wa.me/${contactInfo.whatsapp_number.replace(/[^0-9]/g, '')}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className={whatsappIconSize} fill="#25D366">
          <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.54-.043-.132 0-.26.043-.373.087-.744.29-1.015 1.43-1.015 2.176 0 .143.03.301.073.459.29 1.06 1.146 2.92 2.363 4.023 1.69 1.604 3.885 2.93 4.785 3.263.173.073.344.115.53.115.13 0 .26-.043.372-.13.53-.244.985-.53 1.316-.817.172-.157.26-.314.26-.415 0-.172-.515-.987-.515-1.318 0-.358-.314-.517-.45-.517z"/>
          <path d="M16.267 25.382c-1.863 0-3.667-.572-5.186-1.676l-4.04.977 1.015-3.666c-1.317-1.604-2.02-3.667-2.02-5.786C6.037 9.517 10.554 5 16.267 5c5.714 0 10.23 4.517 10.23 10.23s-4.516 10.23-10.23 10.23zm0-22.462C9.372 3 3.714 8.658 3.714 15.553c0 2.176.572 4.265 1.676 6.12l-2.162 7.83 8.116-1.962c1.748.947 3.667 1.432 5.714 1.432 6.895 0 12.554-5.657 12.554-12.552C29.612 8.658 23.953 3 17.058 3z"/>
        </svg>
      </a>

      <a 
        href={`tel:${contactInfo.phone_number}`}
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors text-blue-600"
        aria-label="Call us"
      >
        <Phone className={baseIconSize} />
      </a>
    </div>
  );
};

export default ContactIcons;
