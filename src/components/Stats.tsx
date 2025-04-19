
import React from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Users, 
  Building,
  Star, 
  Quote 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  {
    icon: <Trophy className="h-5 w-5 text-medical-500" />,
    value: "95%",
    label: "Success Rate",
    description: "students secure preferred admissions"
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-medical-500" />,
    value: "1200+",
    label: "Success Stories",
    description: "students placed in top colleges"
  },
  {
    icon: <Users className="h-5 w-5 text-medical-500" />,
    value: "25+",
    label: "Expert Counselors",
    description: "with decades of experience"
  },
  {
    icon: <Building className="h-5 w-5 text-medical-500" />,
    value: "100+",
    label: "Partner Institutions",
    description: "government & private colleges"
  }
];

const testimonials = [
  {
    content: "Admission Hands guided me through every step of the MBBS application process. Their personalized approach made all the difference.",
    name: "Dr. Priya Sharma",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    content: "Thanks to Admission Hands, I secured admission in my dream medical college. Their strategic guidance was invaluable.",
    name: "Dr. Vikram Singh",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/73.jpg"
  }
];

const Stats: React.FC = () => {
  const phoneNumber = "+919873133846";
  
  return (
    <section className="py-4 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Our Impact & Success Stories</h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Transforming medical aspirations into achievements
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-2 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-1">
                {stat.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">{stat.value}</h3>
              <h4 className="text-xs font-medium text-medical-600 mb-0.5">{stat.label}</h4>
              <p className="text-xs text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-3 relative"
            >
              <div className="absolute -top-2 -left-2 bg-teal-500 rounded-full p-1 shadow-md">
                <Quote className="h-3 w-3 text-white" />
              </div>
              
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex mb-2">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-700 mb-2 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/testimonials" className="text-medical-600 hover:text-medical-700 text-xs font-medium">
            View All Success Stories →
          </Link>
          <a 
            href={`tel:${phoneNumber}`}
            className="btn-primary text-xs block sm:inline-block sm:ml-3 mt-2 sm:mt-0 max-w-xs mx-auto"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
