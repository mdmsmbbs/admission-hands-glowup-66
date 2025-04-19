
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Video {
  id: number;
  title: string;
  videos_id: string;
  description?: string;
  featured?: boolean;
}

interface VideoFormProps {
  video: {
    title: string;
    videos_id: string;
    description: string;
    featured: boolean;
  };
  isEditing: number | null;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: string, value: string | boolean) => void;
  onCancel: () => void;
}

const VideoForm = ({ video, isEditing, isLoading, onSubmit, onChange, onCancel }: VideoFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 pt-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={video.title}
          onChange={(e) => onChange('title', e.target.value)}
          placeholder="Video Title"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="videos_id">YouTube Video ID</Label>
        <Input
          id="videos_id"
          value={video.videos_id}
          onChange={(e) => onChange('videos_id', e.target.value)}
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
          value={video.description}
          onChange={(e) => onChange('description', e.target.value)}
          placeholder="Video description (optional)"
          rows={3}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="featured"
          checked={video.featured}
          onCheckedChange={(checked) => 
            onChange('featured', checked === true)
          }
        />
        <Label htmlFor="featured" className="cursor-pointer">Featured Video</Label>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : isEditing ? 'Update Video' : 'Add Video'}
        </Button>
      </div>
    </form>
  );
};

export default VideoForm;
