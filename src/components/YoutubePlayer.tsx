
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface YoutubePlayerProps {
  videoId: string;
  title?: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId, title = 'YouTube Video' }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
