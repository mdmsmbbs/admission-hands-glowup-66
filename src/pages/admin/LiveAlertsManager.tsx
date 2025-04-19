
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';

interface Alert {
  id: number;
  title: string;
  link: string;
  image_url?: string;
  is_active: boolean;
  order_index: number;
}

const LiveAlertsManager = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [newAlert, setNewAlert] = useState({
    title: '',
    link: '',
    image_url: '',
    is_active: true,
    order_index: 0
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    const { data, error } = await supabase
      .from('live_alerts')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      setError('Failed to fetch alerts');
      return;
    }

    if (data) {
      setAlerts(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!newAlert.title || !newAlert.link) {
      setError('Title and Link are required fields');
      return;
    }
    
    const { data, error } = await supabase
      .from('live_alerts')
      .insert(newAlert)
      .select()
      .single();

    if (error) {
      setError('Failed to create alert');
      return;
    }

    setAlerts([...alerts, data]);
    setNewAlert({
      title: '',
      link: '',
      image_url: '',
      is_active: true,
      order_index: alerts.length
    });
  };

  const toggleActive = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from('live_alerts')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      setError('Failed to update alert status');
      return;
    }

    fetchAlerts();
  };

  const deleteAlert = async (id: number) => {
    const { error } = await supabase
      .from('live_alerts')
      .delete()
      .eq('id', id);

    if (error) {
      setError('Failed to delete alert');
      return;
    }

    fetchAlerts();
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newAlert.title}
                  onChange={(e) => setNewAlert({ ...newAlert, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="link">Link</Label>
                <Input
                  id="link"
                  value={newAlert.link}
                  onChange={(e) => setNewAlert({ ...newAlert, link: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={newAlert.image_url}
                  onChange={(e) => setNewAlert({ ...newAlert, image_url: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="order">Order Index</Label>
                <Input
                  id="order"
                  type="number"
                  value={newAlert.order_index}
                  onChange={(e) => setNewAlert({ ...newAlert, order_index: parseInt(e.target.value) })}
                  required
                />
              </div>
              <Button type="submit">Create Alert</Button>
            </form>
          </DialogContent>
        </Dialog>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>{alert.order_index}</TableCell>
                <TableCell>{alert.title}</TableCell>
                <TableCell>{alert.link}</TableCell>
                <TableCell>
                  <Button
                    variant={alert.is_active ? "default" : "secondary"}
                    onClick={() => toggleActive(alert.id, alert.is_active)}
                  >
                    {alert.is_active ? 'Active' : 'Inactive'}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    onClick={() => deleteAlert(alert.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default LiveAlertsManager;
