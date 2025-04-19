
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { Skeleton } from '@/components/ui/skeleton';

const Testimonials: React.FC = () => {
  const { isLoading, testimonials, getContentByKey } = useContent();
  const phoneNumber = "+919873133846";

  // Default testimonials data for fallback
  const defaultTestimonials = [
    {
      id: '1',
      content: "Admission Hands guided me through every step of the MBBS application process. Their personalized approach and deep knowledge of medical admissions made all the difference.",
      name: "Dr. Priya Sharma",
      rating: 5,
      image_url: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
      id: '2',
      content: "I was struggling with choosing the right medical college until I found Admission Hands. Their counselors helped me identify the best options based on my profile and preferences.",
      name: "Dr. Rahul Verma",
      rating: 5,
      image_url: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
      id: '3',
      content: "The interview preparation sessions were incredibly helpful. I gained confidence and performed well in all my medical college interviews. Highly recommend their services!",
      name: "Dr. Anjali Gupta",
      rating: 5,
      image_url: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      id: '4',
      content: "Thanks to Admission Hands, I secured admission in my dream medical college. Their strategic guidance and support throughout the process was invaluable.",
      name: "Dr. Vikram Singh",
      rating: 5,
      image_url: "https://randomuser.me/api/portraits/men/73.jpg"
    }
  ];

  // Use dynamic testimonials or fallback to defaults if empty
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-1/2 mx-auto bg-gray-200 mb-3" />
              <Skeleton className="h-6 w-2/3 mx-auto bg-gray-200" />
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {getContentByKey('testimonials_title')?.title || "What Our Students Say"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {getContentByKey('testimonials_subtitle')?.description || "Hear from students who successfully secured admissions in top medical colleges with our guidance."}
              </p>
            </>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {isLoading ? 
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 sm:p-8 relative">
                <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full p-2 shadow-md">
                  <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Skeleton className="h-4 w-1/3 bg-gray-200 mb-4" />
                    <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                    <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                    <Skeleton className="h-4 w-4/5 bg-gray-200 mb-6" />
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-10 w-10 rounded-full bg-gray-200 mr-3" />
                    <Skeleton className="h-5 w-1/3 bg-gray-200" />
                  </div>
                </div>
              </div>
            )) : 
            displayTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                      <img 
                        src={testimonial.image_url || `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${30 + index}.jpg`}
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          {isLoading ? (
            <>
              <Skeleton className="h-5 w-3/4 mx-auto bg-gray-200 mb-4" />
              <Skeleton className="h-10 w-48 mx-auto bg-gray-200" />
            </>
          ) : (
            <>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {getContentByKey('testimonials_footer')?.description || "Join hundreds of successful medical students who trusted us with their MBBS admissions"}
              </p>
              <a 
                href={`tel:${phoneNumber}`}
                className="btn-primary text-sm sm:text-base"
              >
                {getContentByKey('testimonials_cta')?.title || "Book Your Consultation"}
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
