
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Users, Bell, Video, Map, School } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Contacts', href: '/admin/contacts', icon: Users },
    { name: 'Live Alerts', href: '/admin/live-alerts', icon: Bell },
    { name: 'Videos', href: '/admin/videos', icon: Video },
    { name: 'MBBS States', href: '/admin/mbbs-states', icon: Map },
    { name: 'Colleges', href: '/admin/colleges', icon: School },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link to="/" className="text-lg font-bold text-medical-600">AdmissionHands Admin</Link>
            </div>
            <div className="mt-8">
              <nav className="px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-4 py-3 text-base font-medium rounded-md ${
                      isActive(item.href)
                        ? 'bg-medical-50 text-medical-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive(item.href) ? 'text-medical-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Website
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
