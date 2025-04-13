
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send, Users, Award, BookOpen, History } from 'lucide-react';

const AboutContact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* About Us Section */}
        <section className="bg-gradient-to-b from-medical-50 to-white py-16">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
              <div className="w-20 h-1 bg-medical-500 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                AdmissionHands is your trusted partner in securing medical admissions across India. 
                With years of experience and a dedicated team, we help students navigate the complex admission process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-medical-500">
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-3 rounded-lg">
                      <History className="h-6 w-6 text-medical-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
                      <p className="text-gray-600 mt-2">
                        Founded in 2010, AdmissionHands began with a mission to simplify the medical admission process 
                        for students. What started as a small consultancy has grown into a trusted name in medical education counseling.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">Our Team</h3>
                      <p className="text-gray-600 mt-2">
                        Our team comprises experienced education consultants, former medical college administrators, 
                        and career counselors who understand the nuances of medical admissions in India.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-medical-500">
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-medical-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">Our Achievements</h3>
                      <p className="text-gray-600 mt-2">
                        We take pride in having helped over 10,000 students secure admissions in top medical colleges. 
                        Our success rate of 95% speaks to our commitment and expertise.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">Our Approach</h3>
                      <p className="text-gray-600 mt-2">
                        We believe in personalized guidance. Each student's journey is unique, and our approach 
                        is tailored to individual needs, preferences, and academic profiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-medical-500/20 to-teal-500/20 rounded-lg transform -rotate-3 scale-95"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Medical professionals team" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
              <div className="w-20 h-1 bg-medical-500 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Have questions about medical admissions? Our team is here to help you. 
                Reach out to us through any of the following channels or fill out the contact form.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-medical-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-medical-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Our Address</h3>
                        <p className="text-gray-600 mt-2">
                          123 Education Street, Medical Campus,<br />
                          New Delhi, 110001, India
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-medical-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-medical-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
                        <p className="text-gray-600 mt-2">
                          <a href="tel:+919873133846" className="hover:text-medical-600 transition-colors">
                            +91 98731 33846
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-medical-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-medical-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Email Address</h3>
                        <p className="text-gray-600 mt-2">
                          <a href="mailto:info@admissionhands.com" className="hover:text-medical-600 transition-colors">
                            info@admissionhands.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-medical-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-medical-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                        <p className="text-gray-600 mt-2">
                          Monday - Saturday: 9AM - 7PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        placeholder="Your contact number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button className="w-full md:w-auto bg-medical-600 hover:bg-medical-700">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-8">
          <div className="container-custom">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.888071330207!2d77.20905931508001!3d28.63898068241634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1652268038967!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutContact;
