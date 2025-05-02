
import React from 'react';
import { GraduationCap, Users, FileCheck, Building2, ChartBar, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

const SpecializedServices = () => {
  const services = [
    {
      icon: <GraduationCap className="h-6 w-6 text-medical-600" />,
      title: "Comprehensive College Selection",
      description: "Expert guidance in selecting medical colleges based on your profile, preferences, and goals."
    },
    {
      icon: <Users className="h-6 w-6 text-medical-600" />,
      title: "Management Quota for MBBS Admissions",
      description: "Complete support for securing management quota seats in top private medical institutions across India."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-medical-600" />,
      title: "Document Verification",
      description: "Thorough verification and assistance with documentation for smooth admission process."
    },
    {
      icon: <Building2 className="h-6 w-6 text-medical-600" />,
      title: "Institution Connect",
      description: "Direct connections with premier medical colleges for streamlined admissions."
    },
    {
      icon: <ChartBar className="h-6 w-6 text-medical-600" />,
      title: "Career Planning",
      description: "Strategic guidance for long-term medical career planning and specialization choices."
    },
    {
      icon: <Calendar className="h-6 w-6 text-medical-600" />,
      title: "Application Timeline",
      description: "Structured timeline management for applications, deadlines, and counseling rounds."
    }
  ];

  // Mobile view - accordion
  const mobileView = (
    <div className="md:hidden">
      <Accordion type="single" collapsible className="w-full">
        {services.map((service, index) => (
          <AccordionItem key={index} value={`service-${index}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-medical-50 to-teal-50 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-left">{service.title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 pl-12">{service.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  // Desktop view - properly implemented ScrollArea
  const desktopView = (
    <div className="hidden md:block w-full">
      <ScrollArea className="w-full">
        <div className="flex flex-nowrap gap-4 pb-6 px-4 min-w-max">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg border-0 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-medical-50 to-teal-50 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <div className="w-full">
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-1 w-8 bg-gradient-to-r from-medical-500 to-teal-500 rounded-full"></div>
          <span className="text-sm text-medical-600 font-medium uppercase tracking-wider">Services</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Specialized Services</h2>
        <p className="text-gray-600">Tailored admission solutions for every stage of your medical education journey</p>
      </div>
      
      {mobileView}
      {desktopView}
    </div>
  );
};

export default SpecializedServices;
