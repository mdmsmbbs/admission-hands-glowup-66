
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MBBSStatesListProps {
  states: string[];
  onItemClick: () => void;
  getIsStateActive: (state: string) => boolean;
}

const MBBSStatesList = ({ 
  states, 
  onItemClick, 
  getIsStateActive 
}: MBBSStatesListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeItem = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  return (
    <div className="mt-3 space-y-1 bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-end mb-3">
        <Link 
          to="/mbbs-india" 
          className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 bg-white text-purple-600 hover:shadow-md rounded-full transition-all min-h-[44px]"
          onClick={onItemClick}
        >
          <span>MBBS India</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
        </Link>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="space-y-2 max-h-[60vh] overflow-y-auto pr-1 mbbs-india-submenu"
        onClick={(e) => e.stopPropagation()}
      >
        {states.map((state) => {
          const isStateActive = getIsStateActive(state);
          return (
            <Link 
              key={state}
              to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
              className={`block p-3 text-[15px] bg-white hover:bg-gray-50 rounded-md transition-all transform hover:-translate-y-1 hover:shadow-sm min-h-[44px] ${
                isStateActive 
                  ? 'border-l-4 border-medical-500 bg-gradient-to-r from-medical-50 to-white text-medical-700 font-medium'
                  : 'text-gray-700'
              }`}
              onClick={onItemClick}
              data-active={isStateActive}
            >
              <div className={`font-medium ${isStateActive ? 'text-medical-600' : ''}`}>{state}</div>
              <div className="text-xs text-gray-500 mt-0.5">Medical Colleges</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MBBSStatesList;
