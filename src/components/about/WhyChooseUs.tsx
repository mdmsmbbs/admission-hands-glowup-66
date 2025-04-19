
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      title: "13+ Years of Specialized Experience",
      icon: "photo-1488590528505-98d2b5aba04b",
      description: "Over a decade of expertise in medical education counseling"
    },
    {
      title: "Personalized Counseling",
      icon: "photo-1461749280684-dccba630e2f6",
      description: "One-on-One Strategy Calls tailored to your needs"
    },
    {
      title: "Detailed Profile Analysis",
      icon: "photo-1486312338219-ce68d2c6f44d",
      description: "Comprehensive analysis and best-fit college suggestions"
    },
    {
      title: "Complete Documentation Support",
      icon: "photo-1605810230434-7631ac76ec81",
      description: "Full assistance with document verification & registration"
    },
    {
      title: "Institutional Network",
      icon: "photo-1498050108023-c5249f4df085",
      description: "Strong connections with leading medical colleges"
    },
    {
      title: "Transparent Process",
      icon: "photo-1483058712412-4245e9b90334",
      description: "Clear fee structures with zero hidden charges"
    },
  ];

  return (
    <div className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">What Sets Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <div className="h-32 overflow-hidden rounded-lg mb-2">
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

