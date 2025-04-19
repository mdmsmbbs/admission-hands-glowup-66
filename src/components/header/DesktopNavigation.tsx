
import React from 'react';
import { Link, Location } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface DesktopNavigationProps {
  phoneNumber: string;
  isActive: (path: string) => boolean;
  location: Location;
}

const states = [
  { name: 'Andhra Pradesh', slug: 'andhra-pradesh', collegesCount: 28 },
  { name: 'Assam', slug: 'assam', collegesCount: 9 },
  { name: 'Bihar', slug: 'bihar', collegesCount: 14 },
  { name: 'Chhattisgarh', slug: 'chhattisgarh', collegesCount: 8 },
  { name: 'Delhi', slug: 'delhi', collegesCount: 7 },
  { name: 'Gujarat', slug: 'gujarat', collegesCount: 20 },
  { name: 'Haryana', slug: 'haryana', collegesCount: 8 },
  { name: 'Himachal Pradesh', slug: 'himachal-pradesh', collegesCount: 6 },
  { name: 'Jammu & Kashmir', slug: 'jammu-kashmir', collegesCount: 5 },
  { name: 'Karnataka', slug: 'karnataka', collegesCount: 60 },
  { name: 'Kerala', slug: 'kerala', collegesCount: 39 },
  { name: 'Madhya Pradesh', slug: 'madhya-pradesh', collegesCount: 27 },
  { name: 'Maharashtra', slug: 'maharashtra', collegesCount: 51 },
  { name: 'Odisha', slug: 'odisha', collegesCount: 10 },
  { name: 'Punjab', slug: 'punjab', collegesCount: 11 },
  { name: 'Rajasthan', slug: 'rajasthan', collegesCount: 23 },
  { name: 'Tamil Nadu', slug: 'tamil-nadu', collegesCount: 70 },
  { name: 'Telangana', slug: 'telangana', collegesCount: 35 },
  { name: 'Uttar Pradesh', slug: 'uttar-pradesh', collegesCount: 59 },
  { name: 'Uttarakhand', slug: 'uttarakhand', collegesCount: 3 },
  { name: 'West Bengal', slug: 'west-bengal', collegesCount: 29 },
];

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ phoneNumber, isActive, location }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about-contact" className="text-sm font-medium hover:underline">
            About Us
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>MBBS in India</NavigationMenuTrigger>
          
          <NavigationMenuContent className="absolute top-0 left-0 w-full sm:w-[600px] flex-wrap bg-white p-4 shadow-lg rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {states.map((state) => (
                <Link
                  key={state.name}
                  to={`/mbbs-india/${state.slug}`}
                  className="block p-2 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <div className="font-medium text-sm">{state.name}</div>
                  <div className="text-xs text-gray-500">{state.collegesCount} Colleges</div>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/nri-quota-admission" className="text-sm font-medium hover:underline">
            NRI Quota Admission
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/neet-pg" className="text-sm font-medium hover:underline">
            NEET PG
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/medical-pg-abroad" className="text-sm font-medium hover:underline">
            Medical PG Abroad
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
