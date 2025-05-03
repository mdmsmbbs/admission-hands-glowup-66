
import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  FileCheck, 
  Award
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <GraduationCap className="h-6 w-6 text-white" />,
    title: "MBBS Admissions Counseling",
    description: "Expert guidance for admission to government, private, and deemed medical colleges through state and all-India counselling."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-white" />,
    title: "PG Medical Admissions",
    description: "Specialized counseling for MD/MS aspirants for the next step in their medical career."
  },
  {
    icon: <FileCheck className="h-6 w-6 text-white" />,
    title: "Documentation Support",
    description: "Comprehensive assistance with application forms, certificates, and other required documents."
  },
  {
    icon: <Award className="h-6 w-6 text-white" />,
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-14">
        <span className="text-medical-600 font-medium text-sm uppercase tracking-wider">Our Expertise</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-medical-700 via-medical-600 to-teal-600">
          Our Specialized Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We offer comprehensive support for medical admissions at all levels
        </p>
      </div>
      
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-medical-500 to-teal-500"></div>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-medical-600 to-teal-600 p-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-white">{service.title}</h3>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="h-1 w-0 bg-medical-500 mt-4 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SpecializedServices;
