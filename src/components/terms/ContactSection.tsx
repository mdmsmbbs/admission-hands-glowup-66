
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-sm text-gray-600">
          If you have any questions about our services or need assistance, we're here to help
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <motion.div 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-medical-50 p-2 rounded-full">
              <Phone className="h-4 w-4 text-medical-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-800">Phone</h3>
              <p className="text-sm text-gray-600">+91-9310301949</p>
              <p className="text-xs text-gray-500 mt-0.5">Mon-Sun, 10:00 AM - 10:00 PM</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-teal-50 p-2 rounded-full">
              <Mail className="h-4 w-4 text-teal-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-800">Email</h3>
              <p className="text-sm text-gray-600">info@admissionhands.com</p>
              <p className="text-xs text-gray-500 mt-0.5">We respond within 24 hours</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-blue-50 p-2 rounded-full">
              <MapPin className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-800">Office Address</h3>
              <p className="text-sm text-gray-600">Logix Mall, Noida City Center,</p>
              <p className="text-sm text-gray-600">Noida, U.P – 201301</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-gray-50 p-4 rounded-lg border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-base font-semibold text-gray-800 mb-3">Disclaimer</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              Admission Hands provides consultancy and guidance for MBBS admissions in 
              India. While we aim to offer the most reliable information and personalized advice:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>We do not guarantee admission to any college or course.</li>
              <li>
                Admission is subject to NEET score, government policies, college seat 
                availability, and student eligibility.
              </li>
              <li>We are not directly affiliated with any medical college or government body.</li>
              <li>Information on the website is for general guidance and may change without notice.</li>
              <li>
                Users are advised to independently verify all official information before 
                making decisions based on our services or content.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
