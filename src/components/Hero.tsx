
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building, CheckCircle, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Background images with medical/education themes
  const backgroundImages = [
    '/lovable-uploads/7a37d019-89ff-4632-abcf-8a6187c5bdde.png', // Keep the original image
    '/lovable-uploads/901ceaae-cb30-4393-bf05-87aa9b1f9318.png',
    '/lovable-uploads/66449f65-b3de-4405-9be8-67e1274524ac.png',
    '/lovable-uploads/5e1e7f99-8599-4957-a15a-dfc9dc24bc0d.png',
    '/lovable-uploads/5f59b0ad-1549-4a27-be70-e09b7f63806c.png'
  ];

  useEffect(() => {
    // Set visibility with a small delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    // Setup background image rotation
    const bgRotation = setInterval(() => {
      setCurrentBgIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Rotate every 5 seconds
    
    return () => {
      clearTimeout(timer);
      clearInterval(bgRotation);
    };
  }, [backgroundImages.length]);

  // Key highlights with icons
  const highlights = [
    {
      icon: <Users className="h-5 w-5" />,
      text: 'Successfully Guided 1,200+ Medical Aspirants',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: <Building className="h-5 w-5" />,
      text: '100+ College Affiliates',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: 'Proven 95% Success in Admissions',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      text: 'Proven Legacy of 12+ Years in Counseling',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: <User className="h-5 w-5" />,
      text: '25+ Dedicated Expert Counselors',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Rotating background images with animation */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentBgIndex === index ? 0.25 : 0 }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 text-sm font-medium">
                Medical Admission Experts
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Your Journey to Medical Excellence 
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 max-w-xl font-bold">
                Expert guidance for MBBS, PG (MD/MS) & SS (Courses) Admissions in top medical colleges. Transform your medical aspirations into reality.
              </p>

              {/* Highlight cards with animated entrance */}
              <div className="space-y-3 mt-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                  >
                    <div className={`flex items-center space-x-4 p-3 bg-white rounded-xl shadow-md border-l-4 bg-gradient-to-r border-${highlight.color.split(' ')[0]}`}>
                      <div className={`flex-shrink-0 p-2 rounded-full bg-gradient-to-r ${highlight.color} text-white`}>
                        {highlight.icon}
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-800">
                        {highlight.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" asChild>
                  <Link to="/services">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-2 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300" asChild>
                  <Link to="/know-us">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Image column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 z-10"></div>
                
                <img
                  src="/lovable-uploads/7a37d019-89ff-4632-abcf-8a6187c5bdde.png"
                  alt="Medical student with stethoscope"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="eager"
                />

                {/* Achievement badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-3 z-20"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">95%</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">Success Rate</p>
                      <p className="text-xs text-gray-600">in admissions</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
