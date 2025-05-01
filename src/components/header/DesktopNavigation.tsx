
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactIcons from './ContactIcons';

interface DesktopNavigationProps {
  isActive: (path: string) => boolean;
  location: {
    pathname: string;
  };
  phoneNumber: string;
  isMBBSIndiaRoute?: boolean;
}

// Unique vibrant colors for each state
const stateColors = [
  ["bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-400", "bg-pink-50 hover:bg-pink-100 border-l-4 border-pink-400", "bg-cyan-50 hover:bg-cyan-100 border-l-4 border-cyan-400", "bg-amber-50 hover:bg-amber-100 border-l-4 border-amber-400"],
  ["bg-red-50 hover:bg-red-100 border-l-4 border-red-400", "bg-emerald-50 hover:bg-emerald-100 border-l-4 border-emerald-400", "bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-400", "bg-violet-50 hover:bg-violet-100 border-l-4 border-violet-400"],
  ["bg-lime-50 hover:bg-lime-100 border-l-4 border-lime-400", "bg-sky-50 hover:bg-sky-100 border-l-4 border-sky-400", "bg-fuchsia-50 hover:bg-fuchsia-100 border-l-4 border-fuchsia-400", "bg-rose-50 hover:bg-rose-100 border-l-4 border-rose-400"],
  ["bg-indigo-50 hover:bg-indigo-100 border-l-4 border-indigo-400", "bg-teal-50 hover:bg-teal-100 border-l-4 border-teal-400", "bg-yellow-50 hover:bg-yellow-100 border-l-4 border-yellow-400", "bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-400"],
  ["bg-slate-50 hover:bg-slate-100 border-l-4 border-slate-400", "", "", ""]
];

// Reordered states according to requirements
const states = [
  ["Deemed Universities", "Karnataka", "Uttar Pradesh", "Rajasthan"], 
  ["Maharashtra", "Madhya Pradesh", "Haryana", "Himachal Pradesh"],
  ["Bihar", "West Bengal", "Uttarakhand", "Chhattisgarh"],
  ["Telangana", "Kerala", "Gujarat", "Delhi"],
  ["Odisha", "", "", ""]
];

const DesktopNavigation = ({ isActive, location, phoneNumber, isMBBSIndiaRoute = false }: DesktopNavigationProps) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  
  // Flatten the states array for the scrollable menu
  const flattenedStates = states.flat().filter(state => state !== "");

  return (
    <div className="flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/') && location.pathname === '/' 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/mbbs-india') 
                  ? "bg-gradient-to-r from-orange-100 via-white to-green-100 text-gray-800" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {isMBBSIndiaRoute ? (
                <span className="font-bold">
                  <span className="text-orange-600">M</span>
                  <span className="text-blue-600">B</span>
                  <span className="text-blue-600">B</span>
                  <span className="text-green-600">S</span>
                  <span className="text-gray-800"> </span>
                  <span className="text-orange-600">I</span>
                  <span className="text-blue-600">n</span>
                  <span className="text-blue-600">d</span>
                  <span className="text-green-600">i</span>
                  <span className="text-green-600">a</span>
                </span>
              ) : (
                <span>MBBS India</span>
              )}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[min(800px,95vw)] p-3 mbbs-india-submenu fixed left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-700">MBBS Colleges by State</h3>
                  <Link 
                    to="/mbbs-india" 
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    View All States
                  </Link>
                </div>
                
                <div className="relative">
                  <button 
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  
                  <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide py-2 px-6 gap-3 snap-x snap-mandatory scroll-smooth"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                    }}
                  >
                    {flattenedStates.map((state, index) => {
                      // Calculate which row and column this would be in the original grid
                      const rowIndex = Math.floor(index / 4);
                      const colIndex = index % 4;
                      
                      return (
                        <Link
                          key={index}
                          to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`flex-shrink-0 snap-start w-[180px] ${stateColors[rowIndex]?.[colIndex] || 'bg-gray-50 hover:bg-gray-100'} rounded-md transition-all transform hover:scale-105 hover:shadow-md`}
                        >
                          <div className="p-3">
                            <div className="text-sm font-medium">{state}</div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              Medical Colleges
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  
                  <button 
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/services">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/services') 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/know-us">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/know-us') 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Know Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/terms">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/terms') || isActive('/legal')
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Terms
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden md:block ml-4">
        <ContactIcons phoneNumber={phoneNumber} />
      </div>
    </div>
  );
};

export default DesktopNavigation;
