
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import VideoForm from '@/components/admin/videos/VideoForm';
import VideoList from '@/components/admin/videos/VideoList';
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
    
    if (!newVideo.title || !newVideo.videos_id) {
      setError('Title and YouTube Video ID are required fields');
      toast.error('Title and YouTube Video ID are required fields');
      return;
    }
    
    setIsLoading(true);
    
    if (isEditing) {
      const { error } = await supabase
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
      const { error } = await supabase
        .from('videos')
        .insert({
          title: newVideo.title,
          videos_id: newVideo.videos_id,
          description: newVideo.description,
          featured: newVideo.featured
        } as any)
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

  const handleFormChange = (field: string, value: string | boolean) => {
    setNewVideo(prev => ({
      ...prev,
      [field]: value
    }));
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
              <VideoForm
                video={newVideo}
                isEditing={isEditing}
                isLoading={isLoading}
                onSubmit={handleSubmit}
                onChange={handleFormChange}
                onCancel={resetForm}
              />
            </DialogContent>
          </Dialog>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {isLoading && !videos.length ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-medical-600"></div>
          </div>
        ) : (
          <VideoList 
            videos={videos} 
            onEdit={handleEdit}
            onDelete={handleDelete}
            isDeleting={isLoading}
          />
        )}
      </div>
    </AdminLayout>
  );
};

export default VideoManager;
