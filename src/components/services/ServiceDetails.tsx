
import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ServiceDetails = () => {
  // Add loading state for better performance
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Defer non-critical animations until after page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const packages = [
    {
      title: "Comprehensive Admission Package",
      color: "from-medical-500 to-medical-600",
      features: [
        "Personalized college selection strategy",
        "Merit-based admission probability analysis",
        "Complete application process management",
        "State & All India counseling guidance",
        "Document verification & submission",
        "Seat allocation assistance",
        "Fee payment coordination",
        "Documentation requirement checklist"
      ]
    },
    {
      title: "Premium Counseling Package",
      color: "from-teal-500 to-teal-600",
      features: [
        "All services of Comprehensive Package",
        "Expert choice filling for best colleges",
        "Detailed fee structure breakdown",
        "24/7 dedicated admission counselor",
        "Multi-state application handling",
        "College campus virtual tour arrangement",
        "Post-admission support services",
        "Career guidance & placement assistance"
      ]
    }
  ];

  // Set up conditional animation to improve performance
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-8 lg:py-12" id="service-packages">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-medical-700 via-medical-600 to-teal-600 text-center">
        Our Service Packages
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-5xl mx-auto px-4">
        {isLoaded ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-none">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${pkg.color} p-4 lg:p-6 text-white`}>
                      <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                      <div className="h-1 w-12 bg-white/50 rounded"></div>
                    </div>
                    <div className="p-4 lg:p-6 space-y-3 bg-white">
                      <ul className="space-y-2 lg:space-y-3">
                        {pkg.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm lg:text-base text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
            {packages.map((pkg, index) => (
              <div key={index} className="h-full">
                <Card className="h-full overflow-hidden border-none">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${pkg.color} p-4 lg:p-6 text-white`}>
                      <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                      <div className="h-1 w-12 bg-white/50 rounded"></div>
                    </div>
                    <div className="p-4 lg:p-6 space-y-3 bg-white">
                      <ul className="space-y-2 lg:space-y-3">
                        {pkg.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm lg:text-base text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDetails;
