
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  Maximize, 
  Volume2, 
  Volume1,
  VolumeX, 
  SkipBack, 
  SkipForward,
  Pause,
  Play,
  RefreshCw,
  RotateCw,
  Rewind,
  FastForward,
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
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

interface YoutubePlayerState {
  player: any;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
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
  const [playerState, setPlayerState] = useState<YoutubePlayerState>({
    player: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 50,
    isMuted: false,
  });
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const youtubeIframeRef = useRef<HTMLIFrameElement>(null);
  const playerInstanceRef = useRef<any>(null);
  const playbackUpdateIntervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    console.log('YoutubePlayer received videoId:', videoId);
    
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    return () => {
      // Clear interval when component unmounts
      if (playbackUpdateIntervalRef.current) {
        window.clearInterval(playbackUpdateIntervalRef.current);
      }
    };
  }, []);
  
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
      enablejsapi: '1', // Enable JS API
      origin: window.location.origin,
      widget_referrer: window.location.href,
    });
    
    // Add quality parameter if not auto
    if (selectedQuality !== 'auto') {
      params.append('vq', selectedQuality);
    }
    
    return `${url}?${params.toString()}`;
  };
  
  // Calculate timestamp format from seconds
  const formatTime = (seconds: number): string => {
    if (!seconds || isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };
  
  // Player control functions
  const togglePlay = () => {
    if (!playerInstanceRef.current) return;
    
    if (playerState.isPlaying) {
      playerInstanceRef.current.pauseVideo();
    } else {
      playerInstanceRef.current.playVideo();
    }
  };
  
  const handleVolumeChange = (value: number[]) => {
    if (!playerInstanceRef.current) return;
    
    const newVolume = value[0];
    playerInstanceRef.current.setVolume(newVolume);
    setPlayerState(prev => ({ ...prev, volume: newVolume, isMuted: newVolume === 0 }));
  };
  
  const toggleMute = () => {
    if (!playerInstanceRef.current) return;
    
    const newMuteState = !playerState.isMuted;
    if (newMuteState) {
      playerInstanceRef.current.mute();
    } else {
      playerInstanceRef.current.unMute();
      if (playerState.volume === 0) {
        playerInstanceRef.current.setVolume(50);
        setPlayerState(prev => ({ ...prev, volume: 50 }));
      }
    }
    setPlayerState(prev => ({ ...prev, isMuted: newMuteState }));
  };
  
  const skipForward = (seconds = 10) => {
    if (!playerInstanceRef.current) return;
    
    const currentTime = playerInstanceRef.current.getCurrentTime();
    playerInstanceRef.current.seekTo(currentTime + seconds, true);
  };
  
  const skipBackward = (seconds = 10) => {
    if (!playerInstanceRef.current) return;
    
    const currentTime = playerInstanceRef.current.getCurrentTime();
    playerInstanceRef.current.seekTo(Math.max(0, currentTime - seconds), true);
  };
  
  const replayVideo = () => {
    if (!playerInstanceRef.current) return;
    playerInstanceRef.current.seekTo(0, true);
    playerInstanceRef.current.playVideo();
  };
  
  useEffect(() => {
    if (!finalVideoId) return;
    
    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube API Ready');
      
      if (!youtubeIframeRef.current) return;
      
      const player = new window.YT.Player(youtubeIframeRef.current, {
        events: {
          onReady: (event: any) => {
            console.log('YouTube player ready');
            playerInstanceRef.current = event.target;
            
            // Set initial volume
            event.target.setVolume(playerState.volume);
            
            // Set up interval to update playback info
            if (playbackUpdateIntervalRef.current) {
              window.clearInterval(playbackUpdateIntervalRef.current);
            }
            
            playbackUpdateIntervalRef.current = window.setInterval(() => {
              if (playerInstanceRef.current) {
                const currentTime = playerInstanceRef.current.getCurrentTime() || 0;
                const duration = playerInstanceRef.current.getDuration() || 0;
                const volume = playerInstanceRef.current.getVolume();
                const isMuted = playerInstanceRef.current.isMuted();
                const state = playerInstanceRef.current.getPlayerState();
                const isPlaying = state === window.YT.PlayerState.PLAYING;
                
                setPlayerState(prev => ({
                  ...prev,
                  currentTime,
                  duration,
                  isPlaying,
                  volume,
                  isMuted
                }));
              }
            }, 1000);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setPlayerState(prev => ({ ...prev, isPlaying: true }));
            } else if (event.data === window.YT.PlayerState.PAUSED || 
                      event.data === window.YT.PlayerState.ENDED) {
              setPlayerState(prev => ({ ...prev, isPlaying: false }));
            }
          }
        }
      });
    };
    
    // Re-initialize player when video ID changes
    if (window.YT && window.YT.Player && playerInstanceRef.current) {
      playerInstanceRef.current.loadVideoById(finalVideoId);
    }
  }, [finalVideoId]);
  
  console.log('YoutubePlayer rendering with:', { 
    originalVideoId: videoId, 
    fallbackVideoId,
    finalVideoId,
    usingFallback: !videoId,
    selectedQuality,
    playerState
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
        ref={playerContainerRef}
        className="w-full relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1.5"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Video frame with gradient border effect */}
        <div className="relative aspect-video rounded-lg overflow-hidden">
          {/* Placeholder for YouTube iframe API */}
          <div id="youtube-player" className="w-full h-full">
            <iframe
              ref={youtubeIframeRef}
              id={`youtube-iframe-${finalVideoId}`}
              src={getYoutubeEmbedUrl()}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Overlay controls that appear on hover */}
          <div 
            className={cn(
              "absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
              isHovering || isMobile ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Progress bar */}
            <div className="w-full h-1 bg-gray-600 rounded-full mb-3 cursor-pointer">
              <div 
                className="h-full bg-medical-500 rounded-full relative"
                style={{ width: `${playerState.duration ? (playerState.currentTime / playerState.duration) * 100 : 0}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              {/* Timestamp and duration */}
              <div className="flex justify-between items-center text-white text-xs">
                <span>{formatTime(playerState.currentTime)}</span>
                <span>{formatTime(playerState.duration)}</span>
              </div>
              
              {/* Main controls */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Play/pause button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-full text-white hover:bg-white/20"
                    onClick={togglePlay}
                  >
                    {playerState.isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </Button>
                  
                  {/* Skip backward */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    onClick={() => skipBackward(10)}
                  >
                    <Rewind size={16} />
                  </Button>
                  
                  {/* Skip forward */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    onClick={() => skipForward(10)}
                  >
                    <FastForward size={16} />
                  </Button>
                  
                  {/* Replay */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    onClick={replayVideo}
                  >
                    <RotateCw size={16} />
                  </Button>
                  
                  {/* Volume control */}
                  <div className="flex items-center gap-2 group relative">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                      onClick={toggleMute}
                    >
                      {playerState.isMuted || playerState.volume === 0 ? (
                        <VolumeX size={16} />
                      ) : playerState.volume < 50 ? (
                        <Volume1 size={16} />
                      ) : (
                        <Volume2 size={16} />
                      )}
                    </Button>
                    
                    <div className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-300 overflow-hidden">
                      <Slider
                        value={[playerState.isMuted ? 0 : playerState.volume]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={handleVolumeChange}
                        className="w-24"
                      />
                    </div>
                  </div>
                  
                  {/* Video title */}
                  <div className="hidden md:block text-white text-sm font-medium truncate max-w-[200px]">
                    {title}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Video quality selector */}
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
                  
                  {/* Settings button */}
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/20">
                    <Settings size={16} />
                  </Button>
                  
                  {/* Fullscreen button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    onClick={() => {
                      if (playerContainerRef.current) {
                        if (document.fullscreenElement) {
                          document.exitFullscreen();
                        } else {
                          playerContainerRef.current.requestFullscreen();
                        }
                      }
                    }}
                  >
                    <Maximize size={16} />
                  </Button>
                </div>
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
              "transition-all duration-200 font-medium flex items-center",
              hasPrevious ? "hover:bg-medical-50 hover:text-medical-700 hover:border-medical-300" : "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="mr-1" size={18} />
            <SkipBack className="mr-1" size={16} />
            Previous
          </Button>
          <Button 
            onClick={onNext} 
            disabled={!hasNext}
            variant="outline" 
            size="sm"
            className={cn(
              "transition-all duration-200 font-medium flex items-center",
              hasNext ? "hover:bg-medical-50 hover:text-medical-700 hover:border-medical-300" : "opacity-50 cursor-not-allowed"
            )}
          >
            Next
            <SkipForward className="ml-1" size={16} />
            <ChevronRight className="ml-1" size={18} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default YoutubePlayer;
