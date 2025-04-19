
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
              <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/mbbs-india"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                    >
                      <div className="text-sm font-medium leading-none">MBBS in India Overview</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Complete guide to MBBS education across India
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/mbbs-india/nri-quota"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                    >
                      <div className="text-sm font-medium leading-none">NRI Quota</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Expert guidance for NRI quota admissions
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/mbbs-india/maharashtra"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-700 focus:bg-medical-50 focus:text-medical-700"
                    >
                      <div className="text-sm font-medium leading-none">Maharashtra</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        51 medical colleges
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
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
            <Link to="/about-contact">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/about-contact') 
                    ? "bg-medical-50 text-medical-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                About & Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-4">
        <ContactIcons phoneNumber={phoneNumber} />
      </div>
    </div>
  );
};

export default DesktopNavigation;
