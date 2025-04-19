
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const adminUser = localStorage.getItem('adminUser');
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };
  
  if (!adminUser) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="font-bold text-lg">AdmissionHands Admin</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome, {adminUser}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        <nav className="w-48 bg-gray-800 text-white p-4">
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-gray-700" 
              onClick={() => navigate('/admin/live-alerts')}
            >
              Live Alerts
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-gray-700" 
              onClick={() => navigate('/admin/mbbs-states')}
            >
              MBBS States
            </Button>
          </div>
        </nav>
        
        <main className="flex-1 p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
