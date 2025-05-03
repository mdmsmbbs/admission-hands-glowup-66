
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Split animations to improve performance
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Optimize animation settings for better performance
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.3
      } 
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 hero-section w-full" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1470&auto=format&fit=crop&quality=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
      role="banner"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Static content for fastest LCP */}
          <div className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full font-medium mb-4 md:mb-6 inline-block">
            Medical Admission Experts
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1">
            Your Journey to Medical Excellence
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 leading-tight mb-3">
            Starts Here
          </h2>
          
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl">
            Expert guidance for MBBS, PG (MD/MS) &amp; SS (Courses) Admissions
            in top medical colleges.
          </p>
          
          {isMounted && (
            <motion.div 
              className="space-y-3 mb-6 w-full"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={containerAnimation}
            >
              {/* Feature list with optimized animations */}
              <motion.div variants={itemAnimation} className="bg-white rounded-lg p-3 flex items-center shadow-md">
                <Check size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm md:text-base">Complete Admission Support — From eligibility to enrollment</span>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="bg-white rounded-lg p-3 flex items-center shadow-md">
                <Check size={20} className="text-purple-600 mr-2 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm md:text-base">Transparent Process — No hidden fees</span>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="bg-white rounded-lg p-3 flex items-center shadow-md">
                <Check size={20} className="text-green-600 mr-2 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm md:text-base">Latest Seat & Fee Insights — Stay informed, choose wisely</span>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="bg-white rounded-lg p-3 flex items-center shadow-md">
                <Check size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm md:text-base">Trusted Nationwide — Preferred by aspirants across India & abroad</span>
              </motion.div>
            </motion.div>
          )}
          
          {/* CTA Buttons - Critical path so not animated */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors inline-flex items-center justify-center"
            >
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <Link 
              to="/know-us" 
              className="border-2 border-gray-300 text-white hover:bg-white/10 px-5 py-2 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
