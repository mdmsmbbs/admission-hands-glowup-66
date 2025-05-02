
import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

type College = {
  name: string;
  city: string;
  state: string;
  region: string;
};

// Color mapping for different regions
const regionColors: Record<string, {badge: string, text: string}> = {
  'North': { badge: 'pink', text: 'text-pink-700' },
  'South': { badge: 'teal', text: 'text-teal-700' },
  'East': { badge: 'amber', text: 'text-amber-700' },
  'West': { badge: 'violet', text: 'text-violet-700' },
  'Central': { badge: 'cyan', text: 'text-cyan-700' },
};

// Color mapping for different states (using a variety of colors)
const stateColors: Record<string, string> = {
  'Karnataka': 'emerald',
  'Tamil Nadu': 'purple',
  'Maharashtra': 'indigo', 
  'Kerala': 'lime',
  'Andhra Pradesh': 'rose',
  'Telangana': 'fuchsia',
  'Delhi': 'pink',
  'Uttar Pradesh': 'amber',
  'Haryana': 'cyan',
  'Punjab': 'teal',
  'Rajasthan': 'medical',
  'Gujarat': 'info',
  'Madhya Pradesh': 'warning',
  'Odisha': 'success',
  'Bihar': 'violet',
  'Jharkhand': 'modern',
  'Uttarakhand': 'premium',
  'Himachal Pradesh': 'emerald',
  'Assam': 'warning',
  'Chhattisgarh': 'info'
};

