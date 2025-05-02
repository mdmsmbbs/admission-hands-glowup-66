
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Medal, Users, BookOpen } from 'lucide-react';

const TrackRecord = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built a reputation for excellence in medical admissions consultancy over the years
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <motion.div 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-blue-50 rounded-full mb-4">
              <CheckCircle className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-3">95%+</div>
            <div className="text-center text-gray-600">Success Rate For Admissions</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-teal-50 rounded-full mb-4">
              <Medal className="h-6 w-6 text-teal-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-3">12+</div>
            <div className="text-center text-gray-600">Years of Excellence</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-3">1200+</div>
            <div className="text-center text-gray-600">Successfully Facilitated MBBS Admissions</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-red-50 rounded-full mb-4">
              <BookOpen className="h-6 w-6 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-3">60+</div>
            <div className="text-center text-gray-600">College Affiliations</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
