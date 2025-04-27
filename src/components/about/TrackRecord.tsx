
import React from 'react';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';

const TrackRecord = () => {
  return (
    <div className="py-6 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Our Track Record</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-medical-50 hover:shadow-md transition-shadow text-center">
            <div className="h-24 mb-3 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c"
                alt="Students"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Users className="h-8 w-8 text-medical-600 mb-2 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">1000+</h3>
            <p className="text-gray-600 text-sm text-center">Students Successfully Placed</p>
          </div>
          
          <div className="p-4 rounded-xl bg-teal-50 hover:shadow-md transition-shadow text-center">
            <div className="h-24 mb-3 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                alt="Programs"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <BookOpen className="h-8 w-8 text-teal-600 mb-2 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">Multiple Programs</h3>
            <p className="text-gray-600 text-sm text-center">MBBS, MD/MS, BDS & More</p>
          </div>
          
          <div className="p-4 rounded-xl bg-amber-50 hover:shadow-md transition-shadow text-center">
            <div className="h-24 mb-3 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                alt="Pan India"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <GraduationCap className="h-8 w-8 text-amber-600 mb-2 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">Pan India</h3>
            <p className="text-gray-600 text-sm text-center">Support Across Major States</p>
          </div>
          
          <div className="p-4 rounded-xl bg-blue-50 hover:shadow-md transition-shadow text-center">
            <div className="h-24 mb-3 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
                alt="Specialized"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Award className="h-8 w-8 text-blue-600 mb-2 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">Specialized</h3>
            <p className="text-gray-600 text-sm text-center">NRI & Deemed Universities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
