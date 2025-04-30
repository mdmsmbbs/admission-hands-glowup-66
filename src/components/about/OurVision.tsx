
import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const OurVision = () => {
  return (
    <div className="py-6 bg-gradient-to-b from-white to-medical-50/30">
      <div className="container-custom max-w-4xl text-center px-4">
        <motion.div 
          className="relative inline-block mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-medical-100 rounded-full blur-2xl opacity-30 animate-pulse" />
          <Sparkles className="w-10 h-10 text-medical-600 relative z-10" />
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Vision
        </motion.h2>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-medical-100/0 via-medical-100/30 to-medical-100/0 blur-xl" />
          <p className="relative z-10 text-xl text-gray-800 leading-relaxed font-medium px-4 md:px-8">
            To become India's most reliable and ethical medical admission consultancy — guiding students not just toward admission, but toward a lifetime of success in healthcare.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
