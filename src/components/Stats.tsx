
import React, { useRef, useEffect, useState } from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Users, 
  Building,
  Star
} from 'lucide-react';

const stats = [
  {
    icon: <Trophy className="h-6 w-6 text-medical-500" />,
    value: "95%",
    label: "Success Rate",
    description: "students secured preferred admissions"
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-medical-500" />,
    value: "1200+",
    label: "Success Stories",
    description: "students counselled in top colleges"
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
    label: "College Affiliations",
    description: "Abroad Universities"
  }
];

const testimonials = [
  {
    content: "Admission Hands made the entire admission process seamless and stress-free. Their expertise gave me the confidence to focus on my goals, not the paperwork.",
    name: "Dr. Himanshu Jaiswal",
    rating: 5
  },
  {
    content: "From shortlisting colleges to final admission, the team was incredibly supportive and transparent. I couldn't have asked for better guidance.",
    name: "Dr. Shudhranshu",
    rating: 5
  },
  {
    content: "The counselors at Admission Hands really understand what students need. Their insights and personalized support made all the difference.",
    name: "Dr. Ankur Singh",
    rating: 5
  },
  {
    content: "I was confused about college choices and fee structures. Admission Hands provided clarity and helped me make the right decision at every step.",
    name: "Dr. Yashowardhan Jain",
    rating: 5
  },
  {
    content: "Their end-to-end assistance—from documentation to counseling—was exceptional. I'm truly grateful for their professional and ethical approach.",
    name: "Dr. Tejveer Singh",
    rating: 5
  },
  {
    content: "Admission Hands turned a complex process into a smooth experience. Their guidance felt more like mentorship than consultancy.",
    name: "Dr. Syeeda Rizvi",
    rating: 5
  },
  {
    content: "I trusted them with one of the most important decisions of my life, and they delivered beyond expectations. Highly recommend!",
    name: "Dr. Komal Prajapati",
    rating: 5
  },
  {
    content: "Thanks to Admission Hands, I got into the right college without any stress or confusion. Their commitment to students is unmatched.",
    name: "Dr. Ayanur Rahman",
    rating: 5
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

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Set up auto-scrolling for testimonials
  useEffect(() => {
    const testimonialContainer = testimonialsRef.current;
    if (!testimonialContainer) return;

    const scrollInterval = setInterval(() => {
      if (testimonialContainer) {
        setScrollPosition(prev => {
          const newPos = prev + 1; // Speed of scroll
          
          // Reset when we reach the end
          if (newPos > testimonialContainer.scrollWidth - testimonialContainer.clientWidth) {
            return 0;
          }
          
          // Apply the scroll
          testimonialContainer.scrollLeft = newPos;
          return newPos;
        });
      }
    }, 20); // Lower number = faster scroll

    // Pause scrolling on hover
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => {
      // Resume scrolling when mouse leaves
      clearInterval(scrollInterval);
      // Store the current position before clearing
      const currentPos = testimonialContainer.scrollLeft;
      setScrollPosition(currentPos);
    };

    testimonialContainer?.addEventListener('mouseenter', handleMouseEnter);
    testimonialContainer?.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      clearInterval(scrollInterval);
      testimonialContainer?.removeEventListener('mouseenter', handleMouseEnter);
      testimonialContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Intersection observer to trigger animations
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

    return () => observer.disconnect();
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
        
        {/* Testimonials Carousel */}
        <div className="mt-12">
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent"></div>
            
            {/* Testimonials scrolling container */}
            <div 
              ref={testimonialsRef}
              className="flex overflow-x-auto scrollbar-hide py-6 px-4 scroll-smooth"
              style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-6 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 min-w-[300px] max-w-[350px]"
                  >
                    <div className="flex mb-3">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic mb-4 text-sm">"{testimonial.content}"</p>
                    
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="h-8 w-8 rounded-full bg-medical-100 flex items-center justify-center">
                        <span className="text-medical-600 text-xs font-bold">AH</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
