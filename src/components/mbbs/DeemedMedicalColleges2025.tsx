
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, GraduationCap, University } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MedicalCollege {
  name: string;
  location: string;
}

const DeemedMedicalColleges2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Parse college data to extract location from name
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

  // Group colleges by first letter for alphabetical listing
  const collegesByLetter: { [key: string]: MedicalCollege[] } = {};
  filteredColleges.forEach(college => {
    const firstLetter = college.name.charAt(0).toUpperCase();
    if (!collegesByLetter[firstLetter]) {
      collegesByLetter[firstLetter] = [];
    }
    collegesByLetter[firstLetter].push(college);
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="my-12 container-custom">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="inline-flex justify-center items-center mb-3">
          <University className="w-6 h-6 mr-2 text-medical-600" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Deemed Medical Colleges in India – 2025
          </h2>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Comprehensive list of deemed universities offering MBBS programs across India
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
              placeholder="Search colleges by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-shrink-0">
            <select
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
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
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-medical-50 to-blue-50 border-none">
          <CardContent className="p-4 text-center">
            <GraduationCap className="w-6 h-6 mx-auto mb-2 text-medical-600" />
            <h3 className="text-sm font-medium text-gray-600">Total Colleges</h3>
            <p className="text-2xl font-bold text-medical-700">{collegeData.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-medical-50 to-blue-50 border-none">
          <CardContent className="p-4 text-center">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-medical-600" />
            <h3 className="text-sm font-medium text-gray-600">Unique Locations</h3>
            <p className="text-2xl font-bold text-medical-700">{regions.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-medical-50 to-blue-50 border-none">
          <CardContent className="p-4 text-center">
            <University className="w-6 h-6 mx-auto mb-2 text-medical-600" />
            <h3 className="text-sm font-medium text-gray-600">Showing</h3>
            <p className="text-2xl font-bold text-medical-700">{filteredColleges.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-medical-50 to-blue-50 border-none">
          <CardContent className="p-4 text-center">
            <GraduationCap className="w-6 h-6 mx-auto mb-2 text-medical-600" />
            <h3 className="text-sm font-medium text-gray-600">NEET Required</h3>
            <p className="text-2xl font-bold text-medical-700">Yes</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* College List */}
      {filteredColleges.length > 0 ? (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {Object.keys(collegesByLetter).sort().map(letter => (
            <div key={letter} className="mb-6">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-700 font-bold text-lg">
                  {letter}
                </div>
                <div className="ml-3 h-[1px] flex-grow bg-gradient-to-r from-medical-200 to-transparent"></div>
              </div>
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {collegesByLetter[letter].map((college, idx) => (
                  <motion.div
                    key={`${college.name}-${idx}`}
                    variants={itemVariants}
                    className="relative"
                  >
                    <Card className={cn(
                      "hover:shadow-lg transition-all duration-300 border-l-4 border-l-medical-500 h-full",
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    )}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-1">{college.name}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-medical-500" />
                          <span>{college.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500">No colleges found matching your criteria. Please try a different search term or filter.</p>
        </div>
      )}
    </div>
  );
};

export default DeemedMedicalColleges2025;
