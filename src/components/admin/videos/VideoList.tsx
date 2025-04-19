
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import RecordActions from '../shared/RecordActions';

interface Video {
  id: number;
  title: string;
  videos_id: string;
  description?: string;
  created_at: string;
  featured?: boolean;
}

interface VideoListProps {
  videos: Video[];
  onEdit: (video: Video) => void;
  onDelete: (id: number) => void;
  isDeleting?: boolean;
}

const VideoList = ({ videos, onEdit, onDelete, isDeleting }: VideoListProps) => {
  return (
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
                <TableCell className="text-right">
                  <RecordActions
                    onEdit={() => onEdit(video)}
                    onDelete={() => onDelete(video.id)}
                    isDeleting={isDeleting}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default VideoList;
