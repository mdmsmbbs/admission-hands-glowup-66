
import React from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Users, 
  Building,
} from 'lucide-react';

const stats = [
  {
    icon: <Trophy className="h-10 w-10 text-medical-500" />,
    value: "95%",
    label: "Success Rate",
    description: "of our students secure admissions in their preferred medical colleges"
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-medical-500" />,
    value: "1200+",
    label: "Success Stories",
    description: "students placed in top medical colleges across the country"
  },
  {
    icon: <Users className="h-10 w-10 text-medical-500" />,
    value: "25+",
    label: "Expert Counselors",
    description: "with decades of experience in medical admissions"
  },
  {
    icon: <Building className="h-10 w-10 text-medical-500" />,
    value: "100+",
    label: "Partner Institutions",
    description: "including government and private medical colleges"
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been transforming medical aspirations into achievements for over a decade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-8 text-center border border-gray-100 card-hover"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <h4 className="text-lg font-semibold text-medical-600 mb-2">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A Decade of Excellence in MBBS Admissions</h3>
            <p className="text-gray-700 mb-6">
              Since 2013, we've been helping students navigate the complex medical admission process with personalized guidance, strategic insights, and unwavering support.
            </p>
            <a href="#about" className="text-medical-500 font-semibold hover:text-medical-600 transition-colors">
              Learn more about our journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
