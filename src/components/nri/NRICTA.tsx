
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

const NRICTA = () => {
  const phoneNumber = "+919310301949"; 
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+|\s|-/g, '')}`;
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-medical-600 to-medical-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Get Expert Guidance for NRI Quota Admissions</h2>
            <p className="text-lg opacity-90">
              Don't navigate the complex admission process alone. Our experts have helped hundreds of students 
              secure medical seats through NRI quota across top colleges in India.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13443 4.39828 5.49718C5.79935 3.85994 7.69279 2.71553 9.79619 2.24025C11.8996 1.76497 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9 11.0101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Personalized Counseling</h3>
                  <p className="opacity-80">One-on-one sessions to understand your profile and suggest the best options</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13443 4.39828 5.49718C5.79935 3.85994 7.69279 2.71553 9.79619 2.24025C11.8996 1.76497 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9 11.0101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">End-to-End Support</h3>
                  <p className="opacity-80">From document preparation to final admission, we handle it all</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13443 4.39828 5.49718C5.79935 3.85994 7.69279 2.71553 9.79619 2.24025C11.8996 1.76497 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9 11.0101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Direct College Connections</h3>
                  <p className="opacity-80">We have established relationships with top medical colleges across India</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="bg-white text-medical-800 hover:bg-gray-100" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                <a href={`tel:${phoneNumber}`}>Call Now: {phoneNumber}</a>
              </Button>
              
              <Button className="bg-green-500 hover:bg-green-600" size="lg" onClick={() => window.open(whatsappUrl, '_blank')}>
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp Connect
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Get Free Counseling</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium opacity-90">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium opacity-90">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium opacity-90">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium opacity-90">Candidate Category</label>
                <select
                  id="category"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option value="" className="bg-medical-800">Select your category</option>
                  <option value="nri" className="bg-medical-800">NRI</option>
                  <option value="nri-sponsored" className="bg-medical-800">NRI Sponsored</option>
                  <option value="oci" className="bg-medical-800">OCI/PIO</option>
                  <option value="foreign" className="bg-medical-800">Foreign National</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium opacity-90">Your Query</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>
              </div>
              
              <Button className="w-full bg-white text-medical-800 hover:bg-gray-100" size="lg">
                Submit Query <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRICTA;
