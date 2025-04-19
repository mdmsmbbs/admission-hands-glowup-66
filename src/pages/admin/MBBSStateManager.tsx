
import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import CrudInterface from '@/components/admin/CrudInterface';
import { toast } from 'sonner';

const MBBSStateManager = () => {
  const [states, setStates] = useState<any[]>([]);
  const columns = ['name', 'colleges_count', 'is_active', 'slug', 'image_url'];

  const fetchStates = async () => {
    try {
      const { data, error } = await supabase
        .from('mbbs_states')
        .select('*')
        .order('name');

      if (error) throw error;
      setStates(data);
    } catch (error) {
      console.error('Error fetching states:', error);
      toast.error('Failed to fetch states');
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleEdit = (record: any) => {
    // Implement edit functionality
    toast.info('Edit functionality to be implemented');
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from('mbbs_states')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('State deleted successfully');
      fetchStates();
    } catch (error) {
      console.error('Error deleting state:', error);
      toast.error('Failed to delete state');
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">MBBS States Manager</h1>
        <CrudInterface
          data={states}
          tableName="mbbs_states"
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
          refreshData={fetchStates}
        />
      </div>
    </AdminLayout>
  );
};

export default MBBSStateManager;
