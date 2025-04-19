
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      title: "13+ Years of Specialized Experience",
      icon: "photo-1576091160399-112ba8d25d1d",
      description: "Over a decade of expertise in medical education counseling"
    },
    {
      title: "Personalized Counseling",
      icon: "photo-1579684385127-1ef15d508118",
      description: "One-on-One Strategy Calls tailored to your needs"
    },
    {
      title: "Detailed Profile Analysis",
      icon: "photo-1631217868264-e6a3d2d5bf8c",
      description: "Comprehensive analysis and best-fit college suggestions"
    },
    {
      title: "Complete Documentation Support",
      icon: "photo-1516549655169-df83a0774514",
      description: "Full assistance with document verification & registration"
    },
    {
      title: "Institutional Network",
      icon: "photo-1505751172876-fa1923c5c528",
      description: "Strong connections with leading medical colleges"
    },
    {
      title: "Transparent Process",
      icon: "photo-1583912267550-d6148f7ee16d",
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
                      src={`https://images.unsplash.com/${feature.icon}`}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
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
