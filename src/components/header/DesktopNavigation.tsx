
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
import ContactIcons from './ContactIcons';

interface DesktopNavigationProps {
  isActive: (path: string) => boolean;
  location: {
    pathname: string;
  };
  phoneNumber: string;
}

const states = [
  ["Deemed Universities", "Karnataka", "Uttar Pradesh", "Rajasthan"], 
  ["Maharashtra", "Madhya Pradesh", "Haryana", "Himachal Pradesh"],
  ["Bihar", "West Bengal", "Uttarakhand", "Chhattisgarh"],
  ["Telangana", "Kerala", "Gujarat", "Delhi"],
  ["Odisha", "", "", ""]
];

// Colors for each state box in the dropdown (Indian flag colors and variations)
const stateColors = [
  ["bg-orange-50 hover:bg-orange-100", "bg-orange-50 hover:bg-orange-100", "bg-orange-50 hover:bg-orange-100", "bg-orange-50 hover:bg-orange-100"],
  ["bg-white hover:bg-gray-100 border border-gray-100", "bg-white hover:bg-gray-100 border border-gray-100", "bg-white hover:bg-gray-100 border border-gray-100", "bg-white hover:bg-gray-100 border border-gray-100"],
  ["bg-green-50 hover:bg-green-100", "bg-green-50 hover:bg-green-100", "bg-green-50 hover:bg-green-100", "bg-green-50 hover:bg-green-100"],
  ["bg-blue-50 hover:bg-blue-100", "bg-blue-50 hover:bg-blue-100", "bg-blue-50 hover:bg-blue-100", "bg-blue-50 hover:bg-blue-100"],
  ["bg-yellow-50 hover:bg-yellow-100", "", "", ""]
];

const DesktopNavigation = ({ isActive, location, phoneNumber }: DesktopNavigationProps) => {
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
              MBBS India
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[min(600px,95vw)] p-3 mbbs-india-submenu fixed left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {states.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      {row.map((state, colIndex) => (
                        state && (
                          <Link
                            key={`${rowIndex}-${colIndex}`}
                            to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`block p-2 ${stateColors[rowIndex][colIndex]} rounded-md transition-colors`}
                          >
                            <div className="text-sm font-medium">{state}</div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              Medical Colleges
                            </p>
                          </Link>
                        )
                      ))}
                    </React.Fragment>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                  <Link 
                    to="/mbbs-india" 
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    View All States
                  </Link>
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
