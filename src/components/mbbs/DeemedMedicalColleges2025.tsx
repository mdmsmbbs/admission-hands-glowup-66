import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, GraduationCap, University, BookOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface MedicalCollege {
  name: string;
  location: string;
}

const DeemedMedicalColleges2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // College data with location
  const collegeData: MedicalCollege[] = [
    { name: "Sri Ramachandra Medical College and Research Institute", location: "Chennai" },
    { name: "Sree Balaji Medical College and Hospital", location: "Chennai" },
    { name: "Chettinad Hospital and Research Institute", location: "Kanchipuram" },
    { name: "SRM Medical College Hospital and Research Centre", location: "Kanchipuram" },
    { name: "Meenakshi Medical College and Research Institute", location: "Kanchipuram" },
    { name: "Saveetha Medical College and Hospital", location: "Kanchipuram" },
    { name: "Shri Sathya Sai Medical College and Research Institute", location: "Kanchipuram" },
    { name: "ACS Medical College and Hospital", location: "Chennai" },
    { name: "Bhaarat Medical College and Hospital", location: "Chennai" },
    { name: "VELS Medical College and Hospital", location: "Chennai" },
    { name: "Vinayaka Missions Kirupananda Variyar Medical College", location: "Salem" },
    { name: "Sri Lakshmi Narayana Institute of Medical Sciences", location: "Puducherry" },
    { name: "Aarupadai Veedu Medical College", location: "Puducherry" },
    { name: "Mahatma Gandhi Medical College and Research Institute", location: "Puducherry" },
    { name: "Mahatma Gandhi Mission's Medical College", location: "Navi Mumbai" },
    { name: "Mahatma Gandhi Mission's Medical College", location: "Aurangabad" },
    { name: "Dr. D.Y. Patil Medical College, Pimpri", location: "Pune" },
    { name: "Dr. D.Y. Patil Medical College", location: "Navi Mumbai" },
    { name: "Rural Medical College", location: "Loni" },
    { name: "Krishna Institute of Medical Sciences", location: "Karad" },
    { name: "Bharati Vidyapeeth Medical College", location: "Pune" },
    { name: "Bharati Vidyapeeth Medical College", location: "Sangli" },
    { name: "Datta Meghe Institute of Medical Sciences", location: "Wardha" },
    { name: "Dr. D.Y. Patil Medical College", location: "Kolhapur" },
    { name: "MGM Medical College", location: "Navi Mumbai" },
    { name: "MGM Medical College", location: "Aurangabad" },
    { name: "Kasturba Medical College", location: "Manipal" },
    { name: "Kasturba Medical College", location: "Mangalore" },
    { name: "K.S. Hegde Medical Academy", location: "Mangalore" },
    { name: "JSS Medical College", location: "Mysuru" },
    { name: "Jawaharlal Nehru Medical College", location: "Belagavi" },
    { name: "Sri Devaraj Urs Medical College", location: "Kolar" },
    { name: "Sri Siddhartha Medical College", location: "Tumkur" },
    { name: "Sri Siddhartha Institute of Medical Sciences and Research Centre", location: "Bangalore" },
    { name: "Yenepoya Medical College", location: "Mangalore" },
    { name: "B.L.D.E.A.'s Shri B.M. Patil Medical College", location: "Vijayapura" },
    { name: "RajaRajeswari Medical College and Hospital", location: "Bangalore" },
    { name: "JGMM Medical College", location: "Hubballi" },
    { name: "GITAM Institute of Medical Sciences and Research", location: "Visakhapatnam, Andhra Pradesh" },
    { name: "Hamdard Institute of Medical Sciences and Research", location: "New Delhi" },
    { name: "Smt. B.K. Shah Medical Institute and Research Center", location: "Vadodara, Gujarat" },
    { name: "Maharishi Markandeshwar Institute of Medical Sciences and Research", location: "Mullana, Haryana" },
    { name: "Tata Manipal Medical College", location: "Jamshedpur, Jharkhand" },
    { name: "Amrita Institute of Medical Sciences", location: "Kochi, Kerala" },
    { name: "Institute of Medical Sciences and SUM Hospital", location: "Bhubaneswar, Odisha" },
    { name: "Kalinga Institute of Medical Sciences", location: "Bhubaneswar, Odisha" },
    { name: "Santosh Medical College", location: "Ghaziabad, Uttar Pradesh" },
    { name: "Swami Rama Himalayan Institute of Medical Sciences", location: "Dehradun, Uttarakhand" },
    // Adding the missing colleges from your original list
    { name: "Amrita School of Medicine", location: "Faridabad, Haryana" },
    { name: "Sumandeep Vidyapeeth", location: "Vadodara, Gujarat" },
    { name: "Teerthanker Mahaveer Medical College", location: "Moradabad, Uttar Pradesh" },
    { name: "Dr. M.G.R. Educational and Research Institute", location: "Chennai, Tamil Nadu" },
    { name: "Vinayaka Mission's Medical College", location: "Karaikal, Puducherry" },
    { name: "Vinayaka Mission's Kirupananda Variyar Medical College", location: "Salem, Tamil Nadu" },
    { name: "Sri Ramachandra Institute of Higher Education", location: "Chennai, Tamil Nadu" },
    { name: "Sharda University School of Medical Sciences", location: "Greater Noida, Uttar Pradesh" },
    { name: "Pravara Institute of Medical Sciences", location: "Loni, Maharashtra" },
    { name: "DPU Dr. D.Y. Patil Medical College", location: "Pune, Maharashtra" },
    { name: "JSS Academy of Higher Education & Research", location: "Mysuru, Karnataka" }
  ];

  // Extract unique regions for filter
  const regions = Array.from(new Set(collegeData.map(college => college.location)));

  // Filter colleges based on search term and selected region
  const filteredColleges = collegeData.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? college.location === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  // Group colleges by location for compact display
  const collegesByLocation: { [key: string]: MedicalCollege[] } = {};
  filteredColleges.forEach(college => {
    const location = college.location.split(',')[0]; // Get just the city name
    if (!collegesByLocation[location]) {
      collegesByLocation[location] = [];
    }
    collegesByLocation[location].push(college);
  });

  return (
    <div className="container-custom">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <div className="inline-flex justify-center items-center mb-2">
          <BookOpen className="w-5 h-5 mr-2 text-medical-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Complete List of Deemed Universities Offering MBBS
          </h2>
        </div>
      </motion.div>

      {/* Compact Search Bar */}
      <div className="bg-white p-3 rounded-lg shadow-sm mb-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="pl-9 pr-3 py-1.5 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-medical-500 text-sm"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-3 py-1.5 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-medical-500 text-sm bg-white min-w-[150px]"
          value={selectedRegion || ''}
          onChange={(e) => setSelectedRegion(e.target.value || null)}
        >
          <option value="">All Locations</option>
          {regions.sort().map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div className="text-sm text-gray-500 flex items-center whitespace-nowrap">
          <span className="font-medium text-medical-600">{filteredColleges.length}</span>
          <span className="ml-1">colleges found</span>
        </div>
      </div>

      {/* Compact College List */}
      {filteredColleges.length > 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 gap-4"
        >
          {Object.keys(collegesByLocation).sort().map((location) => (
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-medical-50 to-blue-50 px-4 py-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-medical-600" />
                <h3 className="font-medium text-gray-900">{location}</h3>
                <Badge variant="outline" className="ml-auto bg-white text-xs">
                  {collegesByLocation[location].length} colleges
                </Badge>
              </div>
              <div className="divide-y divide-gray-100">
                {collegesByLocation[location].map((college, idx) => (
                  <div 
                    key={`${college.name}-${idx}`}
                    className={cn(
                      "px-4 py-2 hover:bg-gray-50 transition-colors flex items-start",
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    )}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{college.name}</p>
                      <p className="text-xs text-gray-500">{college.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm">No colleges found matching your criteria.</p>
        </div>
      )}

      {/* Mobile Show More Button (displayed only when list is long) */}
      {filteredColleges.length > 10 && (
        <div className="mt-4 text-center md:hidden">
          <button 
            className="px-4 py-2 bg-medical-50 text-medical-700 rounded-md text-sm font-medium hover:bg-medical-100 transition-colors"
          >
            Show All {filteredColleges.length} Colleges
          </button>
        </div>
      )}
    </div>
  );
};

export default DeemedMedicalColleges2025;
