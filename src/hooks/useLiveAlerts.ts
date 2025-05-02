
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Alert {
  id: number;
  title: string;
  link: string;
  image_url?: string;
  is_active: boolean;
  order_index: number;
}

interface AlertFormData {
  id?: number;
  title: string;
  link: string;
  image_url: string;
  is_active: boolean;
  order_index: number;
}

export const useLiveAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [newAlert, setNewAlert] = useState<AlertFormData>({
    title: '',
    link: '',
    image_url: '',
    is_active: true,
    order_index: 0
  });
  const [editingAlert, setEditingAlert] = useState<AlertFormData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchAlerts = async () => {
    setIsLoading(true);
    console.log('Fetching alerts from live_alerts table...');
    
    try {
      const { data, error } = await supabase
        .from('live_alerts')
        .select('*')
        .order('order_index', { ascending: true });

      setIsLoading(false);
      
      if (error) {
        console.error('Error fetching alerts:', error);
        setError('Failed to fetch alerts');
        toast.error('Failed to fetch alerts');
        return;
      }

      if (data) {
        console.log('Alerts fetched successfully:', data);
        setAlerts(data);
        
        // Update the order index for new alerts
        if (data.length > 0) {
          const maxOrderIndex = Math.max(...data.map(alert => alert.order_index));
          setNewAlert(prev => ({
            ...prev,
            order_index: maxOrderIndex + 1
          }));
        }
      }
    } catch (err) {
      console.error("Exception in fetchAlerts:", err);
      setIsLoading(false);
      setError('An unexpected error occurred');
      toast.error('An unexpected error occurred');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!newAlert.title || !newAlert.link) {
      setError('Title and Link are required fields');
      toast.error('Title and Link are required fields');
      setIsLoading(false);
      return;
    }
    
    const { data, error } = await supabase
      .from('live_alerts')
      .insert(newAlert)
      .select()
      .single();

    setIsLoading(false);
      
    if (error) {
      setError('Failed to create alert');
      toast.error('Failed to create alert');
      return;
    }

    toast.success('Alert created successfully');
    setAlerts([...alerts, data]);
    resetForm();
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingAlert) return;
    
    if (!editingAlert.title || !editingAlert.link) {
      setError('Title and Link are required fields');
      toast.error('Title and Link are required fields');
      return;
    }
    
    setIsLoading(true);
    const { error } = await supabase
      .from('live_alerts')
      .update({
        title: editingAlert.title,
        link: editingAlert.link,
        image_url: editingAlert.image_url,
        is_active: editingAlert.is_active,
        order_index: editingAlert.order_index
      })
      .eq('id', editingAlert.id);

    setIsLoading(false);
      
    if (error) {
      setError('Failed to update alert');
      toast.error('Failed to update alert');
      return;
    }

    toast.success('Alert updated successfully');
    fetchAlerts();
    cancelEdit();
  };

  const toggleActive = async (id: number, currentStatus: boolean) => {
    setIsLoading(true);
    const { error } = await supabase
      .from('live_alerts')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    setIsLoading(false);
      
    if (error) {
      setError('Failed to update alert status');
      toast.error('Failed to update alert status');
      return;
    }

    toast.success('Alert status updated');
    fetchAlerts();
  };

  const deleteAlert = async (id: number) => {
    if (!confirm('Are you sure you want to delete this alert?')) {
      return;
    }
    
    setIsLoading(true);
    const { error } = await supabase
      .from('live_alerts')
      .delete()
      .eq('id', id);

    setIsLoading(false);
      
    if (error) {
      setError('Failed to delete alert');
      toast.error('Failed to delete alert');
      return;
    }

    toast.success('Alert deleted successfully');
    fetchAlerts();
  };

  const resetForm = () => {
    setNewAlert({
      title: '',
      link: '',
      image_url: '',
      is_active: true,
      order_index: alerts.length
    });
  };

  const startEdit = (alert: Alert) => {
    setEditingAlert({
      id: alert.id,
      title: alert.title,
      link: alert.link,
      image_url: alert.image_url || '',
      is_active: alert.is_active,
      order_index: alert.order_index
    });
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setEditingAlert(null);
    setIsEditing(false);
  };

  const handleFormChange = (field: string, value: string | number | boolean) => {
    setNewAlert(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditFormChange = (field: string, value: string | number | boolean) => {
    if (editingAlert) {
      setEditingAlert(prev => ({
        ...prev!,
        [field]: value
      }));
    }
  };

  return {
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
  };
};
