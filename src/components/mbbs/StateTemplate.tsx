
import React, { useState, useEffect } from 'react';
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in {stateName} - AdmissionHands</title>
        <meta 
          name="description" 
          content={`Find detailed information about MBBS colleges in ${stateName}. List of medical colleges, fees, cutoffs, and admission processes in ${stateName}.`} 
        />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-r from-medical-50 to-blue-50">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MBBS in {stateName}
            </h1>
            <p className="text-lg text-gray-700">
              {stateData?.colleges_count ? `${stateData.colleges_count} Medical Colleges` : 'Comprehensive information'} about medical colleges in {stateName}.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <p className="text-gray-600">
              {stateData?.content || 'Content for this state will be added soon.'}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StateTemplate;
