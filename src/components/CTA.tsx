
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const CTA: React.FC = () => {
  const phoneNumber = "+919873133846";
  const email = "Admissionhandss.com";
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("All fields are required");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would send the data to an endpoint
      // For now we'll just simulate sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email using mailto
      const mailtoLink = `mailto:${email}?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;
      
      toast.success("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Ready to Begin Your Medical Journey?</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              Take the first step towards your MBBS dream. Schedule a free consultation with our admission experts.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                'Personalized admission strategy',
                'Expert guidance on college selection',
                'Application process support',
                'Interview preparation'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-teal-300 mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-white/90">{item}</p>
                </div>
              ))}
            </div>
            
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white text-medical-600 hover:bg-gray-100 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md transition-all shadow-md hover:shadow-lg flex items-center text-sm sm:text-base inline-flex"
            >
              <MessageSquare size={18} className="mr-2" />
              Call Now
            </a>
          </div>
          
          <div className="w-full lg:w-5/12 bg-white text-gray-900 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all text-sm sm:text-base" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all text-sm sm:text-base" 
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all text-sm sm:text-base" 
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500 outline-none transition-all text-sm sm:text-base" 
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full btn-primary text-sm sm:text-base" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
