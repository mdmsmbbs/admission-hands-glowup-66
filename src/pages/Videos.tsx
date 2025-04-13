
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
}

const fetchVideos = async (): Promise<Video[]> => {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }
  
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data || [];
};

const Videos = () => {
  const { data: videos, isLoading, error } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    meta: {
      onError: (error: Error) => {
        toast.error(`Failed to load videos: ${error.message || 'Unknown error'}`);
      }
    },
    enabled: !!supabase // Only run the query if supabase client is initialized
  });

  // Handle case where supabase client is not initialized
  if (!supabase) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-8">
          <h1 className="text-3xl font-bold mb-6 text-medical-600">Featured Videos</h1>
          <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-md mb-6">
            <p className="font-medium">Supabase configuration is missing</p>
            <p className="mt-2">Please check your environment variables:</p>
            <ul className="list-disc pl-5 mt-1">
              <li>VITE_SUPABASE_URL</li>
              <li>VITE_SUPABASE_ANON_KEY</li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            Error loading videos. Please try again later.
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
              <YoutubePlayer videoId={video.video_id} title={video.title} />
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
