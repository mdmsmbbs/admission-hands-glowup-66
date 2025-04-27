
import React from 'react';
import { Users, FileSearch, ShieldCheck, GraduationCap, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Medical Education Guidance",
      icon: "Users",
      description: "Combining 13+ years of specialized experience with personalized counseling and comprehensive documentation support for seamless admissions"
    },
    {
      title: "Strategic College Selection",
      icon: "FileSearch",
      description: "Detailed profile analysis with transparent process, backed by our strong institutional network for optimal college matching"
    },
    {
      title: "Specialized NRI Services",
      icon: "GraduationCap",
      description: "Complete assistance for NRI quota admissions, including documentation and eligibility verification"
    },
    {
      title: "Deemed University Expertise",
      icon: "Building2",
      description: "Specialized guidance for admissions in top deemed universities across India"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />;
      case "FileSearch":
        return <FileSearch className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />;
      case "Building2":
        return <Building2 className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />;
      default:
        return <ShieldCheck className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />;
    }
  };

  return (
    <div className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">What Sets Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start space-x-3">
                    {getIcon(feature.icon)}
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">{feature.description}</p>
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
