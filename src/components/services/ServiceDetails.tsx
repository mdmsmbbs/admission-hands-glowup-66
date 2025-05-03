
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ServiceDetails = () => {
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
        "Expert choice filling for best colleges"
        "Detailed fee structure breakdown",
        "24/7 dedicated admission counselor",
        "Multi-state application handling",
        "College campus virtual tour arrangement",
        "Post-admission support services",
        "Career guidance & placement assistance"
      ]
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-medical-700 via-medical-600 to-teal-600 text-center">
        Our Service Packages
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-500 border-none">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="h-1 w-12 bg-white/50 rounded"></div>
                </div>
                <div className="p-6 space-y-4 bg-white">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="inline-flex items-center text-medical-600 font-medium text-sm hover:text-medical-700 transition-colors group cursor-pointer">
                      </div>
                  </div>
                        </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
