
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface MobileMenuItemProps {
  to: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const MobileMenuItem = ({ 
  to, 
  isActive, 
  onClick, 
  className, 
  children 
}: MobileMenuItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "block px-4 py-3 rounded-lg transition-colors text-base min-h-[44px] flex items-center touch-manipulation",
        isActive ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50 active:bg-gray-100",
        className
      )}
      onClick={onClick}
      role="menuitem"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {children}
    </Link>
  );
};

export default MobileMenuItem;
