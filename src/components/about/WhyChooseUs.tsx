
import React from 'react';
import { Users, FileSearch, ShieldCheck, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      title: "13+ Years of Specialized Experience",
      icon: "photo-1517245386807-bb43f82c33c4",
      description: "Over a decade of expertise in medical education counseling"
    },
    {
      title: "Personalized Counseling",
      icon: "photo-1573497019940-1c28c88b4f3e",
      description: "One-on-One Strategy Calls tailored to your needs"
    },
    {
      title: "Detailed Profile Analysis",
      icon: "photo-1454165804606-c3d57bc86b40",
      description: "Comprehensive analysis and best-fit college suggestions"
    },
    {
      title: "Complete Documentation Support",
      icon: "photo-1606636660801-c61b8e97a87f",
      description: "Full assistance with document verification & registration"
    },
    {
      title: "Institutional Network",
      icon: "photo-1523240795612-9a054b0db644",
      description: "Strong connections with leading medical colleges"
    },
    {
      title: "Transparent Process",
      icon: "photo-1554224155-6726b3ff858f",
      description: "Clear fee structures with zero hidden charges"
    },
  ];

  return (
    <div className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">What Sets Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-3">
                <div className="flex flex-col space-y-2">
                  <div className="h-28 overflow-hidden rounded-lg mb-2">
                    <img
                      src={`https://images.unsplash.com/${feature.icon}?auto=format&fit=crop&w=500&q=80`}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start space-x-2">
                    {feature.title === "13+ Years of Specialized Experience" ? (
                      <Users className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
                    ) : feature.title === "Detailed Profile Analysis" ? (
                      <FileSearch className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
                    ) : feature.title === "Transparent Process" ? (
                      <ShieldCheck className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
                    ) : (
                      <Check className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
