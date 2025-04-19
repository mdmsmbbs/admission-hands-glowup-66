
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
  const [error, setError] = useState('');

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
    
    if (!newAlert.title || !newAlert.link) {
      setError('Title and Link are required fields');
      toast.error('Title and Link are required fields');
      return;
    }
    
    const { data, error } = await supabase
      .from('live_alerts')
      .insert(newAlert)
      .select()
      .single();

    if (error) {
      setError('Failed to create alert');
      toast.error('Failed to create alert');
      return;
    }

    toast.success('Alert created successfully');
    setAlerts([...alerts, data]);
    resetForm();
  };

  const toggleActive = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from('live_alerts')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      setError('Failed to update alert status');
      toast.error('Failed to update alert status');
      return;
    }

    toast.success('Alert status updated');
    fetchAlerts();
  };

  const deleteAlert = async (id: number) => {
    const { error } = await supabase
      .from('live_alerts')
      .delete()
      .eq('id', id);

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

  const handleFormChange = (field: string, value: string | number | boolean) => {
    setNewAlert(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return {
    alerts,
    newAlert,
    error,
    handleSubmit,
    toggleActive,
    deleteAlert,
    handleFormChange,
    resetForm,
    fetchAlerts
  };
};
