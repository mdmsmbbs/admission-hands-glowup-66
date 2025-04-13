
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YoutubePlayer from '@/components/YoutubePlayer';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface Video {
  id: number;
  title: string;
  videos_id: string;
  description?: string;
  created_at: string;
}

const DEFAULT_VIDEOS = [
  {
    id: 1,
    title: "Introduction to Medical School Admissions",
    videos_id: "NEDSLAH9hgw",
    description: "Learn about the medical school admissions process with our comprehensive guide.",
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: "MBBS Application Process Explained",
    videos_id: "9bZkp7q19f0",
    description: "Expert advice on how to prepare for the MCAT examination.",
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: "Medical School Interview Skills",
    videos_id: "jNQXAC9IVRw",
    description: "Ace your medical school interviews with these essential tips.",
    created_at: new Date().toISOString()
  }
];

const VIDEOS_PER_PAGE = 6;

const fetchVideos = async (): Promise<Video[]> => {
  console.log('Fetching all videos...');
  try {
    // Direct call to the REST API with detailed logging
    const response = await fetch('https://autynwxwiplmuajizwfm.supabase.co/rest/v1/videos?select=*&order=created_at.desc', {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1dHlud3h3aXBsbXVhaml6d2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1Mzk5OTYsImV4cCI6MjA2MDExNTk5Nn0.l8UEWyXi98bn-lPQfGSgY1wFsz4WtW2PtHKR53gq6zE',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1dHlud3h3aXBsbXVhaml6d2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1Mzk5OTYsImV4cCI6MjA2MDExNTk5Nn0.l8UEWyXi98bn-lPQfGSgY1wFsz4WtW2PtHKR53gq6zE'
      }
    });
    
    console.log('Fetch response status:', response.status);
    const textResponse = await response.text();
    console.log('Raw response:', textResponse);
    
    let data: Video[] = [];
    try {
      data = JSON.parse(textResponse);
    } catch (e) {
      console.error('Error parsing JSON response:', e);
      throw new Error('Failed to parse response data');
    }
    
    console.log('Parsed videos data:', data);
    return data || [];
  } catch (error) {
    console.error('Error in fetchVideos direct fetch:', error);
    
    // Fallback to supabase client
    try {
      console.log('Trying supabase client as fallback...');
      const { data, error: supabaseError } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (supabaseError) {
        console.error('Supabase client error:', supabaseError);
        throw supabaseError;
      }
      
      console.log('Supabase client response:', data);
      return data || [];
    } catch (fallbackError) {
      console.error('Error in supabase client fallback:', fallbackError);
      throw fallbackError;
    }
  }
};

const Videos = () => {
  const [page, setPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showDebugInfo, setShowDebugInfo] = useState(false);
  
  useEffect(() => {
    // Check for a debug parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('debug') === 'true') {
      setShowDebugInfo(true);
    }
  }, []);
  
  const { data: videos, isLoading, error } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    retry: 2,
    meta: {
      onError: (error: Error) => {
        console.error('Query error in Videos page:', error);
        toast.error(`Failed to load videos: ${error.message || 'Unknown error'}`);
      }
    }
  });

  console.log('Videos page render:', { videos, isLoading, error });
  
  // Determine which videos to display (fetched or default)
  const displayVideos = (videos && videos.length > 0) ? videos : DEFAULT_VIDEOS;
  
  // Calculate pagination
  const totalPages = Math.ceil(displayVideos.length / VIDEOS_PER_PAGE);
  const startIndex = (page - 1) * VIDEOS_PER_PAGE;
  const paginatedVideos = displayVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);
  
  // Handle selecting a video for the player
  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };
  
  // Handle pagination
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // If a video is selected, get its index to enable pagination
  const currentVideoIndex = selectedVideo 
    ? displayVideos.findIndex(v => v.id === selectedVideo.id)
    : -1;
    
  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setSelectedVideo(displayVideos[currentVideoIndex - 1]);
    }
  };
  
  const handleNextVideo = () => {
    if (currentVideoIndex < displayVideos.length - 1) {
      setSelectedVideo(displayVideos[currentVideoIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container-custom py-8">
        <h1 className="text-3xl font-bold mb-6 text-medical-600">Featured Videos</h1>
        
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-500"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            Error loading videos: {error.message || 'Unknown error'}
          </div>
        )}
        
        {videos && videos.length === 0 && !isLoading && (
          <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-md mb-6">
            <p className="font-medium">No videos found in the database</p>
            <p className="text-sm mt-1">
              You're seeing default placeholder videos. Add videos to your Supabase database to replace these.
            </p>
          </div>
        )}
        
        {showDebugInfo && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg text-xs text-left overflow-auto max-h-48">
            <h3 className="font-bold mb-2">Debug Information:</h3>
            <p>Videos data: {JSON.stringify(videos || 'null', null, 2)}</p>
            <p>Error: {error ? JSON.stringify(error, Object.getOwnPropertyNames(error), 2) : 'None'}</p>
            <p>Display videos: {JSON.stringify(displayVideos, null, 2)}</p>
            <p>Current page: {page}</p>
            <p>Selected video: {JSON.stringify(selectedVideo || 'None', null, 2)}</p>
            <button 
              onClick={() => window.open(`${window.location.pathname}?debug=false`, '_self')}
              className="mt-2 px-2 py-1 bg-gray-200 rounded text-gray-700 hover:bg-gray-300"
            >
              Hide Debug
            </button>
          </div>
        )}
        
        {/* Display selected video if applicable */}
        {selectedVideo && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Now Playing</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <YoutubePlayer 
                videoId={selectedVideo.videos_id}
                title={selectedVideo.title}
                onPrevious={handlePrevVideo}
                onNext={handleNextVideo}
                hasPrevious={currentVideoIndex > 0}
                hasNext={currentVideoIndex < displayVideos.length - 1}
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                {selectedVideo.description && (
                  <p className="mt-2 text-gray-600">{selectedVideo.description}</p>
                )}
              </div>
            </div>
            <button 
              onClick={() => setSelectedVideo(null)}
              className="mt-4 text-medical-600 hover:text-medical-800 underline"
            >
              Close player and view all videos
            </button>
          </div>
        )}
        
        {/* Video grid */}
        {!selectedVideo && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedVideos.map((video) => (
              <div key={video.id} className="flex flex-col h-full cursor-pointer" onClick={() => handleSelectVideo(video)}>
                <div className="relative">
                  <YoutubePlayer videoId={video.videos_id} title={video.title} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform scale-0 hover:scale-100 transition-transform duration-300">
                      <svg className="w-8 h-8 text-medical-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex-grow">
                  <h3 className="font-semibold text-lg text-gray-800">{video.title}</h3>
                  {video.description && (
                    <p className="text-gray-600 mt-2">{video.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && !selectedVideo && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={prevPage} className={page === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} />
              </PaginationItem>
              
              {Array.from({length: totalPages}).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    isActive={page === i + 1} 
                    onClick={() => setPage(i + 1)}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext onClick={nextPage} className={page === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
        
        {/* Video count indicator */}
        {displayVideos.length > 0 && (
          <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
            <div>
              Showing {selectedVideo ? `video ${currentVideoIndex + 1}` : `${Math.min(startIndex + 1, displayVideos.length)}-${Math.min(startIndex + VIDEOS_PER_PAGE, displayVideos.length)}`} of {displayVideos.length} videos
            </div>
            
            {!showDebugInfo && (
              <button 
                onClick={() => window.open(`${window.location.pathname}?debug=true`, '_self')}
                className="text-xs text-gray-400 hover:text-gray-500"
              >
                Debug
              </button>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
