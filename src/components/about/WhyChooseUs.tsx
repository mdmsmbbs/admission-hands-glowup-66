
import React from 'react';
import { Users, FileSearch, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Guidance & Support",
      icon: "photo-1517245386807-bb43f82c33c4",
      description: "Personalized counseling with complete documentation assistance throughout your admission journey"
    },
    {
      title: "Experience & Network",
      icon: "photo-1523240795612-9a054b0db644",
      description: "13+ years of specialized experience with strong connections to leading medical colleges"
    },
    {
      title: "Transparent Analysis",
      icon: "photo-1454165804606-c3d57bc86b40",
      description: "Comprehensive profile analysis with transparent fee structures and zero hidden charges"
    }
  ];

  return (
    <div className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">What Sets Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="h-40 overflow-hidden rounded-lg mb-4">
                    <img
                      src={`https://images.unsplash.com/${feature.icon}?auto=format&fit=crop&w=500&q=80`}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    {index === 0 ? (
                      <Users className="h-6 w-6 text-medical-600 mt-1 flex-shrink-0" />
                    ) : index === 1 ? (
                      <FileSearch className="h-6 w-6 text-medical-600 mt-1 flex-shrink-0" />
                    ) : (
                      <ShieldCheck className="h-6 w-6 text-medical-600 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                      <p className="text-gray-600 mt-2">{feature.description}</p>
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
