
import { useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import AlertForm from '@/components/admin/alerts/AlertForm';
import AlertList from '@/components/admin/alerts/AlertList';
import { useLiveAlerts } from '@/hooks/useLiveAlerts';

const LiveAlertsManager = () => {
  const {
    alerts,
    newAlert,
    error,
    handleSubmit,
    toggleActive,
    deleteAlert,
    handleFormChange,
    resetForm,
    fetchAlerts
  } = useLiveAlerts();

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Live Alerts Manager</h1>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Alert</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Alert</DialogTitle>
            </DialogHeader>
            <AlertForm
              alert={newAlert}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
            />
          </DialogContent>
        </Dialog>

        <AlertList 
          alerts={alerts}
          onToggleActive={toggleActive}
          onDelete={deleteAlert}
        />
      </div>
    </AdminLayout>
  );
};

export default LiveAlertsManager;
