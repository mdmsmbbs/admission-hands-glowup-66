
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import YoutubePlayer from '@/components/YoutubePlayer';
import { toast } from 'sonner';

// Initialize Supabase client with proper error handling
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if the environment variables are defined
let supabase: ReturnType<typeof createClient> | null = null;

try {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase configuration missing');
  }
  
  supabase = createClient(supabaseUrl, supabaseKey);
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
}

interface Video {
  id: number;
  title: string;
  video_id: string;
  description?: string;
  created_at: string;
  featured?: boolean;
}

const fetchFeaturedVideo = async (): Promise<Video | null> => {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }
  
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') {
      // No featured video found, try to get the most recent one
      const { data: recentVideo, error: recentError } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
        
      if (recentError) {
        console.error('Error fetching recent video:', recentError);
        return null;
      }
      
      return recentVideo as Video;
    }
    
    console.error('Error fetching featured video:', error);
    return null;
  }
  
  return data as Video;
};

const VideoSection = () => {
  const { data: video, isLoading, error } = useQuery({
    queryKey: ['featuredVideo'],
    queryFn: fetchFeaturedVideo,
    meta: {
      onError: (error: Error) => {
        toast.error(`Failed to load featured video: ${error.message || 'Unknown error'}`);
      }
    },
    enabled: !!supabase // Only run the query if supabase client is initialized
  });

  // If Supabase is not configured or there's an error/loading state, don't display anything
  if (!supabase || isLoading || error || !video) {
    return null;
  }

  return (
    <section id="featured-video" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Video</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our latest guidance on medical college admissions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <YoutubePlayer videoId={video.video_id} title={video.title} />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{video.title}</h3>
              {video.description && (
                <p className="mt-2 text-gray-700">{video.description}</p>
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
