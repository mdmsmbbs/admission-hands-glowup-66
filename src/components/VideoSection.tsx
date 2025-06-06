import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import YouTubeIframePlayer from '@/components/YouTubeIframePlayer';
import { toast } from 'sonner';
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

  if (isLoading) {
    return (
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-medical-600 to-teal-600">Informative Videos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading latest video...
            </p>
          </div>
          
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full aspect-video bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 w-2/3 bg-gray-200 animate-pulse mb-2"></div>
                <div className="h-4 w-full bg-gray-200 animate-pulse mb-1"></div>
                <div className="h-4 w-3/4 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-medical-200"></div>
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-teal-200"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-medical-100"></div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-medical-600 to-teal-600">Informative Videos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guidance on medical college admissions to help you succeed
          </p>
        </div>
        
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:shadow-xl">
            <div className="relative w-full">
              <YouTubeIframePlayer 
                videoId={currentVideo.videos_id} 
                title={currentVideo.title}
                onPrevious={handlePrevious}
                onNext={handleNext}
                hasPrevious={currentVideoIndex > 0}
                hasNext={currentVideoIndex < displayVideos.length - 1}
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{currentVideo.title}</h3>
              {currentVideo.description && (
                <p className="mt-2 text-gray-600 text-lg">{currentVideo.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
