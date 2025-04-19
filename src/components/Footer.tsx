
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-gray-light">
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="text-secondary hover:text-accent transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-secondary hover:text-accent transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-secondary hover:text-accent transition-colors">
          <Facebook className="w-6 h-6" />
        </a>
      </div>
      <p className="text-secondary">@2024 MedAdmit India. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
