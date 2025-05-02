
import React from 'react';
import { MapPin, Users, FileText, Award } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { useDeemedUniversities } from '@/hooks/useCollegesData';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const TopDeemedUniversities: React.FC = () => {
  const { universities, loading, error } = useDeemedUniversities();

  return (
    <section id="top-universities" className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Deemed Universities for MBBS
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These institutions are renowned for their medical education, infrastructure, and placement records.
          </p>
        </motion.div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 text-medical-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-10 bg-red-50 rounded-lg">
            <p className="text-red-500">Failed to load universities. Please try again later.</p>
          </div>
        ) : (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {universities.map((university, index) => (
              <motion.div 
                key={university.id || index}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={university.image_url} 
                    alt={university.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-medical-700">{university.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-medical-500" />
                      <span>{university.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-medical-500" />
                      <span>Approx. {university.seats} seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-medical-500" />
                      <span>Fees: {university.fees_range}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-medical-500" />
                      <span>Ranking: {university.ranking}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 italic">
            *Fees and Seat Matrix (Seat Quotas) subject to change as per college and Government notifications.
          </p>
          <p className="text-xs text-gray-500 italic mt-2">
            Information on Deemed Universities offering MBBS is provided for reference only. Admissionhands.com is not liable for inaccuracies; please confirm details with official sources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopDeemedUniversities;
