
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Admission Hands guided me through every step of the MBBS application process. Their personalized approach and deep knowledge of medical admissions made all the difference.",
    name: "Priya Sharma",
    college: "AIIMS New Delhi",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    content: "I was struggling with choosing the right medical college until I found Admission Hands. Their counselors helped me identify the best options based on my profile and preferences.",
    name: "Rahul Verma",
    college: "King George's Medical University",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The interview preparation sessions were incredibly helpful. I gained confidence and performed well in all my medical college interviews. Highly recommend their services!",
    name: "Anjali Gupta",
    college: "Maulana Azad Medical College",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "Thanks to Admission Hands, I secured admission in my dream medical college. Their strategic guidance and support throughout the process was invaluable.",
    name: "Vikram Singh",
    college: "CMC Vellore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who successfully secured admissions in top medical colleges with our guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 relative card-hover"
            >
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full p-2 shadow-md">
                <Quote className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.college}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Join hundreds of successful medical students who trusted us with their MBBS admissions</p>
          <button className="btn-primary">
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
