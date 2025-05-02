
import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

type College = {
  name: string;
  city: string;
  state: string;
  region: string;
  image: string;
};

// Color mapping for different regions with more vibrant colors
const regionColors: Record<string, {badge: "pink" | "teal" | "amber" | "violet" | "cyan", text: string, gradient: string}> = {
  'North': { badge: "pink", text: 'text-pink-700', gradient: 'from-pink-500 to-rose-500' },
  'South': { badge: "teal", text: 'text-teal-700', gradient: 'from-teal-500 to-emerald-500' },
  'East': { badge: "amber", text: 'text-amber-700', gradient: 'from-amber-500 to-yellow-500' },
  'West': { badge: "violet", text: 'text-violet-700', gradient: 'from-violet-500 to-purple-500' },
  'Central': { badge: "cyan", text: 'text-cyan-700', gradient: 'from-cyan-500 to-blue-500' },
};

// Color mapping for different states using valid badge variants
const stateColors: Record<string, "emerald" | "purple" | "indigo" | "lime" | "rose" | "fuchsia" | "pink" | "amber" | "cyan" | "teal" | "medical" | "info" | "warning" | "success" | "violet" | "modern" | "premium"> = {
  'Karnataka': "emerald",
  'Tamil Nadu': "purple",
  'Maharashtra': "indigo", 
  'Kerala': "lime",
  'Andhra Pradesh': "rose",
  'Telangana': "fuchsia",
  'Delhi': "pink",
  'Uttar Pradesh': "amber",
  'Haryana': "cyan",
  'Punjab': "teal",
  'Rajasthan': "medical",
  'Gujarat': "info",
  'Madhya Pradesh': "warning",
  'Odisha': "success",
  'Bihar': "violet",
  'Jharkhand': "modern",
  'Uttarakhand': "premium",
  'Himachal Pradesh': "emerald",
  'Assam': "warning",
  'Chhattisgarh': "info"
};

// Color palette for college names to make them more visually attractive
const collegeNameColors = [
  'text-blue-600', 'text-purple-600', 'text-indigo-600', 'text-pink-600', 
  'text-rose-600', 'text-violet-600', 'text-fuchsia-600', 'text-emerald-600', 
  'text-teal-600', 'text-cyan-600', 'text-amber-600', 'text-medical-600'
];

