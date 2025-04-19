
import React from 'react';
import { GraduationCap, Users2, BookOpen, IndianRupee } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Expert Guidance",
    description: "Benefit from the expertise of our experienced counselors, who bring a wealth of knowledge and a proven track record of successful admissions."
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Personalized Counseling",
    description: "Receive tailored support that addresses your unique aspirations and challenges, ensuring the best fit for your educational journey."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Comprehensive Resources",
    description: "Access a rich library of resources, including study materials, application tips, and interview preparation, designed to boost your chances of acceptance."
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Transparent Process",
    description: "We believe in full transparency, ensuring you understand every step of the admission process and the financial implications involved."
  }
];

const ServiceCards = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-1 gap-3 rounded-lg border border-border bg-white p-4 flex-col hover:shadow-lg transition-shadow">
            <div className="text-primary">
              {service.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-primary text-base font-bold leading-tight">{service.title}</h2>
              <p className="text-secondary text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
