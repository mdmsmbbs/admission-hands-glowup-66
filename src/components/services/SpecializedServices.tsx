
import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Globe, 
  FileCheck, 
  Award,
  Briefcase
} from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="h-6 w-6 text-medical-500" />,
    title: "MBBS Admissions Counseling",
    description: "Expert guidance for securing admission in government medical colleges through state and all-India quotas."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-medical-500" />,
    title: "PG Medical Admissions",
    description: "Specialized counseling for MD/MS aspirants for the next step in their medical career."
  },
  {
    icon: <Globe className="h-6 w-6 text-medical-500" />,
    title: "NRI Quota Admissions",
    description: "Complete assistance with NRI quota admissions in prestigious medical colleges across India."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-medical-500" />,
    title: "Management Quota for MBBS",
    description: "Secure seats through management quota in top private medical colleges and deemed universities."
  },
  {
    icon: <FileCheck className="h-6 w-6 text-medical-500" />,
    title: "Documentation Support",
    description: "Comprehensive assistance with application forms, certificates, and other required documents."
  },
  {
    icon: <Award className="h-6 w-6 text-medical-500" />,
    title: "Career Counseling",
    description: "Personalized guidance to help students make informed decisions about their medical career path."
  }
];

const SpecializedServices = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Specialized Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We offer comprehensive support for medical admissions at all levels
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-medical-50 mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SpecializedServices;
