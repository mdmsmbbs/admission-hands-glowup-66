
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface YoutubePlayerProps {
  videoId: string;
  title?: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId, title = 'YouTube Video' }) => {
  const isMobile = useIsMobile();
  
  // Extract the video ID if a full URL was provided
  const extractVideoId = (videoIdOrUrl: string): string => {
    // If it's already just an ID (no slashes or dots), return it
    if (!videoIdOrUrl.includes('/') && !videoIdOrUrl.includes('.')) {
      return videoIdOrUrl;
    }
    
    try {
      // Handle YouTube URLs in various formats
      if (videoIdOrUrl.includes('youtube.com/watch?v=')) {
        const url = new URL(videoIdOrUrl);
        return url.searchParams.get('v') || '';
      } else if (videoIdOrUrl.includes('youtube.com/embed/')) {
        return videoIdOrUrl.split('embed/')[1].split('?')[0];
      } else if (videoIdOrUrl.includes('youtu.be/')) {
        return videoIdOrUrl.split('youtu.be/')[1].split('?')[0];
      }
    } catch (error) {
      console.error('Error parsing YouTube URL:', error);
    }
    
    // Return the original if we couldn't parse it
    return videoIdOrUrl;
  };
  
  const embedId = extractVideoId(videoId);
  
  return (
    <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
