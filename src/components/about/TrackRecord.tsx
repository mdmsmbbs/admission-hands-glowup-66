
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Medal, Users, BookOpen } from 'lucide-react';

const TrackRecord = () => {
  return (
    <section className="py-10 bg-gradient-to-t from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Track Record</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built a reputation for excellence in medical admissions consultancy over the years
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mx-auto max-w-5xl">
          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-2.5 bg-blue-50 rounded-full mb-3">
              <CheckCircle className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">95%+</div>
            <div className="text-center text-sm text-gray-600">Success Rate For Admissions</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-2.5 bg-teal-50 rounded-full mb-3">
              <Medal className="h-5 w-5 text-teal-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">12+</div>
            <div className="text-center text-sm text-gray-600">Years of Excellence</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-2.5 bg-purple-50 rounded-full mb-3">
              <Users className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">1200+</div>
            <div className="text-center text-sm text-gray-600">Successfully Facilitated MBBS Admissions</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="p-2.5 bg-red-50 rounded-full mb-3">
              <BookOpen className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">100+</div>
            <div className="text-center text-sm text-gray-600">College Affiliations</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
