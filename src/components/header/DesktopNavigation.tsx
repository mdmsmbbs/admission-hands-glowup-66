
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
  ["Andhra Pradesh", "Gujarat", "Rajasthan", "Andaman Nicobar", "Meghalaya"],
  ["Jammu & Kashmir", "Kerala", "West Bengal", "Assam", "Dadra Nagar Haveli"],
  ["Maharashtra", "Madhya Pradesh", "Delhi", "Himachal Pradesh", "Sikkim"],
  ["Tamil Nadu", "Orissa", "Bihar", "Goa", "Arunachal Pradesh"],
  ["Punjab", "Telangana", "Chattisgarh", "Chandigarh", "Mizoram"],
  ["Haryana", "Jharkhand", "Uttarakhand", "Manipur", "Karnataka"],
  ["Pondicherry", "Uttar Pradesh", "", "", ""]
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
                  ? "bg-medical-50 text-medical-700" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              MBBS India
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[min(900px,95vw)] p-3 mbbs-india-submenu fixed left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {states.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      {row.map((state, colIndex) => (
                        state && (
                          <Link
                            key={`${rowIndex}-${colIndex}`}
                            to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-2 hover:bg-medical-50 rounded-md transition-colors"
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
            <Link to="/legal">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/legal') 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Legal
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
