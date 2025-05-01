
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const Testimonials: React.FC = () => {
  const phoneNumber = "+919873133846";

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Impact & Success Stories</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from doctors who successfully secured admissions in top medical colleges with our guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 relative card-hover"
            >
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full p-2 shadow-md">
                <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex mb-3 sm:mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-4">Join hundreds of successful medical students who trusted us with their MBBS admissions</p>
          <a 
            href={`tel:${phoneNumber}`}
            className="btn-primary text-sm sm:text-base"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
