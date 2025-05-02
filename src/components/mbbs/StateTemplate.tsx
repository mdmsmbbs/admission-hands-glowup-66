
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import SEO from '@/components/SEO';
import { MapPin, GraduationCap, Building, FileText, Users, Calendar, Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

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

// Sample data for state colleges - this would ideally come from your database
const getStateColleges = (stateName: string) => {
  // Default colleges for states that don't have specific data
  const defaultColleges = [
    {
      name: `${stateName} Medical College and Hospital`,
      type: "Government",
      location: `${stateName} Capital City`,
      established: "1956",
      description: `One of the oldest and most prestigious medical institutions in ${stateName}.`
    },
    {
      name: `${stateName} Institute of Medical Sciences`,
      type: "Government",
      location: `Central ${stateName}`,
      established: "1976",
      description: `A premier medical institution known for excellent clinical training and research facilities.`
    },
    {
      name: `${stateName} Private Medical College`,
      type: "Private",
      location: `Eastern ${stateName}`,
      established: "1998",
      description: `Modern infrastructure with state-of-the-art facilities and experienced faculty.`
    }
  ];

  // State-specific college data
  const stateSpecificColleges: Record<string, any[]> = {
    "Karnataka": [
      {
        name: "Bangalore Medical College and Research Institute",
        type: "Government",
        location: "Bangalore",
        established: "1955",
        description: "One of the oldest and most prestigious medical colleges in Karnataka, offering excellent clinical exposure."
      },
      {
        name: "Mysore Medical College and Research Institute",
        type: "Government",
        location: "Mysore",
        established: "1924",
        description: "Second oldest medical college in the state with rich heritage and excellent clinical facilities."
      },
      {
        name: "M.S. Ramaiah Medical College",
        type: "Private",
        location: "Bangalore",
        established: "1979",
        description: "Leading private medical institution with modern infrastructure and quality education."
      }
    ],
    "Maharashtra": [
      {
        name: "Grant Medical College and Sir JJ Hospital",
        type: "Government",
        location: "Mumbai",
        established: "1845",
        description: "One of the oldest medical institutions in India with excellent clinical exposure."
      },
      {
        name: "Seth GS Medical College and KEM Hospital",
        type: "Government",
        location: "Mumbai",
        established: "1926",
        description: "Premier medical institution known for research and advanced medical studies."
      },
      {
        name: "B.J. Medical College",
        type: "Government",
        location: "Pune",
        established: "1946",
        description: "Leading medical college in Pune with excellent faculty and clinical training."
      }
    ],
    "Uttar Pradesh": [
      {
        name: "King George's Medical University",
        type: "Government",
        location: "Lucknow",
        established: "1911",
        description: "One of the oldest medical institutions in UP with excellent clinical and research facilities."
      },
      {
        name: "Institute of Medical Sciences, BHU",
        type: "Government",
        location: "Varanasi",
        established: "1960",
        description: "Premier institution under Banaras Hindu University known for quality medical education."
      },
      {
        name: "Era's Lucknow Medical College",
        type: "Private",
        location: "Lucknow",
        established: "2001",
        description: "Modern private medical institution with state-of-the-art facilities."
      }
    ],
    "Rajasthan": [
      {
        name: "Sawai Man Singh Medical College",
        type: "Government",
        location: "Jaipur",
        established: "1947",
        description: "Premier medical institution in Rajasthan with excellent clinical facilities."
      },
      {
        name: "Dr. S.N. Medical College",
        type: "Government",
        location: "Jodhpur",
        established: "1965",
        description: "Leading medical college in Western Rajasthan with comprehensive medical training."
      },
      {
        name: "Geetanjali Medical College",
        type: "Private",
        location: "Udaipur",
        established: "2008",
        description: "Modern private medical institution with state-of-the-art infrastructure."
      }
    ]
  };

  return stateSpecificColleges[stateName] || defaultColleges;
};

// Sample data for counseling process
const getCounselingProcess = (stateName: string) => {
  // Default counseling process
  const defaultProcess = [
    "NEET-UG score qualification",
    "Registration for state counseling",
    "Document verification",
    "Choice filling of colleges and courses",
    "Seat allotment based on merit",
    "Fee payment to confirm seat",
    "Reporting to the allotted college"
  ];

  const stateSpecificProcess: Record<string, string[]> = {
    "Karnataka": [
      "NEET-UG qualification with valid score",
      "Registration on Karnataka Examinations Authority (KEA) portal",
      "Document verification at designated centers",
      "Choice filling of colleges as per preference",
      "Seat allotment through KEA counseling rounds",
      "Fee payment at designated banks",
      "Reporting to allotted college with original documents"
    ],
    "Maharashtra": [
      "NEET-UG qualification with valid score",
      "Registration on DMER Maharashtra portal",
      "Document verification at regional centers",
      "Choice filling of colleges and courses",
      "Seat allotment through multiple counseling rounds",
      "Fee payment through online/offline mode",
      "Reporting to allotted college with required documents"
    ]
  };

  return stateSpecificProcess[stateName] || defaultProcess;
};

const StateTemplate: React.FC<StateTemplateProps> = ({ stateName }) => {
  const [stateData, setStateData] = useState<Tables<'mbbs_states'> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const phoneNumber = "+919873133846";
  const backgroundGradient = stateColorMap[stateName] || "from-medical-50 to-blue-50";
  const accentColor = stateAccentMap[stateName] || "bg-medical-500 hover:bg-medical-600";
  const colleges = getStateColleges(stateName);
  const counselingProcess = getCounselingProcess(stateName);
  
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
        description={`Find detailed information about MBBS colleges in ${stateName}. List of medical colleges, admission processes, and counseling details for MBBS in ${stateName}.`}
        keywords={`MBBS ${stateName}, medical colleges in ${stateName}, ${stateName} medical admission, MBBS seats ${stateName}`}
        ogTitle={`Medical Colleges in ${stateName} - MBBS Admission Guide`}
        ogDescription={`Complete guide to MBBS admissions in ${stateName}. Find colleges and eligibility criteria for medical education in ${stateName}.`}
        canonical={`https://www.admissionhands.com/mbbs-india/${stateName.toLowerCase().replace(/\s+/g, '-')}`}
        structuredData={statePageSchema}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`py-12 md:py-16 bg-gradient-to-r ${backgroundGradient}`}>
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in">
                  MBBS in {stateName}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 animate-fade-up">
                  Comprehensive guide to medical education, colleges, and admission process in {stateName}.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-3 flex items-center">
                    <Building className="w-5 h-5 text-medical-600 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Medical Colleges</p>
                      <p className="font-medium">{stateData?.colleges_count || colleges.length}+</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a href={`tel:${phoneNumber}`} className={`${accentColor} text-white px-4 py-2 rounded-md shadow-sm inline-flex items-center`}>
                    <Phone className="w-4 h-4 mr-2" /> Get Expert Guidance
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={`https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop`} 
                    alt={`Medical Education in ${stateName}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Medical Education in {stateName}
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                {stateData?.content || `${stateName} offers quality medical education through various government and private medical colleges. MBBS admission is primarily based on NEET scores, followed by state-level counseling.`}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-medical-700 flex items-center">
                  <Building className="w-5 h-5 mr-2" /> Government Medical Colleges
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Highly subsidized education</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Higher NEET cutoffs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Excellent clinical exposure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Strong alumni network</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-medical-700 flex items-center">
                  <Building className="w-5 h-5 mr-2" /> Private Medical Colleges
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Modern infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Multiple admission quotas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Advanced research facilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Additional career support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-medical-700 flex items-center">
                  <FileText className="w-5 h-5 mr-2" /> Admission Process
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Based on NEET-UG scores</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>State quota: 85% seats</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>All India Quota: 15% seats</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mt-2 mr-2"></div>
                    <span>Centralized counseling process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Medical Colleges Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Top Medical Colleges in {stateName}
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Explore some of the leading medical institutions offering MBBS in {stateName}.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {colleges.map((college, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-5"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{college.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      college.type === "Government" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {college.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="text-sm">{college.location}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{college.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span>Established: {college.established}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Admission Process Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                MBBS Admission Process in {stateName}
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Step-by-step guide to securing admission in medical colleges in {stateName}.
              </p>
            </div>
            
            <Tabs defaultValue="process" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="process">Admission Steps</TabsTrigger>
                <TabsTrigger value="documents">Required Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="process" className="mt-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                    {counselingProcess.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 bg-medical-100 rounded-full w-8 h-8 flex items-center justify-center text-medical-700 font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-800">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 italic">
                    *Disclaimer: The counseling process and requirements may vary. Please verify with the official authorities.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    Documents required for MBBS admission in {stateName}:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>NEET Score Card</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>10th & 12th Mark Sheets</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>Domicile Certificate</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>Category Certificate (if applicable)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>ID Proof (Aadhaar Card)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>Passport Size Photographs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>Transfer Certificate</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                      <span>Migration Certificate</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Need Expert Guidance for MBBS in {stateName}?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Our counselors can help you navigate the complex admission process, choose the right college, and maximize your chances of securing a seat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="bg-white text-medical-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg text-center">
                    Call Our Experts
                  </a>
                  <Link to="/know-us" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-all text-center">
                    Send Enquiry
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl text-gray-800">
                <h3 className="text-xl font-bold mb-4">Our Admission Assistance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <GraduationCap className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">College Selection Guidance</span>
                      <p className="text-sm text-gray-600">Get personalized recommendations based on your NEET score</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <FileText className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Documentation Support</span>
                      <p className="text-sm text-gray-600">Complete assistance with preparation of required documents</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <Users className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Counseling Registration</span>
                      <p className="text-sm text-gray-600">Step-by-step guidance for state counseling processes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StateTemplate;
