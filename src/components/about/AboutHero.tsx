
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg width="1000" height="1000" viewBox="0 0 100 100">
            <path
              d="M87.3,73.1c-0.2-0.1-0.4-0.2-0.7-0.3c-0.2-0.1-0.5-0.1-0.7-0.2c-0.3,0-0.5,0-0.8,0c-0.3,0-0.5,0-0.8,0.1 c-0.2,0.1-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.2-0.7,0.3c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.1-0.4,0.3-0.6,0.5c-0.2,0.2-0.3,0.3-0.5,0.5 c-0.1,0.2-0.3,0.4-0.4,0.6c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.1,0.5-0.1,0.7c0,0.2-0.1,0.5-0.1,0.8 c0,0.3,0,0.5,0.1,0.8c0,0.2,0.1,0.5,0.1,0.7c0.1,0.2,0.1,0.5,0.2,0.7c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.2,0.3,0.4,0.4,0.6 c0.1,0.2,0.3,0.4,0.5,0.5c0.2,0.2,0.4,0.3,0.6,0.5c0.2,0.1,0.4,0.3,0.6,0.4c0.2,0.1,0.4,0.2,0.7,0.3c0.2,0.1,0.5,0.2,0.7,0.2 c0.2,0.1,0.5,0.1,0.8,0.1c0.3,0,0.5,0,0.8,0c0.2-0.1,0.5-0.1,0.7-0.2c0.2-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.4-0.2,0.6-0.4 c0.2-0.1,0.4-0.3,0.6-0.5c0.2-0.2,0.3-0.3,0.5-0.5c0.1-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.4,0.2-0.7 c0.1-0.2,0.1-0.5,0.1-0.7c0-0.3,0.1-0.5,0.1-0.8c0-0.3,0-0.5-0.1-0.8c0-0.2-0.1-0.5-0.1-0.7c-0.1-0.2-0.1-0.5-0.2-0.7 c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.2-0.4-0.4-0.6c-0.2-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.3-0.6-0.5 C87.7,73.3,87.5,73.2,87.3,73.1z M83.1,70.5c-0.2-0.1-0.4-0.2-0.7-0.3c-0.2-0.1-0.5-0.1-0.7-0.2c-0.3,0-0.5,0-0.8,0 c-0.3,0-0.5,0-0.8,0.1c-0.2,0.1-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.2-0.7,0.3c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.1-0.4,0.3-0.6,0.5 c-0.2,0.2-0.3,0.3-0.5,0.5c-0.1,0.2-0.3,0.4-0.4,0.6"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            ></path>
          </svg>
        </div>
      </div>
      
      <div className="container-custom max-w-5xl mx-auto pb-10 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Who We Are</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              With 12+ years of experience, Admission Hands is a reliable partner in your medical admission journey, ensuring transparency, accessibility, and ethical support.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Trusted Advisors</h3>
            <p className="text-gray-600">Over 12 years of dedicated service with proven results in medical college admissions across India.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-medical-50 text-medical-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Counselors</h3>
            <p className="text-gray-600">25+ specialized counselors with in-depth knowledge of medical education and admission processes.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-teal-50 text-teal-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ethical Standards</h3>
            <p className="text-gray-600">Committed to transparency, integrity, and student-centric approach in every consultation.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
