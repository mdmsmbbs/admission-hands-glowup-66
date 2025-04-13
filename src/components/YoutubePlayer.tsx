
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface YoutubePlayerProps {
  videoId: string;
  title?: string;
  fallbackVideoId?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ 
  videoId, 
  title = 'YouTube Video',
  fallbackVideoId = 'dQw4w9WgXcQ', // Default fallback video
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false
}) => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    console.log('YoutubePlayer received videoId:', videoId);
  }, [videoId]);
  
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
        return videoIdOrUrl.split('embed/')[1].split('?')[0].split('/')[0];
      } else if (videoIdOrUrl.includes('youtu.be/')) {
        return videoIdOrUrl.split('youtu.be/')[1].split('?')[0].split('/')[0];
      }
    } catch (error) {
      console.error('Error parsing YouTube URL:', error);
    }
    
    // Return the original if we couldn't parse it
    return videoIdOrUrl;
  };
  
  // Use the provided videoId or fallback if it's empty
  const finalVideoId = videoId ? extractVideoId(videoId) : extractVideoId(fallbackVideoId);
  
  console.log('YoutubePlayer rendering with:', { 
    originalVideoId: videoId, 
    fallbackVideoId,
    finalVideoId,
    usingFallback: !videoId 
  });
  
  if (!finalVideoId) {
    console.error('No valid YouTube video ID found:', videoId);
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
        <div className="text-gray-500 text-center px-4">
          <p>Video unavailable</p>
          <p className="text-xs mt-2">Invalid YouTube URL or ID</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full flex flex-col">
      <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <iframe
          src={`https://www.youtube.com/embed/${finalVideoId}`}
          title={title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Navigation buttons */}
      {(onNext || onPrevious) && (
        <div className="flex justify-between mt-4 w-full">
          <Button 
            onClick={onPrevious} 
            disabled={!hasPrevious}
            variant="outline" 
            size="sm"
            className={!hasPrevious ? "opacity-50 cursor-not-allowed" : ""}
          >
            <ChevronLeft className="mr-1" size={18} />
            Previous
          </Button>
          <Button 
            onClick={onNext} 
            disabled={!hasNext}
            variant="outline" 
            size="sm"
            className={!hasNext ? "opacity-50 cursor-not-allowed" : ""}
          >
            Next
            <ChevronRight className="ml-1" size={18} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default YoutubePlayer;
