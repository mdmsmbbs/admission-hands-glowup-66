
import React from 'react';

interface YouTubeIframePlayerProps {
  videoId: string;
  title?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

const YouTubeIframePlayer: React.FC<YouTubeIframePlayerProps> = ({ 
  videoId, 
  title,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false 
}) => {
  return (
    <div className="youtube-iframe-container relative w-full">
      <div className="aspect-video relative">
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      
      {/* Navigation buttons */}
      {(onPrevious || onNext) && (
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-2 pointer-events-none">
          <button 
            onClick={onPrevious} 
            disabled={!hasPrevious}
            className={`p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white pointer-events-auto video-nav-button ${!hasPrevious ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100 hover:bg-black/60'}`}
            aria-label="Previous video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={onNext} 
            disabled={!hasNext}
            className={`p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white pointer-events-auto video-nav-button ${!hasNext ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100 hover:bg-black/60'}`}
            aria-label="Next video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default YouTubeIframePlayer;
