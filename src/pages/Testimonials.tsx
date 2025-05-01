
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote, Phone } from 'lucide-react';

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
                Hear from doctors who successfully secured admissions in top medical colleges with our guidance.
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
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
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
