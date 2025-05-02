
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import MBBSStatesList from './MBBSStatesList';

interface MBBSIndiaMenuProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
  isActive: (path: string) => boolean;
  onMenuItemClick: () => void;
}

const MBBSIndiaMenu = ({
  isExpanded,
  toggleExpanded,
  isActive,
  onMenuItemClick
}: MBBSIndiaMenuProps) => {
  // Reordered states list according to requirements
  const states = [
    "Deemed Universities", "Karnataka", "Uttar Pradesh", "Rajasthan",
    "Maharashtra", "Madhya Pradesh", "Haryana", "Himachal Pradesh", 
    "Bihar", "West Bengal", "Uttarakhand", "Chhattisgarh",
    "Telangana", "Kerala", "Gujarat", 
    "Delhi", "Odisha"
  ];

  const getIsStateActive = (state: string) => {
    return isActive(`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div>
      <button
        onClick={toggleExpanded}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-base min-h-[44px] touch-manipulation",
          isActive('/mbbs-india') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
        )}
        aria-expanded={isExpanded}
      >
        <span className="text-medical-600 font-bold">MBBS India</span>
        {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      
      {isExpanded && (
        <MBBSStatesList 
          states={states}
          onItemClick={onMenuItemClick}
          getIsStateActive={getIsStateActive}
        />
      )}
    </div>
  );
};

export default MBBSIndiaMenu;