const DeemedMedicalColleges2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');

  // Complete data of deemed medical colleges
  const allColleges: College[] = [
    { name: "Manipal Academy of Higher Education", city: "Manipal", state: "Karnataka", region: "South" },
    { name: "KMC Manipal", city: "Manipal", state: "Karnataka", region: "South" },
    { name: "KMC Mangalore", city: "Mangalore", state: "Karnataka", region: "South" },
    { name: "DY Patil University Mumbai", city: "Mumbai", state: "Maharashtra", region: "West" },
    { name: "DY Patil University Pune", city: "Pune", state: "Maharashtra", region: "West" },
    { name: "JNMC (KLE) Belgaum", city: "Belgaum", state: "Karnataka", region: "South" },
    { name: "MGM Mumbai", city: "Mumbai", state: "Maharashtra", region: "West" },
    { name: "MGM Aurangabad", city: "Aurangabad", state: "Maharashtra", region: "West" },
    { name: "Bharti Vidyapeeth Mumbai", city: "Mumbai", state: "Maharashtra", region: "West" },
    { name: "Bharti Vidyapeeth Pune", city: "Pune", state: "Maharashtra", region: "West" },
    { name: "PIMS Loni", city: "Loni", state: "Maharashtra", region: "West" },
    { name: "Santosh Ghaziabad", city: "Ghaziabad", state: "Uttar Pradesh", region: "North" },
    { name: "MMU Ambala", city: "Ambala", state: "Haryana", region: "North" },
    { name: "IMS & SUM Bhubaneshwar", city: "Bhubaneshwar", state: "Odisha", region: "East" },
    { name: "Kalinga Bhubaneshwar", city: "Bhubaneshwar", state: "Odisha", region: "East" },
    { name: "Amrita Faridabad", city: "Faridabad", state: "Haryana", region: "North" },
    { name: "Graphic Era Dehradun", city: "Dehradun", state: "Uttarakhand", region: "North" },
    { name: "Krishna Institute of Medical Sciences", city: "Karad", state: "Maharashtra", region: "West" },
    { name: "KLE University", city: "Belgaum", state: "Karnataka", region: "South" },
    { name: "Amrita Vishwa Vidyapeetham", city: "Kochi", state: "Kerala", region: "South" },
    { name: "Sri Ramachandra Medical College", city: "Chennai", state: "Tamil Nadu", region: "South" },
    { name: "Yenepoya University", city: "Mangalore", state: "Karnataka", region: "South" },
    { name: "Saveetha University", city: "Chennai", state: "Tamil Nadu", region: "South" },
    { name: "SRM Institute of Science and Technology", city: "Chennai", state: "Tamil Nadu", region: "South" },
    { name: "Dr. D.Y. Patil Vidyapeeth", city: "Pune", state: "Maharashtra", region: "West" },
    { name: "JSS Academy of Higher Education & Research", city: "Mysore", state: "Karnataka", region: "South" },
    { name: "Vinayaka Mission's Research Foundation", city: "Salem", state: "Tamil Nadu", region: "South" },
    { name: "Chettinad Academy of Research and Education", city: "Chennai", state: "Tamil Nadu", region: "South" },
    { name: "Nitte University", city: "Mangalore", state: "Karnataka", region: "South" },
    { name: "Sharda University", city: "Greater Noida", state: "Uttar Pradesh", region: "North" },
    { name: "GITAM Institute of Medical Sciences", city: "Visakhapatnam", state: "Andhra Pradesh", region: "South" },
    { name: "Teerthanker Mahaveer University", city: "Moradabad", state: "Uttar Pradesh", region: "North" },
    { name: "Sri Devaraj Urs Academy of Higher Education", city: "Kolar", state: "Karnataka", region: "South" },
    { name: "Sumandeep Vidyapeeth", city: "Vadodara", state: "Gujarat", region: "West" },
    { name: "Sri Siddhartha Academy of Higher Education", city: "Tumkur", state: "Karnataka", region: "South" },
    { name: "Srinivas University", city: "Mangalore", state: "Karnataka", region: "South" },
    { name: "BLDE University", city: "Bijapur", state: "Karnataka", region: "South" },
    { name: "K.S. Hegde Medical Academy", city: "Mangalore", state: "Karnataka", region: "South" },
    { name: "Yenepoya Medical College", city: "Mangalore", state: "Karnataka", region: "South" },
    { name: "Mahatma Gandhi Medical College", city: "Pondicherry", state: "Tamil Nadu", region: "South" },
    { name: "Padmashree Dr. D.Y. Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", region: "West" },
    { name: "JSS Medical College", city: "Mysore", state: "Karnataka", region: "South" },
    { name: "Jawaharlal Nehru Medical College", city: "Belgaum", state: "Karnataka", region: "South" },
    { name: "M.S. Ramaiah Medical College", city: "Bangalore", state: "Karnataka", region: "South" },
    { name: "Amrita School of Medicine", city: "Kochi", state: "Kerala", region: "South" },
    { name: "Father Muller Medical College", city: "Mangalore", state: "Karnataka", region: "South" },
    { name: "SRMC & RI", city: "Chennai", state: "Tamil Nadu", region: "South" },
    { name: "PSG Institute of Medical Sciences", city: "Coimbatore", state: "Tamil Nadu", region: "South" },
    { name: "Mahatma Gandhi Mission", city: "Navi Mumbai", state: "Maharashtra", region: "West" },
    { name: "Dr. D.Y. Patil Medical College", city: "Pune", state: "Maharashtra", region: "West" },
    { name: "KLE's Jawaharlal Nehru Medical College", city: "Belgaum", state: "Karnataka", region: "South" },
    { name: "St. John's Medical College", city: "Bangalore", state: "Karnataka", region: "South" },
    { name: "Christian Medical College", city: "Vellore", state: "Tamil Nadu", region: "South" },
    { name: "Kasturba Medical College", city: "Manipal", state: "Karnataka", region: "South" },
    { name: "MVJ Medical College & Research Hospital", city: "Bangalore", state: "Karnataka", region: "South" },
    { name: "AIMS", city: "Kochi", state: "Kerala", region: "South" },
    { name: "Pondicherry Institute of Medical Sciences", city: "Pondicherry", state: "Tamil Nadu", region: "South" },
    { name: "Sree Balaji Medical College", city: "Chennai", state: "Tamil Nadu", region: "South" },
    { name: "Dr. DY Patil Medical College, Kolhapur", city: "Kolhapur", state: "Maharashtra", region: "West" }
  ];

  // Get all unique regions and states
  const regions = ['All', ...new Set(allColleges.map(c => c.region))];
  const states = useMemo(() => {
    const allStates = ['All', ...new Set(allColleges.map(c => c.state))];
    return allStates.sort();
  }, []);

  // Filter colleges based on search term and filters
  const filteredColleges = useMemo(() => {
    return allColleges.filter(college => {
      const matchesSearch = 
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        college.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
        college.state.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion = selectedRegion === 'All' || college.region === selectedRegion;
      const matchesState = selectedState === 'All' || college.state === selectedState;

      return matchesSearch && matchesRegion && matchesState;
    });
  }, [searchTerm, selectedRegion, selectedState]);

  // Group colleges by state
  const collegesByState = useMemo(() => {
    const groupedColleges: Record<string, College[]> = {};
    
    filteredColleges.forEach(college => {
      if (!groupedColleges[college.state]) {
        groupedColleges[college.state] = [];
      }
      groupedColleges[college.state].push(college);
    });
    
    // Sort states alphabetically
    return Object.keys(groupedColleges)
      .sort()
      .reduce((acc: Record<string, College[]>, state) => {
        acc[state] = groupedColleges[state];
        return acc;
      }, {});
  }, [filteredColleges]);

  return (
    <div className="container-custom">
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 shadow-sm border border-gray-100">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-medical-500 focus:border-medical-500"
              placeholder="Search by college name, city, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block p-2.5 focus:ring-medical-500 focus:border-medical-500 min-w-[150px]"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map(region => (
                <option key={region} value={region}>{region === 'All' ? 'All Regions' : region}</option>
              ))}
            </select>
            
            <select
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block p-2.5 focus:ring-medical-500 focus:border-medical-500 min-w-[150px]"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {states.map(state => (
                <option key={state} value={state}>{state === 'All' ? 'All States' : state}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* College List */}
        <div className="space-y-6">
          {Object.keys(collegesByState).length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No colleges found matching your search. Try different keywords or filters.
            </div>
          ) : (
            Object.entries(collegesByState).map(([state, colleges]) => (
              <motion.div 
                key={state}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={stateColors[state] || 'default'} className="px-2.5 py-0.5">
                    {state}
                  </Badge>
                  <div className="h-px flex-grow bg-gray-100"></div>
                  <span className="text-xs text-gray-500 font-medium">{colleges.length} Colleges</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {colleges.map((college, idx) => (
                    <motion.div 
                      key={`${college.name}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-50 hover:border-gray-100 group"
                    >
                      <div className="flex flex-col">
                        <span className={`font-medium text-sm ${regionColors[college.region]?.text || 'text-medical-700'} group-hover:text-medical-800 transition-colors`}>
                          {college.name}
                        </span>
                        <div className="flex items-center mt-1.5">
                          <span className="text-xs text-gray-500 group-hover:text-gray-600">
                            {college.city}
                          </span>
                          <span className="mx-1.5 text-gray-300">•</span>
                          <Badge variant={regionColors[college.region]?.badge || 'default'} className="text-[10px] px-1.5 py-0">
                            {college.region}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
        
        {/* Total Count */}
        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing {filteredColleges.length} of {allColleges.length} colleges
        </div>
      </div>
    </div>
  );
};

export default DeemedMedicalColleges2025;
