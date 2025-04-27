
import React from 'react';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';

const TrackRecord = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Track Record</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-medical-50 to-medical-100/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-6 text-center">
              <div className="mb-6">
                <Users className="h-10 w-10 text-medical-600 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Students Successfully Placed</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-teal-100/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-6 text-center">
              <div className="mb-6">
                <BookOpen className="h-10 w-10 text-teal-600 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Multiple Programs</h3>
              <p className="text-gray-600">MBBS, MD/MS, BDS & More</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-6 text-center">
              <div className="mb-6">
                <GraduationCap className="h-10 w-10 text-amber-600 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pan India</h3>
              <p className="text-gray-600">Support Across Major States</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-6 text-center">
              <div className="mb-6">
                <Award className="h-10 w-10 text-blue-600 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Specialized</h3>
              <p className="text-gray-600">NRI & Deemed Universities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
