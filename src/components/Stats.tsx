
import React, { useRef, useEffect, useState } from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Users, 
  Building,
  Star, 
  Quote 
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

// Using React.memo to prevent unnecessary re-renders
const StatCard = React.memo(({ stat, shouldAnimate }: { stat: typeof stats[0], shouldAnimate: boolean }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 ${shouldAnimate ? 'animate-fade-in' : ''}`}>
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-gradient-to-r from-medical-50 to-teal-50 rounded-full mb-4">
          {stat.icon}
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-medical-600 to-teal-600 bg-clip-text text-transparent">
          {stat.value}
        </h3>
        <h4 className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</h4>
        <p className="text-gray-600 mt-1 text-sm">{stat.description}</p>
      </div>
    </div>
  );
});

// Using React.memo for testimonial cards
const TestimonialCard = React.memo(({ testimonial, index, shouldAnimate }: { testimonial: typeof testimonials[0], index: number, shouldAnimate: boolean }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-all duration-300 ${
        shouldAnimate ? 'animate-fade-in' : ''
      }`}
      style={{ animationDelay: `${0.2 * (index + 1)}s` }}
    >
      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-medical-500 to-teal-500 rounded-full p-3 shadow-lg">
        <Quote className="h-6 w-6 text-white" />
      </div>
      
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex mb-4">
            {Array(testimonial.rating).fill(0).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-medical-100">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              width="48"
              height="48" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
});

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Impact & Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming medical aspirations into achievements
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              shouldAnimate={isVisible} 
            />
          ))}
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              shouldAnimate={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
