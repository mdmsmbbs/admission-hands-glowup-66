
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import YoutubePlayer from '@/components/YoutubePlayer';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/integrations/supabase/client';

interface Video {
  id: number;
  title: string;
  videos_id: string;
  description?: string;
  created_at: string;
  featured?: boolean;
}

const DEFAULT_VIDEOS = [
  {
    id: 1,
    title: "Introduction to Medical School Admissions",
    videos_id: "dQw4w9WgXcQ",
    description: "Learn about the medical school admissions process with our comprehensive guide.",
    created_at: new Date().toISOString(),
    featured: true
  }
];

const fetchVideos = async (): Promise<Video[]> => {
  console.log('Fetching videos for VideoSection...');
  try {
    // Direct call to the REST API with detailed logging
    const response = await fetch('https://autynwxwiplmuajizwfm.supabase.co/rest/v1/videos?select=*&order=created_at.desc&limit=10', {
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
        .order('created_at', { ascending: false })
        .limit(10);
      
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

const VideoSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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
        console.error('Query error:', error);
        toast.error(`Failed to load videos: ${error.message || 'Unknown error'}`);
      }
    }
  });

  console.log('VideoSection render:', { videos, isLoading, error, currentVideoIndex });

  // Use fetched videos or default videos
  const displayVideos = videos && videos.length > 0 ? videos : DEFAULT_VIDEOS;
  const currentVideo = displayVideos[currentVideoIndex];

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < displayVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <section id="featured-video" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Video</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading latest video...
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Skeleton className="w-full aspect-video" />
              <div className="p-6">
                <Skeleton className="h-6 w-2/3 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-video" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Video</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our latest guidance on medical college admissions
          </p>
          {(!videos || videos.length === 0) && (
            <div className="mt-2 text-amber-600 text-sm">
              No videos found in database. Add videos to your Supabase to replace this default video.
            </div>
          )}
          {videos && videos.length > 0 && (
            <div className="mt-2 text-medical-600 text-sm">
              Video {currentVideoIndex + 1} of {displayVideos.length}
            </div>
          )}
        </div>
        
        {showDebugInfo && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg text-xs text-left overflow-auto max-h-48">
            <h3 className="font-bold mb-2">Debug Information:</h3>
            <p>Videos data: {JSON.stringify(videos || 'null', null, 2)}</p>
            <p>Error: {error ? JSON.stringify(error, Object.getOwnPropertyNames(error), 2) : 'None'}</p>
            <p>Display videos: {JSON.stringify(displayVideos, null, 2)}</p>
            <p>Current index: {currentVideoIndex}</p>
            <p>Current video: {JSON.stringify(currentVideo, null, 2)}</p>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <YoutubePlayer 
              videoId={currentVideo.videos_id} 
              title={currentVideo.title}
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={currentVideoIndex > 0}
              hasNext={currentVideoIndex < displayVideos.length - 1}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{currentVideo.title}</h3>
              {currentVideo.description && (
                <p className="mt-2 text-gray-700">{currentVideo.description}</p>
              )}
              <div className="mt-4 flex justify-between items-center">
                <a 
                  href="/videos" 
                  className="inline-flex items-center text-medical-500 hover:text-medical-600 font-medium"
                >
                  View more videos
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                {!showDebugInfo && (
                  <button 
                    onClick={() => setShowDebugInfo(true)} 
                    className="text-xs text-gray-400 hover:text-gray-500"
                  >
                    Show Debug
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
