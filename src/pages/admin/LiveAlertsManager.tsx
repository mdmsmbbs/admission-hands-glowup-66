
import { useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import AlertForm from '@/components/admin/alerts/AlertForm';
import AlertList from '@/components/admin/alerts/AlertList';
import { useLiveAlerts } from '@/hooks/useLiveAlerts';
import { Loader2 } from 'lucide-react';

const LiveAlertsManager = () => {
  const {
    alerts,
    newAlert,
    editingAlert,
    isEditing,
    error,
    isLoading,
    handleSubmit,
    handleUpdate,
    toggleActive,
    deleteAlert,
    handleFormChange,
    handleEditFormChange,
    resetForm,
    fetchAlerts,
    startEdit,
    cancelEdit
  } = useLiveAlerts();

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Live Alerts Manager</h1>
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
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isEditing && editingAlert && (
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h2 className="text-lg font-semibold mb-4">Edit Alert</h2>
            <AlertForm
              alert={editingAlert}
              onSubmit={handleUpdate}
              onChange={handleEditFormChange}
              isEditing={true}
            />
            <Button 
              variant="outline" 
              onClick={cancelEdit}
              className="mt-2"
            >
              Cancel
            </Button>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-medical-600" />
          </div>
        ) : alerts.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No alerts found. Create one to get started.</p>
          </div>
        ) : (
          <AlertList 
            alerts={alerts}
            onToggleActive={toggleActive}
            onEdit={startEdit}
            onDelete={deleteAlert}
          />
        )}
      </div>
    </AdminLayout>
  );
};

export default LiveAlertsManager;
