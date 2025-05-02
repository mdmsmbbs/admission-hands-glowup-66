
import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-medical-50 to-white pt-16 pb-12 md:pt-20 md:pb-16 hero-section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Expert Guidance for Medical College Admissions
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
              Your trusted partner for MBBS admissions guidance. Helping aspiring medical students navigate their journey to recognized medical institutions across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="tel:+919873133846" 
                className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Schedule Free Call
              </a>
              <a 
                href="#services" 
                className="border border-medical-600 text-medical-600 hover:bg-medical-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="lovable-uploads/2fa573b3-b1be-4761-8ace-77b266504f41.png" 
              alt="Medical admission counseling" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
