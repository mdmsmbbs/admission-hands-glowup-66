
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote, Phone } from 'lucide-react';

const testimonials = [
  {
    content: "Admission Hands guided me through every step of the MBBS application process. Their personalized approach and deep knowledge of medical admissions made all the difference.",
    name: "Priya Sharma",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    content: "I was struggling with choosing the right medical college until I found Admission Hands. Their counselors helped me identify the best options based on my profile and preferences.",
    name: "Rahul Verma",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The interview preparation sessions were incredibly helpful. I gained confidence and performed well in all my medical college interviews. Highly recommend their services!",
    name: "Anjali Gupta",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "Thanks to Admission Hands, I secured admission in my dream medical college. Their strategic guidance and support throughout the process was invaluable.",
    name: "Vikram Singh",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    content: "The team at Admission Hands was incredibly responsive and always available to address my queries. Their expertise in NRI quota admissions was particularly helpful.",
    name: "Neha Patel",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    content: "Their college selection guidance was spot-on! I got admitted to one of the top colleges on their recommended list. They really understand the admission landscape.",
    name: "Karan Malhotra",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    content: "The document verification service saved me from potential application rejection. They identified issues I had completely missed and helped me correct them.",
    name: "Divya Reddy",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    content: "As an NRI, I was completely lost with the admission process in India. Admission Hands provided step-by-step guidance that made everything clear and manageable.",
    name: "Arjun Shah",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/92.jpg"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-b from-medical-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from students who successfully secured admissions in top medical colleges with our guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full p-2 shadow-md">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                  
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex mb-3">
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Take the first step towards your medical career. Book a consultation with our admission experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919873133846" 
                  className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Schedule Free Call
                </a>
                <a 
                  href="https://wa.me/919873133846" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-medical-600 text-medical-600 hover:bg-medical-50 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                >
                  <img 
                    src="/lovable-uploads/25c5e9b0-56a9-4cd9-ac74-e70d782b95fd.png"
                    alt="WhatsApp"
                    className="w-5 h-5 mr-2"
                  />
                  WhatsApp Connect
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
