
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import SEO from '@/components/SEO';

interface StateTemplateProps {
  stateName: string;
}

// Map of state names to vibrant background colors
const stateColorMap: Record<string, string> = {
  "Deemed Universities": "from-purple-200 to-purple-50",
  "Karnataka": "from-pink-200 to-pink-50",
  "Uttar Pradesh": "from-cyan-200 to-cyan-50",
  "Rajasthan": "from-amber-200 to-amber-50",
  "Maharashtra": "from-red-200 to-red-50",
  "Madhya Pradesh": "from-emerald-200 to-emerald-50",
  "Haryana": "from-blue-200 to-blue-50",
  "Himachal Pradesh": "from-violet-200 to-violet-50",
  "Bihar": "from-lime-200 to-lime-50",
  "West Bengal": "from-sky-200 to-sky-50",
  "Uttarakhand": "from-fuchsia-200 to-fuchsia-50",
  "Chhattisgarh": "from-rose-200 to-rose-50",
  "Telangana": "from-indigo-200 to-indigo-50",
  "Kerala": "from-teal-200 to-teal-50",
  "Gujarat": "from-yellow-200 to-yellow-50",
  "Delhi": "from-orange-200 to-orange-50",
  "Odisha": "from-slate-200 to-slate-50",
};

// Map of state names to vibrant accent colors for buttons and highlights
const stateAccentMap: Record<string, string> = {
  "Deemed Universities": "bg-purple-500 hover:bg-purple-600",
  "Karnataka": "bg-pink-500 hover:bg-pink-600",
  "Uttar Pradesh": "bg-cyan-500 hover:bg-cyan-600",
  "Rajasthan": "bg-amber-500 hover:bg-amber-600",
  "Maharashtra": "bg-red-500 hover:bg-red-600",
  "Madhya Pradesh": "bg-emerald-500 hover:bg-emerald-600",
  "Haryana": "bg-blue-500 hover:bg-blue-600",
  "Himachal Pradesh": "bg-violet-500 hover:bg-violet-600",
  "Bihar": "bg-lime-500 hover:bg-lime-600",
  "West Bengal": "bg-sky-500 hover:bg-sky-600",
  "Uttarakhand": "bg-fuchsia-500 hover:bg-fuchsia-600",
  "Chhattisgarh": "bg-rose-500 hover:bg-rose-600",
  "Telangana": "bg-indigo-500 hover:bg-indigo-600",
  "Kerala": "bg-teal-500 hover:bg-teal-600",
  "Gujarat": "bg-yellow-500 hover:bg-yellow-600",
  "Delhi": "bg-orange-500 hover:bg-orange-600",
  "Odisha": "bg-slate-500 hover:bg-slate-600",
};

const StateTemplate: React.FC<StateTemplateProps> = ({ stateName }) => {
  const [stateData, setStateData] = useState<Tables<'mbbs_states'> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const backgroundGradient = stateColorMap[stateName] || "from-medical-50 to-blue-50";
  const accentColor = stateAccentMap[stateName] || "bg-medical-500 hover:bg-medical-600";
  
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

  // Generate structured data for this state's medical education page
  const statePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `MBBS in ${stateName} - AdmissionHands`,
    "description": `Comprehensive information about medical colleges, fees, and admission processes for MBBS in ${stateName}.`,
    "publisher": {
      "@type": "Organization",
      "name": "AdmissionHands",
      "logo": "https://lovable.dev/opengraph-image-p98pqg.png"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`MBBS in ${stateName} - AdmissionHands`}
        description={`Find detailed information about MBBS colleges in ${stateName}. List of medical colleges, fees, cutoffs, and admission processes in ${stateName}.`}
        keywords={`MBBS ${stateName}, medical colleges in ${stateName}, ${stateName} medical admission, MBBS seats ${stateName}`}
        ogTitle={`Medical Colleges in ${stateName} - MBBS Admission Guide`}
        ogDescription={`Complete guide to MBBS admissions in ${stateName}. Find colleges, fee structure, and eligibility criteria for medical education in ${stateName}.`}
        canonical={`https://www.admissionhands.com/mbbs-india/${stateName.toLowerCase().replace(/\s+/g, '-')}`}
        structuredData={statePageSchema}
      />
      
      <Header />
      <main className="flex-grow">
        <section className={`py-12 md:py-16 bg-gradient-to-r ${backgroundGradient}`}>
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
              <article>
                <h2 className="text-2xl font-semibold mb-4">Medical Colleges in {stateName}</h2>
                <p className="text-gray-600 mb-6">
                  {stateData?.content || 'Content for this state will be added soon.'}
                </p>
                
                {stateData?.colleges_count && stateData?.colleges_count > 0 && (
                  <div className={`${backgroundGradient.replace("from-", "bg-").replace(" to-blue-50", "")} p-4 rounded-lg`}>
                    <p className="font-medium">Key Statistics:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Number of Medical Colleges: {stateData.colleges_count}</li>
                      <li>Approx. MBBS Seats: {stateData.colleges_count * 100}</li>
                      <li>NEET Cutoff Range: Varies by category and college</li>
                    </ul>
                  </div>
                )}
              </article>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default StateTemplate;
