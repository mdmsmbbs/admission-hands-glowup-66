
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

type College = {
  name: string;
  city: string;
  fees: string;
};

// Color palette for college names to make them more visually attractive
const collegeNameColors = [
  'text-blue-600', 'text-purple-600', 'text-indigo-600', 'text-pink-600', 
  'text-rose-600', 'text-violet-600', 'text-fuchsia-600', 'text-emerald-600', 
  'text-teal-600', 'text-cyan-600', 'text-amber-600', 'text-medical-600'
];

const DeemedMedicalColleges2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Complete list of deemed medical colleges with fees
  const allColleges: College[] = [
    { name: "Kasturba Medical College", city: "Manipal", fees: "Starts From ₹25L per year" },
    { name: "Kasturba Medical College", city: "Mangalore", fees: "Starts From ₹23L per year" },
    { name: "Sri Ramachandra Medical College & Research Institute", city: "Chennai", fees: "Starts From ₹22L per year" },
    { name: "Jawaharlal Nehru Medical College (KLE University)", city: "Belgaum", fees: "Starts From ₹20L per year" },
    { name: "JSS Medical College", city: "Mysore", fees: "Starts From ₹21L per year" },
    { name: "Bharati Vidyapeeth University Medical College", city: "Pune", fees: "Starts From ₹19L per year" },
    { name: "Padmashri Dr. D Y Patil Medical College", city: "Pimpri", fees: "Starts From ₹19.5L per year" },
    { name: "Amrita Institute of Medical Sciences", city: "Kochi", fees: "Starts From ₹18L per year" },
    { name: "Yenepoya Medical College", city: "Mangalore", fees: "Starts From ₹17.5L per year" },
    { name: "SRM Medical College Hospital and Research Centre", city: "Chennai", fees: "Starts From ₹20L per year" },
    { name: "Sree Balaji Medical College and Hospital", city: "Chennai", fees: "Starts From ₹18L per year" },
    { name: "Saveetha Medical College", city: "Chennai", fees: "Starts From ₹18.5L per year" },
    { name: "Meenakshi Medical College and Research Institute", city: "Kanchipuram", fees: "Starts From ₹17L per year" },
    { name: "Vinayaka Missions Medical College", city: "Salem", fees: "Starts From ₹16L per year" },
    { name: "Chettinad Hospital and Research Institute", city: "Kelambakkam", fees: "Starts From ₹17L per year" },
    { name: "Sri Lakshmi Narayana Institute of Medical Sciences", city: "Puducherry", fees: "Starts From ₹16.5L per year" },
    { name: "Mahatma Gandhi Medical College and Research Institute", city: "Puducherry", fees: "Starts From ₹18L per year" },
    { name: "Sri Siddhartha Medical College", city: "Tumkur", fees: "Starts From ₹16L per year" },
    { name: "Dr. D. Y. Patil Medical College", city: "Kolhapur", fees: "Starts From ₹18L per year" },
    { name: "Dr. D. Y. Patil Medical College", city: "Navi Mumbai", fees: "Starts From ₹21L per year" },
    { name: "Dr. D. Y. Patil Medical College", city: "Pune", fees: "Starts From ₹19L per year" },
    { name: "Krishna Institute of Medical Sciences", city: "Karad", fees: "Starts From ₹18L per year" },
    { name: "Datta Meghe Institute of Medical Sciences", city: "Wardha", fees: "Starts From ₹16L per year" },
    { name: "MGM Medical College", city: "Aurangabad", fees: "Starts From ₹17L per year" },
    { name: "MGM Medical College", city: "Navi Mumbai", fees: "Starts From ₹19L per year" },
    { name: "Symbiosis Medical College for Women", city: "Pune", fees: "Starts From ₹20L per year" },
    { name: "Rural Medical College", city: "Loni", fees: "Starts From ₹16L per year" },
    { name: "Hamdard Institute of Medical Sciences and Research", city: "New Delhi", fees: "Starts From ₹17L per year" },
    { name: "Maharishi Markandeshwar Institute of Medical Sciences and Research", city: "Ambala", fees: "Starts From ₹15L per year" },
    { name: "SBKS Medical Institute and Research Centre", city: "Vadodara", fees: "Starts From ₹15.5L per year" },
    { name: "Shri Sathya Sai Medical College and Research Institute", city: "Kancheepuram", fees: "Starts From ₹16L per year" },
    { name: "Sree Gokulam Medical College and Research Foundation", city: "Thiruvananthapuram", fees: "Starts From ₹17L per year" },
    { name: "Sri Devaraj Urs Medical College", city: "Kolar", fees: "Starts From ₹15L per year" },
    { name: "K.S. Hegde Medical Academy", city: "Mangalore", fees: "Starts From ₹16.5L per year" },
    { name: "Aarupadai Veedu Medical College", city: "Puducherry", fees: "Starts From ₹15L per year" },
    { name: "Sri Manakula Vinayagar Medical College and Hospital", city: "Puducherry", fees: "Starts From ₹16L per year" },
    { name: "Sri Venkateshwaraa Medical College Hospital and Research Centre", city: "Puducherry", fees: "Starts From ₹15.5L per year" },
    { name: "Vinayaka Missions Medical College", city: "Karaikal", fees: "Starts From ₹15L per year" },
    { name: "Saveetha Medical College", city: "Kanchipuram", fees: "Starts From ₹17L per year" },
    { name: "Meenakshi Medical College", city: "Enathur", fees: "Starts From ₹16L per year" },
    { name: "Sree Balaji Medical College", city: "Chromepet", fees: "Starts From ₹17L per year" },
    { name: "SRM Medical College", city: "Kattankulathur", fees: "Starts From ₹19L per year" },
    { name: "Chettinad Hospital and Research Institute", city: "Kelambakkam", fees: "Starts From ₹17L per year" },
    { name: "Sri Ramachandra Medical College", city: "Porur", fees: "Starts From ₹22L per year" },
    { name: "Amrita Institute of Medical Sciences", city: "Faridabad", fees: "Starts From ₹19L per year" },
    { name: "J.G.M.M. Medical College", city: "Hubballi", fees: "Starts From ₹16L per year" },
    { name: "B.L.D.E. University", city: "Bijapur", fees: "Starts From ₹15L per year" },
    { name: "RajaRajeswari Medical College and Hospital", city: "Bengaluru", fees: "Starts From ₹18L per year" },
    { name: "Shri B.M. Patil Medical College", city: "Bijapur", fees: "Starts From ₹15.5L per year" },
    { name: "Kalinga Institute of Medical Sciences", city: "Bhubaneswar", fees: "Starts From ₹16L per year" },
    { name: "Siksha 'O' Anusandhan Institute of Medical Sciences and SUM Hospital", city: "Bhubaneswar", fees: "Starts From ₹17L per year" },
    { name: "Sri Siddhartha Institute of Medical Sciences and Research Centre", city: "Bengaluru", fees: "Starts From ₹17.5L per year" },
    { name: "Sri Venkateshwaraa Medical College", city: "Puducherry", fees: "Starts From ₹15.5L per year" },
    { name: "Vinayaka Missions Medical College", city: "Salem", fees: "Starts From ₹16L per year" },
    { name: "Sri Balaji Vidyapeeth", city: "Puducherry", fees: "Starts From ₹16.5L per year" },
    { name: "Mahatma Gandhi Medical College", city: "Puducherry", fees: "Starts From ₹18L per year" },
    { name: "Sri Manakula Vinayagar Medical College", city: "Puducherry", fees: "Starts From ₹15.5L per year" },
    { name: "Aarupadai Veedu Medical College", city: "Puducherry", fees: "Starts From ₹15L per year" },
    { name: "Sri Venkateshwaraa Medical College", city: "Puducherry", fees: "Starts From ₹15.5L per year" }
  ];

  // Function to get a random color for college names to make them visually appealing
  const getCollegeNameColor = (index: number) => {
    return collegeNameColors[index % collegeNameColors.length];
  };

  // Filter colleges based on search term
  const filteredColleges = allColleges.filter(college => {
    return college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           college.city.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container-custom">
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 shadow-sm border border-gray-100">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-medical-500 focus:border-medical-500"
              placeholder="Search by college name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* College List with enhanced visual styling */}
        <div className="space-y-6">
          {filteredColleges.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No colleges found matching your search. Try different keywords.
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredColleges.map((college, idx) => (
                  <motion.div 
                    key={`${college.name}-${college.city}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.02 }}
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
                      </div>
                      <div className="mt-1 text-xs text-emerald-600 font-medium">
                        {college.fees}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
