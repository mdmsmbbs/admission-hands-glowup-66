
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { BellRing, Video, Layout, Phone } from 'lucide-react';
import { toast } from 'sonner';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();
  const adminUser = localStorage.getItem('adminUser') || user?.email || '';
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true' || !!user;
    
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate, user, loading]);
  
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('adminAuthenticated');
      localStorage.removeItem('adminUser');
      toast.success('Logged out successfully');
      navigate('/admin/login');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };
  
  if (loading || !adminUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-medical-600"></div>
      </div>
    );
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
              className="w-full justify-start text-white hover:bg-gray-700 gap-2" 
              onClick={() => navigate('/admin/live-alerts')}
            >
              <BellRing size={18} />
              Live Alerts
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-gray-700 gap-2" 
              onClick={() => navigate('/admin/mbbs-states')}
            >
              <Layout size={18} />
              MBBS States
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-gray-700 gap-2" 
              onClick={() => navigate('/admin/videos')}
            >
              <Video size={18} />
              Videos
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-gray-700 gap-2" 
              onClick={() => navigate('/admin/contacts')}
            >
              <Phone size={18} />
              Contact Info
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
