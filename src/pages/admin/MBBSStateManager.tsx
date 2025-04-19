
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tables, TablesInsert } from '@/integrations/supabase/types';

const MBBSStateManager = () => {
  const [states, setStates] = useState<Tables<'mbbs_states'>[]>([]);
  const [newState, setNewState] = useState<TablesInsert<'mbbs_states'>>({
    name: '',
    slug: '',
    image_url: '',
    colleges_count: 0,
    content: '',
    is_active: true
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    const { data, error } = await supabase
      .from('mbbs_states')
      .select('*')
      .order('name');

    if (error) {
      setError('Failed to fetch states');
      return;
    }

    if (data) {
      setStates(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!newState.name || !newState.slug) {
      setError('Name and Slug are required fields');
      return;
    }
    
    const { data, error } = await supabase
      .from('mbbs_states')
      .insert(newState)
      .select()
      .single();

    if (error) {
      setError('Failed to create state');
      return;
    }

    setStates([...states, data]);
    setNewState({
      name: '',
      slug: '',
      image_url: '',
      colleges_count: 0,
      content: '',
      is_active: true
    });
  };

  const updateStateStatus = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from('mbbs_states')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      setError('Failed to update state status');
      return;
    }

    fetchStates();
  };

  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">MBBS States Manager</h1>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New State</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New State</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">State Name</Label>
                <Input
                  id="name"
                  value={newState.name}
                  onChange={(e) => setNewState({ 
                    ...newState, 
                    name: e.target.value,
                    slug: e.target.value.toLowerCase().replace(/\s+/g, '-')
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={newState.slug}
                  onChange={(e) => setNewState({ ...newState, slug: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={newState.image_url}
                  onChange={(e) => setNewState({ ...newState, image_url: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="colleges_count">Number of Colleges</Label>
                <Input
                  id="colleges_count"
                  type="number"
                  value={newState.colleges_count}
                  onChange={(e) => setNewState({ ...newState, colleges_count: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={newState.content}
                  onChange={(e) => setNewState({ ...newState, content: e.target.value })}
                />
              </div>
              <Button type="submit">Create State</Button>
            </form>
          </DialogContent>
        </Dialog>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Colleges</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {states.map((state) => (
              <TableRow key={state.id}>
                <TableCell>{state.name}</TableCell>
                <TableCell>{state.slug}</TableCell>
                <TableCell>{state.colleges_count}</TableCell>
                <TableCell>
                  <Button
                    variant={state.is_active ? "default" : "secondary"}
                    onClick={() => updateStateStatus(state.id, state.is_active)}
                  >
                    {state.is_active ? 'Active' : 'Inactive'}
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

export default MBBSStateManager;
