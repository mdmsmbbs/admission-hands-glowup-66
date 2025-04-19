
import React from 'react';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';

const TrackRecord = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Track Record</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-medical-50 hover:shadow-md transition-shadow">
            <Users className="h-10 w-10 text-medical-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">1000+</h3>
            <p className="text-gray-600">Students Successfully Placed</p>
          </div>
          
          <div className="p-6 rounded-xl bg-teal-50 hover:shadow-md transition-shadow">
            <BookOpen className="h-10 w-10 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Multiple Programs</h3>
            <p className="text-gray-600">MBBS, MD/MS, BDS & More</p>
          </div>
          
          <div className="p-6 rounded-xl bg-amber-50 hover:shadow-md transition-shadow">
            <GraduationCap className="h-10 w-10 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pan India</h3>
            <p className="text-gray-600">Support Across Major States</p>
          </div>
          
          <div className="p-6 rounded-xl bg-blue-50 hover:shadow-md transition-shadow">
            <Award className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Specialized</h3>
            <p className="text-gray-600">NRI & Deemed Universities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
