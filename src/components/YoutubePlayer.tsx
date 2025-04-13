
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Settings, Maximize, Volume2 } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

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
  const [selectedQuality, setSelectedQuality] = useState<string>('auto');
  const [isHovering, setIsHovering] = useState(false);
  
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
  
  // Construct YouTube embed URL with quality parameter
  const getYoutubeEmbedUrl = () => {
    let url = `https://www.youtube.com/embed/${finalVideoId}`;
    
    // Adding parameters
    const params = new URLSearchParams({
      rel: '0', // Don't show related videos
      modestbranding: '1', // Minimal branding
      playsinline: '1', // Plays inline on mobile
    });
    
    // Add quality parameter if not auto
    if (selectedQuality !== 'auto') {
      params.append('vq', selectedQuality);
    }
    
    return `${url}?${params.toString()}`;
  };
  
  console.log('YoutubePlayer rendering with:', { 
    originalVideoId: videoId, 
    fallbackVideoId,
    finalVideoId,
    usingFallback: !videoId,
    selectedQuality
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
      {/* Video player with modern design */}
      <div 
        className="w-full relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 p-1"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Video frame with gradient border effect */}
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <iframe
            src={getYoutubeEmbedUrl()}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Overlay controls that appear on hover */}
          <div 
            className={cn(
              "absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
              isHovering || isMobile ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Volume2 size={18} className="text-white" />
                <div className="text-white text-sm font-medium">{title}</div>
              </div>
              <div className="flex items-center gap-2">
                <Select
                  value={selectedQuality}
                  onValueChange={(value) => setSelectedQuality(value)}
                >
                  <SelectTrigger className="w-[110px] h-8 bg-black/40 border-0 text-white">
                    <SelectValue placeholder="Quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700">
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="hd2160">4K (2160p)</SelectItem>
                    <SelectItem value="hd1440">1440p</SelectItem>
                    <SelectItem value="hd1080">1080p</SelectItem>
                    <SelectItem value="hd720">720p</SelectItem>
                    <SelectItem value="large">480p</SelectItem>
                    <SelectItem value="medium">360p</SelectItem>
                    <SelectItem value="small">240p</SelectItem>
                    <SelectItem value="tiny">144p</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/20">
                  <Settings size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/20">
                  <Maximize size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons with improved styling */}
      {(onNext || onPrevious) && (
        <div className="flex justify-between mt-4 w-full">
          <Button 
            onClick={onPrevious} 
            disabled={!hasPrevious}
            variant="outline" 
            size="sm"
            className={cn(
              "transition-all duration-200 font-medium",
              hasPrevious ? "hover:bg-medical-50 hover:text-medical-700 hover:border-medical-300" : "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="mr-1" size={18} />
            Previous
          </Button>
          <Button 
            onClick={onNext} 
            disabled={!hasNext}
            variant="outline" 
            size="sm"
            className={cn(
              "transition-all duration-200 font-medium",
              hasNext ? "hover:bg-medical-50 hover:text-medical-700 hover:border-medical-300" : "opacity-50 cursor-not-allowed"
            )}
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
