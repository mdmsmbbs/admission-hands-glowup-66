
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Background images - using the newly uploaded medical college images
  const backgroundImages = [
    '/lovable-uploads/2fa573b3-b1be-4761-8ace-77b266504f41.png', 
    '/lovable-uploads/835e3c42-0e9b-4b74-99eb-c6596b7438e3.png',
    '/lovable-uploads/42abd921-8756-460b-9e00-6a93cd48fc80.png',
    '/lovable-uploads/00e46c61-063a-489e-9054-45966912bd22.png',
    '/lovable-uploads/857bce0f-3d82-40da-8733-f98b3c4695ec.png',
    '/lovable-uploads/69823834-0515-4f12-9d2a-a54a8518ae6d.png',
    '/lovable-uploads/972a5fd6-1385-4aa1-b319-ad437d0d4b10.png',
    '/lovable-uploads/382f4ba3-76f4-43d3-81c5-8598af90ea9f.png'
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

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-[80vh] sm:min-h-0 flex items-center">
      {/* Rotating background images with 28% opacity (0.28) as requested */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentBgIndex === index ? 0.28 : 0 }}
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

      <div className="container-custom relative z-10 py-16 md:py-24">
        {/* Single column layout - removed the right side image column */}
        <div className="max-w-3xl mx-auto">
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
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-md border-l-4 border-blue-500 hover:scale-[1.02] transition-transform duration-300"
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
                <Link to="/know-us#contact-us">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
