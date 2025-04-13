
import React from 'react';
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

const DEFAULT_VIDEO = {
  title: "Introduction to Medical School Admissions",
  videos_id: "dQw4w9WgXcQ", // Default video ID
  description: "Learn about the medical school admissions process with our comprehensive guide."
};

const fetchFeaturedVideo = async (): Promise<Video | null> => {
  console.log('Fetching featured video...');
  try {
    // First try to get a featured video
    const { data: featuredVideos, error: featuredError } = await supabase
      .from('videos')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (featuredError) {
      console.error('Featured video error:', featuredError);
      throw featuredError;
    }
    
    // If we found a featured video, return the first one
    if (featuredVideos && featuredVideos.length > 0) {
      console.log('Featured video found:', featuredVideos[0]);
      return featuredVideos[0] as Video;
    }
    
    // No featured video found, try to get the most recent one
    console.log('No featured video found, getting most recent one');
    const { data: recentVideos, error: recentError } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);
      
    if (recentError) {
      console.error('Error fetching recent video:', recentError);
      throw recentError;
    }
    
    if (recentVideos && recentVideos.length > 0) {
      console.log('Recent video found:', recentVideos[0]);
      return recentVideos[0] as Video;
    }
    
    console.log('No videos found at all');
    return null;
  } catch (error) {
    console.error('Error in fetchFeaturedVideo:', error);
    throw error;
  }
};

const VideoSection = () => {
  const { data: video, isLoading, error } = useQuery({
    queryKey: ['featuredVideo'],
    queryFn: fetchFeaturedVideo,
    retry: 1,
    meta: {
      onError: (error: Error) => {
        console.error('Query error:', error);
        toast.error(`Failed to load featured video: ${error.message || 'Unknown error'}`);
      }
    }
  });

  console.log('VideoSection render:', { video, isLoading, error });

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

  // Use default or fetched video
  const displayVideo = video || DEFAULT_VIDEO;

  return (
    <section id="featured-video" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Video</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our latest guidance on medical college admissions
          </p>
          {!video && (
            <div className="mt-2 text-amber-600 text-sm">
              No videos found in database. Add videos to your Supabase to replace this default video.
            </div>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <YoutubePlayer 
              videoId={displayVideo.videos_id} 
              title={displayVideo.title}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{displayVideo.title}</h3>
              {displayVideo.description && (
                <p className="mt-2 text-gray-700">{displayVideo.description}</p>
              )}
              <div className="mt-4">
                <a 
                  href="/videos" 
                  className="inline-flex items-center text-medical-500 hover:text-medical-600 font-medium"
                >
                  View more videos
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
