
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YoutubePlayer from '@/components/YoutubePlayer';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface Video {
  id: number;
  title: string;
  videos_id: string;
  description?: string;
  created_at: string;
}

const fetchVideos = async (): Promise<Video[]> => {
  console.log('Fetching all videos...');
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching videos:', error);
    throw new Error(error.message);
  }
  
  console.log('Videos fetched:', data);
  return data || [];
};

const Videos = () => {
  const { data: videos, isLoading, error } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    retry: 1,
    meta: {
      onError: (error: Error) => {
        console.error('Query error in Videos page:', error);
        toast.error(`Failed to load videos: ${error.message || 'Unknown error'}`);
      }
    }
  });

  console.log('Videos page render:', { videos, isLoading, error });

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
          <div className="text-center py-12 text-gray-500">
            No videos available at the moment.
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos?.map((video) => (
            <div key={video.id} className="flex flex-col h-full">
              <YoutubePlayer videoId={video.videos_id} title={video.title} />
              <div className="mt-3 flex-grow">
                <h3 className="font-semibold text-lg text-gray-800">{video.title}</h3>
                {video.description && (
                  <p className="text-gray-600 mt-2">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
