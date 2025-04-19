
import React from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Users, 
  Building,
} from 'lucide-react';

const stats = [
  {
    icon: <Trophy className="h-6 w-6 text-medical-500" />,
    value: "95%",
    label: "Success Rate",
    description: "students secure preferred admissions"
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-medical-500" />,
    value: "1200+",
    label: "Success Stories",
    description: "students placed in top colleges"
  },
  {
    icon: <Users className="h-6 w-6 text-medical-500" />,
    value: "25+",
    label: "Expert Counselors",
    description: "with decades of experience"
  },
  {
    icon: <Building className="h-6 w-6 text-medical-500" />,
    value: "100+",
    label: "Partner Institutions",
    description: "government & private colleges"
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Our Impact in Numbers</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Transforming medical aspirations into achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-2">
                {stat.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{stat.value}</h3>
              <h4 className="text-sm font-medium text-medical-600 mb-1">{stat.label}</h4>
              <p className="text-xs text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
