
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import VideoForm from '@/components/admin/videos/VideoForm';
import VideoList from '@/components/admin/videos/VideoList';
import { useVideoManager } from '@/hooks/useVideoManager';

const VideoManager = () => {
  const {
    videos,
    newVideo,
    isEditing,
    isLoading,
    error,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleFormChange,
    resetForm,
  } = useVideoManager();

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
