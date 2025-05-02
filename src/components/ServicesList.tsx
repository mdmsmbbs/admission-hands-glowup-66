
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BookOpen, Users, Building, Wrench, ClipboardCheck } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      title: "MBBS Admission Guidance",
      description: "Complete assistance for securing admission in top medical colleges across India.",
      icon: <BookOpen className="h-5 w-5" />,
      delay: 0,
      color: "bg-medical-600"
    },
    {
      title: "NRI Quota Admissions",
      description: "Specialized services for NRI students seeking medical seats through the NRI quota.",
      icon: <Users className="h-5 w-5" />,
      delay: 0.1,
      color: "bg-teal-500"
    },
    {
      title: "Deemed University Admissions",
      description: "Expert guidance for securing seats in prestigious deemed medical universities.",
      icon: <Building className="h-5 w-5" />,
      delay: 0.2,
      color: "bg-blue-500"
    },
    {
      title: "Direct Admission Support",
      description: "Assistance with management quota and NRI sponsorship seats in private colleges.",
      icon: <Wrench className="h-5 w-5" />,
      delay: 0.3,
      color: "bg-medical-500"
    },
    {
      title: "Documentation Assistance",
      description: "Comprehensive support with application forms and required documentation.",
      icon: <ClipboardCheck className="h-5 w-5" />,
      delay: 0.4,
      color: "bg-blue-600"
    },
    {
      title: "Post-Admission Support",
      description: "Ongoing assistance after admission including accommodation and orientation.",
      icon: <CheckCircle className="h-5 w-5" />,
      delay: 0.5,
      color: "bg-teal-600"
    }
  ];

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-medical-600 font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Our Comprehensive Services</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600">
              We provide expert guidance and support throughout the medical admission process
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: service.delay }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className={`${service.color} p-3 rounded-lg text-white shrink-0`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
