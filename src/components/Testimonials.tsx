
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

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
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative min-w-[280px] h-full border border-gray-100 hover:shadow-lg transition-all duration-300 mx-2">
      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-medical-500 to-medical-600 rounded-full p-2 shadow-md">
        <Quote className="h-4 w-4 text-white" />
      </div>
      
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex mb-3">
            {Array(testimonial.rating).fill(0).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p className="text-sm text-gray-700 mb-4 italic">"{testimonial.content}"</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const phoneNumber = "+919873133846";
  const carouselRef = useRef<HTMLDivElement>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoPlay && carouselRef.current) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 1;
          
          // Reset scroll position when reaching the end
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay]);

  return (
    <section id="testimonials" className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Our Success Stories</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from doctors who successfully secured admissions in top medical colleges with our guidance
          </p>
        </div>
        
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          onTouchStart={() => setAutoPlay(false)}
          onTouchEnd={() => setAutoPlay(true)}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent ref={carouselRef} className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Trusted by 1200+ medical students</p>
          <a 
            href={`tel:${phoneNumber}`}
            className="bg-medical-600 hover:bg-medical-700 text-white px-4 py-2 rounded-md font-medium text-sm inline-block transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
