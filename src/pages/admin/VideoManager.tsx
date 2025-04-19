
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { toast } from 'sonner';

interface Video {
  id: number;
  title: string;
  videos_id: string;
  description?: string;
  created_at: string;
  featured?: boolean;
}

const VideoManager = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [newVideo, setNewVideo] = useState({
    title: '',
    videos_id: '',
    description: '',
    featured: false
  });
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false });

    setIsLoading(false);
    if (error) {
      setError('Failed to fetch videos');
      toast.error('Failed to load videos');
      return;
    }

    if (data) {
      setVideos(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!newVideo.title || !newVideo.videos_id) {
      setError('Title and YouTube Video ID are required fields');
      toast.error('Title and YouTube Video ID are required fields');
      return;
    }
    
    setIsLoading(true);
    
    if (isEditing) {
      const { data, error } = await supabase
        .from('videos')
        .update({
          title: newVideo.title,
          videos_id: newVideo.videos_id,
          description: newVideo.description,
          featured: newVideo.featured
        })
        .eq('id', isEditing)
        .select();

      if (error) {
        setError('Failed to update video');
        toast.error('Failed to update video');
      } else {
        toast.success('Video updated successfully');
        setIsEditing(null);
      }
    } else {
      // Fixed: Instead of array syntax, use a direct object for insert
      // The id field is auto-incremented by the database, so we don't need to specify it
      const { data, error } = await supabase
        .from('videos')
        .insert({
          title: newVideo.title,
          videos_id: newVideo.videos_id,
          description: newVideo.description,
          featured: newVideo.featured
        })
        .select();

      if (error) {
        setError('Failed to create video');
        toast.error('Failed to create video');
        console.error('Supabase error:', error);
      } else {
        toast.success('Video added successfully');
      }
    }

    setIsLoading(false);
    fetchVideos();
    resetForm();
  };

  const handleEdit = (video: Video) => {
    setNewVideo({
      title: video.title,
      videos_id: video.videos_id,
      description: video.description || '',
      featured: video.featured || false
    });
    setIsEditing(video.id);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;
    
    setIsLoading(true);
    const { error } = await supabase
      .from('videos')
      .delete()
      .eq('id', id);
    
    setIsLoading(false);
    
    if (error) {
      setError('Failed to delete video');
      toast.error('Failed to delete video');
    } else {
      toast.success('Video deleted successfully');
      fetchVideos();
    }
  };

  const resetForm = () => {
    setNewVideo({
      title: '',
      videos_id: '',
      description: '',
      featured: false
    });
    setIsEditing(null);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Video Manager</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add New Video</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>{isEditing ? 'Edit Video' : 'Add New Video'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newVideo.title}
                    onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                    placeholder="Video Title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="videos_id">YouTube Video ID</Label>
                  <Input
                    id="videos_id"
                    value={newVideo.videos_id}
                    onChange={(e) => setNewVideo({ ...newVideo, videos_id: e.target.value })}
                    placeholder="e.g. dQw4w9WgXcQ"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    The ID is the part after "v=" in a YouTube URL (https://www.youtube.com/watch?v=dQw4w9WgXcQ)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newVideo.description}
                    onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                    placeholder="Video description (optional)"
                    rows={3}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="featured"
                    checked={newVideo.featured}
                    onCheckedChange={(checked) => 
                      setNewVideo({ ...newVideo, featured: checked === true })
                    }
                  />
                  <Label htmlFor="featured" className="cursor-pointer">Featured Video</Label>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Processing...' : isEditing ? 'Update Video' : 'Add Video'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {isLoading && !videos.length ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-medical-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-md shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Preview</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {videos.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                      No videos found. Add your first video!
                    </TableCell>
                  </TableRow>
                ) : (
                  videos.map((video) => (
                    <TableRow key={video.id}>
                      <TableCell>
                        <div className="w-24 h-16 relative overflow-hidden rounded-md">
                          <img 
                            src={`https://img.youtube.com/vi/${video.videos_id}/mqdefault.jpg`}
                            alt={video.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{video.title}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {video.description || "-"}
                      </TableCell>
                      <TableCell>
                        {video.featured ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Featured
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Standard
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(video)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(video.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default VideoManager;
