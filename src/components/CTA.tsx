import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, WhatsApp } from 'lucide-react';

const CTA: React.FC = () => {
  const phoneNumber = "+919711110766";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+|\s|-/g, '')}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 leading-tight">Ready to Begin Your Medical Journey?</h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards your MBBS dream. Schedule a free consultation with our admission experts.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Personalized admission strategy',
                'Expert guidance on college selection',
                'Application process support',
                'Interview preparation'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-teal-300 mr-3 h-6 w-6 flex-shrink-0" />
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-white text-medical-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg flex items-center"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <WhatsApp size={18} className="mr-2" />
              WhatsApp Connect
            </Button>
          </div>
          
          <div className="md:w-5/12 bg-white text-gray-900 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all" 
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all" 
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={3} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all" 
                      placeholder="Your message (optional)"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full btn-primary">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
