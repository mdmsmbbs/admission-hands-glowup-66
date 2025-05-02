import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useRecommendedColleges } from '@/hooks/useCollegesData';
import { toast } from 'sonner';
import { Pencil, Trash2, Check, X, Loader2, ImagePlus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import type { RecommendedCollege } from '@/types/colleges';

const RecommendedCollegesManager = () => {
  const { colleges, loading, error } = useRecommendedColleges();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState<RecommendedCollege | null>(null);
  const [newCollege, setNewCollege] = useState<Partial<RecommendedCollege>>({
    name: '',
    location: '',
    fees: 'Starts From ₹',
    seats: 0,
    image: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCollege = async () => {
    if (!newCollege.name || !newCollege.location || !newCollege.fees) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setIsSaving(true);
      
      let imageUrl = newCollege.image || '';
      
      if (imageFile) {
        // Upload image file if one was selected
        const fileName = `${Date.now()}-${imageFile.name}`;
        const { error: uploadError, data } = await supabase.storage
          .from('colleges')
          .upload(fileName, imageFile);
          
        if (uploadError) {
          throw uploadError;
        }
        
        const { data: publicUrl } = supabase.storage
          .from('colleges')
          .getPublicUrl(fileName);
          
        imageUrl = publicUrl.publicUrl;
      }

      const { error } = await supabase
        .from('recommended_colleges')
        .insert({
          name: newCollege.name,
          location: newCollege.location,
          fees: newCollege.fees,
          seats: newCollege.seats || 0,
          image: imageUrl
        } as any);

      if (error) throw error;
      
      toast.success("College added successfully");
      setIsAddDialogOpen(false);
      // Reset form
      setNewCollege({
        name: '',
        location: '',
        fees: 'Starts From ₹',
        seats: 0,
        image: ''
      });
      setImageFile(null);
      setPreviewUrl(null);
      
      // Refresh data - We would typically use realtime or query invalidation here
      window.location.reload();
      
    } catch (error) {
      console.error('Error adding college:', error);
      toast.error("Failed to add college. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditCollege = async () => {
    if (!selectedCollege) return;
    
    if (!selectedCollege.name || !selectedCollege.location || !selectedCollege.fees) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setIsSaving(true);
      
      let imageUrl = selectedCollege.image;
      
      if (imageFile) {
        // Upload new image file if one was selected
        const fileName = `${Date.now()}-${imageFile.name}`;
        const { error: uploadError, data } = await supabase.storage
          .from('colleges')
          .upload(fileName, imageFile);
          
        if (uploadError) {
          throw uploadError;
        }
        
        const { data: publicUrl } = supabase.storage
          .from('colleges')
          .getPublicUrl(fileName);
          
        imageUrl = publicUrl.publicUrl;
      }

      const { error } = await supabase
        .from('recommended_colleges')
        .update({
          name: selectedCollege.name,
          location: selectedCollege.location,
          fees: selectedCollege.fees,
          seats: selectedCollege.seats,
          image: imageUrl,
          updated_at: new Date().toISOString()
        } as any)
        .eq('id', selectedCollege.id);

      if (error) throw error;
      
      toast.success("College updated successfully");
      setIsEditDialogOpen(false);
      setSelectedCollege(null);
      setImageFile(null);
      setPreviewUrl(null);
      
      // Refresh data - We would typically use realtime or query invalidation here
      window.location.reload();
      
    } catch (error) {
      console.error('Error updating college:', error);
      toast.error("Failed to update college. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteCollege = async () => {
    if (!selectedCollege) return;

    try {
      setIsDeleting(true);
      
      const { error } = await supabase
        .from('recommended_colleges')
        .delete()
        .eq('id', selectedCollege.id);

      if (error) throw error;
      
      toast.success("College deleted successfully");
      setIsDeleteDialogOpen(false);
      setSelectedCollege(null);
      
      // Refresh data - We would typically use realtime or query invalidation here
      window.location.reload();
      
    } catch (error) {
      console.error('Error deleting college:', error);
      toast.error("Failed to delete college. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recommended Colleges</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add New College</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Recommended College</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  College Name
                </Label>
                <Input
                  id="name"
                  placeholder="College name"
                  className="col-span-3"
                  value={newCollege.name}
                  onChange={(e) => setNewCollege({...newCollege, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="State"
                  className="col-span-3"
                  value={newCollege.location}
                  onChange={(e) => setNewCollege({...newCollege, location: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fees" className="text-right">
                  Fees
                </Label>
                <Input
                  id="fees"
                  placeholder="Starts From ₹15L per year"
                  className="col-span-3"
                  value={newCollege.fees}
                  onChange={(e) => setNewCollege({...newCollege, fees: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="seats" className="text-right">
                  Seats
                </Label>
                <Input
                  id="seats"
                  type="number"
                  placeholder="100"
                  className="col-span-3"
                  value={newCollege.seats?.toString() || "0"}
                  onChange={(e) => setNewCollege({...newCollege, seats: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="image"
                  placeholder="Image URL or upload"
                  className="col-span-3"
                  value={newCollege.image || ''}
                  onChange={(e) => setNewCollege({...newCollege, image: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image-upload" className="text-right">
                  Or Upload
                </Label>
                <div className="col-span-3">
                  <Label 
                    htmlFor="image-file" 
                    className="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    <ImagePlus className="h-4 w-4" />
                    <span>Choose Image</span>
                  </Label>
                  <Input
                    id="image-file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  {previewUrl && (
                    <div className="mt-2">
                      <img src={previewUrl} alt="Preview" className="w-32 h-20 object-cover rounded-md" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddCollege} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving
                  </>
                ) : 'Save College'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 text-medical-600 animate-spin" />
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-md">
          Failed to load colleges. Please refresh the page.
        </div>
      ) : (
        <div className="border rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  College
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seats
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fees
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {colleges.map((college) => (
                <tr key={college.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={college.image} alt={college.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{college.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {college.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {college.seats}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-emerald-600">{college.fees}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        setSelectedCollege(college);
                        setPreviewUrl(null);
                        setImageFile(null);
                        setIsEditDialogOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        setSelectedCollege(college);
                        setIsDeleteDialogOpen(true);
                      }}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit College</DialogTitle>
          </DialogHeader>
          {selectedCollege && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  College Name
                </Label>
                <Input
                  id="edit-name"
                  value={selectedCollege.name}
                  onChange={(e) => setSelectedCollege({...selectedCollege, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-location" className="text-right">
                  Location
                </Label>
                <Input
                  id="edit-location"
                  value={selectedCollege.location}
                  onChange={(e) => setSelectedCollege({...selectedCollege, location: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-fees" className="text-right">
                  Fees
                </Label>
                <Input
                  id="edit-fees"
                  value={selectedCollege.fees}
                  onChange={(e) => setSelectedCollege({...selectedCollege, fees: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-seats" className="text-right">
                  Seats
                </Label>
                <Input
                  id="edit-seats"
                  type="number"
                  value={selectedCollege.seats}
                  onChange={(e) => setSelectedCollege({...selectedCollege, seats: parseInt(e.target.value) || 0})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image" className="text-right">
                  Current Image
                </Label>
                <div className="col-span-3">
                  <img 
                    src={selectedCollege.image} 
                    alt={selectedCollege.name}
                    className="h-16 w-24 object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image-url" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="edit-image-url"
                  value={selectedCollege.image}
                  onChange={(e) => setSelectedCollege({...selectedCollege, image: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image-upload" className="text-right">
                  Or Upload New
                </Label>
                <div className="col-span-3">
                  <Label 
                    htmlFor="edit-image-file" 
                    className="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    <ImagePlus className="h-4 w-4" />
                    <span>Choose Image</span>
                  </Label>
                  <Input
                    id="edit-image-file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  {previewUrl && (
                    <div className="mt-2">
                      <img src={previewUrl} alt="Preview" className="w-32 h-20 object-cover rounded-md" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditCollege} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving
                </>
              ) : 'Update College'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete {selectedCollege?.name}? This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteCollege} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting
                </>
              ) : 'Delete College'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecommendedCollegesManager;
