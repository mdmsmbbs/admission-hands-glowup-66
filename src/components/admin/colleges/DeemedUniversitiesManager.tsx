
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useDeemedUniversities } from '@/hooks/useCollegesData';
import { toast } from 'sonner';
import { Pencil, Trash2, Check, X, Loader2, ImagePlus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import type { DeemedUniversity } from '@/types/colleges';

const DeemedUniversitiesManager = () => {
  const { universities, loading, error } = useDeemedUniversities();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState<DeemedUniversity | null>(null);
  const [newUniversity, setNewUniversity] = useState<Partial<DeemedUniversity>>({
    name: '',
    location: '',
    fees_range: 'Starts From ₹',
    seats: 0,
    ranking: 'Top ',
    image_url: ''
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

  const handleAddUniversity = async () => {
    if (!newUniversity.name || !newUniversity.location || !newUniversity.fees_range) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setIsSaving(true);
      
      let imageUrl = newUniversity.image_url || '';
      
      if (imageFile) {
        // Upload image file if one was selected
        const fileName = `${Date.now()}-${imageFile.name}`;
        const { error: uploadError, data } = await supabase.storage
          .from('universities')
          .upload(fileName, imageFile);
          
        if (uploadError) {
          throw uploadError;
        }
        
        const { data: publicUrl } = supabase.storage
          .from('universities')
          .getPublicUrl(fileName);
          
        imageUrl = publicUrl.publicUrl;
      }

      const { error } = await supabase
        .from('deemed_universities')
        .insert({
          name: newUniversity.name,
          location: newUniversity.location,
          fees_range: newUniversity.fees_range,
          seats: newUniversity.seats || 0,
          ranking: newUniversity.ranking || 'Top 50',
          image_url: imageUrl
        });

      if (error) throw error;
      
      toast.success("University added successfully");
      setIsAddDialogOpen(false);
      // Reset form
      setNewUniversity({
        name: '',
        location: '',
        fees_range: 'Starts From ₹',
        seats: 0,
        ranking: 'Top ',
        image_url: ''
      });
      setImageFile(null);
      setPreviewUrl(null);
      
      // Refresh data - We would typically use realtime or query invalidation here
      window.location.reload();
      
    } catch (error) {
      console.error('Error adding university:', error);
      toast.error("Failed to add university. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditUniversity = async () => {
    if (!selectedUniversity) return;
    
    if (!selectedUniversity.name || !selectedUniversity.location || !selectedUniversity.fees_range) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setIsSaving(true);
      
      let imageUrl = selectedUniversity.image_url;
      
      if (imageFile) {
        // Upload new image file if one was selected
        const fileName = `${Date.now()}-${imageFile.name}`;
        const { error: uploadError, data } = await supabase.storage
          .from('universities')
          .upload(fileName, imageFile);
          
        if (uploadError) {
          throw uploadError;
        }
        
        const { data: publicUrl } = supabase.storage
          .from('universities')
          .getPublicUrl(fileName);
          
        imageUrl = publicUrl.publicUrl;
      }

      const { error } = await supabase
        .from('deemed_universities')
        .update({
          name: selectedUniversity.name,
          location: selectedUniversity.location,
          fees_range: selectedUniversity.fees_range,
          seats: selectedUniversity.seats,
          ranking: selectedUniversity.ranking,
          image_url: imageUrl,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedUniversity.id);

      if (error) throw error;
      
      toast.success("University updated successfully");
      setIsEditDialogOpen(false);
      setSelectedUniversity(null);
      setImageFile(null);
      setPreviewUrl(null);
      
      // Refresh data - We would typically use realtime or query invalidation here
      window.location.reload();
      
    } catch (error) {
      console.error('Error updating university:', error);
      toast.error("Failed to update university. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteUniversity = async () => {
    if (!selectedUniversity) return;

    try {
      setIsDeleting(true);
      
      const { error } = await supabase
        .from('deemed_universities')
        .delete()
        .eq('id', selectedUniversity.id);

      if (error) throw error;
      
      toast.success("University deleted successfully");
      setIsDeleteDialogOpen(false);
      setSelectedUniversity(null);
      
      // Refresh data - We would typically use realtime or query invalidation here
      window.location.reload();
      
    } catch (error) {
      console.error('Error deleting university:', error);
      toast.error("Failed to delete university. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const rankingOptions = ['Top 5', 'Top 10', 'Top 15', 'Top 20', 'Top 25', 'Top 30', 'Top 35', 'Top 40', 'Top 50'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Deemed Universities</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add New University</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Deemed University</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  University Name
                </Label>
                <Input
                  id="name"
                  placeholder="University name"
                  className="col-span-3"
                  value={newUniversity.name}
                  onChange={(e) => setNewUniversity({...newUniversity, name: e.target.value})}
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
                  value={newUniversity.location}
                  onChange={(e) => setNewUniversity({...newUniversity, location: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fees" className="text-right">
                  Fees Range
                </Label>
                <Input
                  id="fees"
                  placeholder="Starts From ₹15L per year"
                  className="col-span-3"
                  value={newUniversity.fees_range}
                  onChange={(e) => setNewUniversity({...newUniversity, fees_range: e.target.value})}
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
                  value={newUniversity.seats?.toString() || "0"}
                  onChange={(e) => setNewUniversity({...newUniversity, seats: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="ranking" className="text-right">
                  Ranking
                </Label>
                <select
                  id="ranking"
                  className="col-span-3 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-medical-500"
                  value={newUniversity.ranking}
                  onChange={(e) => setNewUniversity({...newUniversity, ranking: e.target.value})}
                >
                  {rankingOptions.map(rank => (
                    <option key={rank} value={rank}>{rank}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="image"
                  placeholder="Image URL or upload"
                  className="col-span-3"
                  value={newUniversity.image_url || ''}
                  onChange={(e) => setNewUniversity({...newUniversity, image_url: e.target.value})}
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
              <Button onClick={handleAddUniversity} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving
                  </>
                ) : 'Save University'}
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
          Failed to load universities. Please refresh the page.
        </div>
      ) : (
        <div className="border rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  University
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
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ranking
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {universities.map((university) => (
                <tr key={university.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={university.image_url} alt={university.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{university.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {university.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {university.seats}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-emerald-600">{university.fees_range}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="outline">{university.ranking}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        setSelectedUniversity(university);
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
                        setSelectedUniversity(university);
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
            <DialogTitle>Edit University</DialogTitle>
          </DialogHeader>
          {selectedUniversity && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  University Name
                </Label>
                <Input
                  id="edit-name"
                  value={selectedUniversity.name}
                  onChange={(e) => setSelectedUniversity({...selectedUniversity, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-location" className="text-right">
                  Location
                </Label>
                <Input
                  id="edit-location"
                  value={selectedUniversity.location}
                  onChange={(e) => setSelectedUniversity({...selectedUniversity, location: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-fees" className="text-right">
                  Fees
                </Label>
                <Input
                  id="edit-fees"
                  value={selectedUniversity.fees_range}
                  onChange={(e) => setSelectedUniversity({...selectedUniversity, fees_range: e.target.value})}
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
                  value={selectedUniversity.seats}
                  onChange={(e) => setSelectedUniversity({...selectedUniversity, seats: parseInt(e.target.value) || 0})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-ranking" className="text-right">
                  Ranking
                </Label>
                <select
                  id="edit-ranking"
                  className="col-span-3 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-medical-500"
                  value={selectedUniversity.ranking}
                  onChange={(e) => setSelectedUniversity({...selectedUniversity, ranking: e.target.value})}
                >
                  {rankingOptions.map(rank => (
                    <option key={rank} value={rank}>{rank}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image" className="text-right">
                  Current Image
                </Label>
                <div className="col-span-3">
                  <img 
                    src={selectedUniversity.image_url} 
                    alt={selectedUniversity.name}
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
                  value={selectedUniversity.image_url}
                  onChange={(e) => setSelectedUniversity({...selectedUniversity, image_url: e.target.value})}
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
            <Button onClick={handleEditUniversity} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving
                </>
              ) : 'Update University'}
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
            <p>Are you sure you want to delete {selectedUniversity?.name}? This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteUniversity} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting
                </>
              ) : 'Delete University'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeemedUniversitiesManager;
