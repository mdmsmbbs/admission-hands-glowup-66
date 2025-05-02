
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative pt-24 pb-20 md:pt-28 md:pb-24 hero-section" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1470')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full font-medium mb-6 inline-block"
          >
            Medical Admission Experts
          </motion.div>
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              Your Journey to Medical Excellence
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 leading-tight">
              Starts Here
            </h2>
          </motion.div>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            Expert guidance for MBBS, PG (MD/MS) & SS (Courses) Admissions
            in top medical colleges. Transform your medical aspirations into
            reality.
          </motion.p>
          
          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 mb-8 w-full"
          >
            {/* Feature item 1 */}
            <div className="bg-white rounded-lg p-4 flex items-center shadow-md">
              <Check size={24} className="text-blue-600 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Complete Admission Support — From eligibility to enrollment</span>
            </div>
            
            {/* Feature item 2 */}
            <div className="bg-white rounded-lg p-4 flex items-center shadow-md">
              <Check size={24} className="text-purple-600 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Transparent Process — No hidden fees</span>
            </div>
            
            {/* Feature item 3 */}
            <div className="bg-white rounded-lg p-4 flex items-center shadow-md">
              <Check size={24} className="text-green-600 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Latest Seat & Fee Insights — Stay informed, choose wisely</span>
            </div>
            
            {/* Feature item 4 */}
            <div className="bg-white rounded-lg p-4 flex items-center shadow-md">
              <Check size={24} className="text-orange-500 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Trusted Nationwide — Preferred by aspirants across India & abroad</span>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
            >
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <Link 
              to="/know-us" 
              className="border-2 border-gray-300 text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
