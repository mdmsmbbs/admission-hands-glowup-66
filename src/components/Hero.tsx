
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
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

  // Features with their color schemes
  const features = [
    {
      text: 'Complete Admission Support — From eligibility to enrollment',
      color: 'from-blue-600 to-teal-500',
      icon: <CheckCircle className="h-5 w-5 text-blue-600" />
    },
    {
      text: 'Transparent Process — No hidden fees',
      color: 'from-purple-600 to-blue-500',
      icon: <CheckCircle className="h-5 w-5 text-purple-600" />
    },
    {
      text: 'Latest Seat & Fee Insights — Stay informed, choose wisely',
      color: 'from-teal-500 to-emerald-500',
      icon: <CheckCircle className="h-5 w-5 text-teal-600" />
    },
    {
      text: 'Trusted Nationwide — Preferred by aspirants across India & abroad',
      color: 'from-orange-500 to-red-500',
      icon: <CheckCircle className="h-5 w-5 text-orange-600" />
    }
  ];

  // Stats for quick metrics
  const stats = [
    { value: '1200+', label: 'Students Placed' },
    { value: '95%', label: 'Success Rate' },
    { value: '100+', label: 'Partner Colleges' },
    { value: '25+', label: 'Expert Counselors' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Rotating background images with animation */}
      <div className="absolute inset-0 overflow-hidden">
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
        
        {/* Decorative elements */}
        <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-1 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column: Content */}
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

              {/* Features list with animated entrance */}
              <div className="space-y-4 pt-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={`flex items-center space-x-3 p-3 bg-white rounded-lg shadow-md border-l-4 border-${feature.color.split(' ')[0]} hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <p className={`text-sm sm:text-base font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.text}
                    </p>
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
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right column: Image and Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 z-10"></div>
                
                <img
                  src="/lovable-uploads/7a37d019-89ff-4632-abcf-8a6187c5bdde.png"
                  alt="Medical student with stethoscope"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="eager"
                />

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Floating badge */}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