const DeemedMedicalColleges2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');

  // Complete data of deemed medical colleges with updated images
  const allColleges: College[] = [
    { name: "Manipal Academy of Higher Education", city: "Manipal", state: "Karnataka", region: "South", image: "/lovable-uploads/972a5fd6-1385-4aa1-b319-ad437d0d4b10.png" },
    { name: "KMC Manipal", city: "Manipal", state: "Karnataka", region: "South", image: "/lovable-uploads/2fa573b3-b1be-4761-8ace-77b266504f41.png" },
    { name: "KMC Mangalore", city: "Mangalore", state: "Karnataka", region: "South", image: "/lovable-uploads/2fa573b3-b1be-4761-8ace-77b266504f41.png" },
    { name: "DY Patil University Mumbai", city: "Mumbai", state: "Maharashtra", region: "West", image: "/lovable-uploads/fac8243f-e8dc-4677-8d5b-ef4d6538aa26.png" },
    { name: "DY Patil University Pune", city: "Pune", state: "Maharashtra", region: "West", image: "/lovable-uploads/fac8243f-e8dc-4677-8d5b-ef4d6538aa26.png" },
    { name: "JNMC (KLE) Belgaum", city: "Belgaum", state: "Karnataka", region: "South", image: "/lovable-uploads/7bb7ed7a-811e-4335-9b53-30a1931cee6c.png" },
    { name: "MGM Mumbai", city: "Mumbai", state: "Maharashtra", region: "West", image: "/lovable-uploads/42abd921-8756-460b-9e00-6a93cd48fc80.png" },
    { name: "MGM Aurangabad", city: "Aurangabad", state: "Maharashtra", region: "West", image: "/lovable-uploads/00e46c61-063a-489e-9054-45966912bd22.png" },
    { name: "Bharti Vidyapeeth Mumbai", city: "Mumbai", state: "Maharashtra", region: "West", image: "/lovable-uploads/4de1b7a3-8174-4f37-94f3-1fb131fb4bc2.png" },
    { name: "Bharti Vidyapeeth Pune", city: "Pune", state: "Maharashtra", region: "West", image: "/lovable-uploads/4de1b7a3-8174-4f37-94f3-1fb131fb4bc2.png" },
    { name: "PIMS Loni", city: "Loni", state: "Maharashtra", region: "West", image: "/lovable-uploads/69823834-0515-4f12-9d2a-a54a8518ae6d.png" },
    { name: "Santosh Ghaziabad", city: "Ghaziabad", state: "Uttar Pradesh", region: "North", image: "/lovable-uploads/382f4ba3-76f4-43d3-81c5-8598af90ea9f.png" },
    { name: "MMU Ambala", city: "Ambala", state: "Haryana", region: "North", image: "/lovable-uploads/857bce0f-3d82-40da-8733-f98b3c4695ec.png" },
    { name: "IMS & SUM Bhubaneshwar", city: "Bhubaneshwar", state: "Odisha", region: "East", image: "/lovable-uploads/6561afac-8521-41b4-9850-8de6b993c976.png" },
    { name: "Kalinga Bhubaneshwar", city: "Bhubaneshwar", state: "Odisha", region: "East", image: "/lovable-uploads/c4a7d3fd-7ea7-46df-877b-43375ec21f84.png" },
    { name: "Amrita Faridabad", city: "Faridabad", state: "Haryana", region: "North", image: "/lovable-uploads/791b44b2-076a-4070-9e57-1150e72a50a4.png" },
    { name: "Graphic Era Dehradun", city: "Dehradun", state: "Uttarakhand", region: "North", image: "/lovable-uploads/857bce0f-3d82-40da-8733-f98b3c4695ec.png" },
    { name: "Krishna Institute of Medical Sciences", city: "Karad", state: "Maharashtra", region: "West", image: "/lovable-uploads/00e46c61-063a-489e-9054-45966912bd22.png" },
    { name: "KLE University", city: "Belgaum", state: "Karnataka", region: "South", image: "/lovable-uploads/835e3c42-0e9b-4b74-99eb-c6596b7438e3.png" },
    { name: "Amrita Vishwa Vidyapeetham", city: "Kochi", state: "Kerala", region: "South", image: "/lovable-uploads/791b44b2-076a-4070-9e57-1150e72a50a4.png" },
    { name: "Sri Ramachandra Medical College", city: "Chennai", state: "Tamil Nadu", region: "South", image: "/lovable-uploads/00e46c61-063a-489e-9054-45966912bd22.png" },
    { name: "Yenepoya University", city: "Mangalore", state: "Karnataka", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "Saveetha University", city: "Chennai", state: "Tamil Nadu", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "SRM Institute of Science and Technology", city: "Chennai", state: "Tamil Nadu", region: "South", image: "/lovable-uploads/791b44b2-076a-4070-9e57-1150e72a50a4.png" },
    { name: "Dr. D.Y. Patil Vidyapeeth", city: "Pune", state: "Maharashtra", region: "West", image: "/lovable-uploads/fac8243f-e8dc-4677-8d5b-ef4d6538aa26.png" },
    { name: "JSS Academy of Higher Education & Research", city: "Mysore", state: "Karnataka", region: "South", image: "/lovable-uploads/92dd88a2-26de-4e09-aff6-522b822759fa.png" },
    { name: "Vinayaka Mission's Research Foundation", city: "Salem", state: "Tamil Nadu", region: "South", image: "/lovable-uploads/00e46c61-063a-489e-9054-45966912bd22.png" },
    { name: "Chettinad Academy of Research and Education", city: "Chennai", state: "Tamil Nadu", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "Nitte University", city: "Mangalore", state: "Karnataka", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "Sharda University", city: "Greater Noida", state: "Uttar Pradesh", region: "North", image: "/lovable-uploads/382f4ba3-76f4-43d3-81c5-8598af90ea9f.png" },
    { name: "GITAM Institute of Medical Sciences", city: "Visakhapatnam", state: "Andhra Pradesh", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "Teerthanker Mahaveer University", city: "Moradabad", state: "Uttar Pradesh", region: "North", image: "/lovable-uploads/382f4ba3-76f4-43d3-81c5-8598af90ea9f.png" },
    { name: "Sri Devaraj Urs Academy of Higher Education", city: "Kolar", state: "Karnataka", region: "South", image: "/lovable-uploads/92dd88a2-26de-4e09-aff6-522b822759fa.png" },
    { name: "Sumandeep Vidyapeeth", city: "Vadodara", state: "Gujarat", region: "West", image: "/lovable-uploads/00e46c61-063a-489e-9054-45966912bd22.png" },
    { name: "Sri Siddhartha Academy of Higher Education", city: "Tumkur", state: "Karnataka", region: "South", image: "/lovable-uploads/92dd88a2-26de-4e09-aff6-522b822759fa.png" },
    { name: "Srinivas University", city: "Mangalore", state: "Karnataka", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "BLDE University", city: "Bijapur", state: "Karnataka", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "K.S. Hegde Medical Academy", city: "Mangalore", state: "Karnataka", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "Yenepoya Medical College", city: "Mangalore", state: "Karnataka", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "Mahatma Gandhi Medical College", city: "Pondicherry", state: "Tamil Nadu", region: "South", image: "/lovable-uploads/42abd921-8756-460b-9e00-6a93cd48fc80.png" },
    { name: "Padmashree Dr. D.Y. Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", region: "West", image: "/lovable-uploads/fac8243f-e8dc-4677-8d5b-ef4d6538aa26.png" },
    { name: "JSS Medical College", city: "Mysore", state: "Karnataka", region: "South", image: "/lovable-uploads/92dd88a2-26de-4e09-aff6-522b822759fa.png" },
    { name: "Jawaharlal Nehru Medical College", city: "Belgaum", state: "Karnataka", region: "South", image: "/lovable-uploads/7bb7ed7a-811e-4335-9b53-30a1931cee6c.png" },
    { name: "M.S. Ramaiah Medical College", city: "Bangalore", state: "Karnataka", region: "South", image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png" },
    { name: "Amrita School of Medicine", city: "Kochi", state: "Kerala", region: "South", image: "/lovable-uploads/791b44b2-076a-4070-9e57-1150e72a50a4.png" }
  ];

  // Get all unique regions and states
  const regions = ['All', ...new Set(allColleges.map(c => c.region))];
  const states = useMemo(() => {
    const allStates = ['All', ...new Set(allColleges.map(c => c.state))];
    return allStates.sort();
  }, []);

  // Function to get a random color for college names to make them visually appealing
  const getCollegeNameColor = (index: number) => {
    return collegeNameColors[index % collegeNameColors.length];
  };

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
        
        {/* College List with enhanced visual styling */}
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
                  <Badge variant={stateColors[state] || "default"} className="px-2.5 py-0.5">
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
                        {/* College name with colorful styling */}
                        <span className={`font-medium text-sm ${getCollegeNameColor(idx)} group-hover:text-medical-800 transition-colors`}>
                          {college.name}
                        </span>
                        <div className="flex items-center mt-1.5">
                          {/* City name with enhanced styling */}
                          <span className="text-xs font-medium bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-gray-900">
                            {college.city}
                          </span>
                          <span className="mx-1.5 text-gray-300">•</span>
                          {/* Colorful badge for region */}
                          <Badge variant={regionColors[college.region]?.badge || "default"} className="text-[10px] px-1.5 py-0">
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
