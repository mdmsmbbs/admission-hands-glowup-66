
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

interface StateTemplateProps {
  stateName: string;
}

const StateTemplate: React.FC<StateTemplateProps> = ({ stateName }) => {
  const [stateData, setStateData] = useState<Tables<'mbbs_states'> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const { data, error } = await supabase
          .from('mbbs_states')
          .select('*')
          .eq('name', stateName)
          .single();

        if (error) throw error;
        setStateData(data);
      } catch (err) {
        setError('Failed to fetch state data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStateData();
  }, [stateName]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in {stateName} - AdmissionHands</title>
        <meta 
          name="description" 
          content={`Find detailed information about MBBS colleges in ${stateName}. List of medical colleges, fees, cutoffs, and admission processes in ${stateName}.`} 
        />
        {/* Add preload hints for critical resources */}
        <link rel="preload" href="/lovable-uploads/ec3aadb9-57f9-4fea-b9b5-0a08127ca9b0.png" as="image" />
      </Helmet>
      
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gradient-to-r from-medical-50 to-blue-50">
          <div className="container-custom">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in">
              MBBS in {stateName}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 animate-fade-up">
              {stateData?.colleges_count ? `${stateData.colleges_count} Medical Colleges` : 'Comprehensive information'} about medical colleges in {stateName}.
            </p>
          </div>
        </section>
        
        {loading ? (
          <div className="py-16 flex justify-center">
            <div className="animate-pulse w-full max-w-3xl">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        ) : error ? (
          <div className="py-16 container-custom">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <section className="py-12 md:py-16 animate-fade-in">
            <div className="container-custom">
              <p className="text-gray-600">
                {stateData?.content || 'Content for this state will be added soon.'}
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default StateTemplate;
