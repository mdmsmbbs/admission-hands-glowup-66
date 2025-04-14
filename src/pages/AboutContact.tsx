
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Users, Award, Clock, BookOpen } from 'lucide-react';

const AboutContact = () => {
  const phoneNumber = "+919873133846";
  const email = "Admissionhandss.com";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-medical-50 to-white py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-medical-800 mb-4">About AdmissionHands</h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Your trusted partner in medical college admissions since 2010, providing expert guidance to aspiring medical professionals.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                <p className="text-gray-700 mb-6">
                  Founded by a team of medical education specialists and former medical college admission officers, AdmissionHands began with a simple mission: to help aspiring medical students navigate the complex and competitive admission process for MBBS, MD, and MS programs across India.
                </p>
                <p className="text-gray-700 mb-6">
                  With over a decade of experience, we have successfully guided more than 5,000 students into prestigious medical institutions throughout India. Our deep understanding of the ever-changing admission landscape, particularly in NRI quota admissions, has made us the go-to consultancy for medical aspirants.
                </p>
                <p className="text-gray-700">
                  Our team includes former admission committee members, medical professors, and education policy experts who work together to provide comprehensive, personalized guidance tailored to each student's unique profile and goals.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-medical-50 p-6 rounded-xl">
                  <Users className="h-10 w-10 text-medical-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5000+</h3>
                  <p className="text-gray-600">Students Admitted</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl">
                  <Award className="h-10 w-10 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">200+</h3>
                  <p className="text-gray-600">Partner Colleges</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <BookOpen className="h-10 w-10 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">12+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Clock className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">98%</h3>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/76.jpg" 
                    alt="Dr. Rajesh Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Rajesh Kumar</h3>
                  <p className="text-medical-600 mb-4">Founder & Director</p>
                  <p className="text-gray-700 text-sm">
                    Former Dean at a leading medical college with 25 years of experience in medical education and admissions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/79.jpg" 
                    alt="Dr. Meenakshi Singh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Meenakshi Singh</h3>
                  <p className="text-medical-600 mb-4">NRI Quota Specialist</p>
                  <p className="text-gray-700 text-sm">
                    Expert in NRI quota policies with 15+ years of experience helping international students secure medical seats.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/45.jpg" 
                    alt="Dr. Anand Verma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Anand Verma</h3>
                  <p className="text-medical-600 mb-4">Student Counseling Head</p>
                  <p className="text-gray-700 text-sm">
                    Specializes in student assessment and college matching, with expertise in interview preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in all our services, ensuring the highest quality guidance for every student.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalization</h3>
                <p className="text-gray-700">
                  We understand that each student is unique, with different strengths and goals. Our approach is always personalized.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We operate with complete transparency and honesty, providing guidance that truly benefits our students.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 bg-medical-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Have questions about medical admissions? Our expert team is here to help you navigate the process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                <a href={`tel:${phoneNumber}`} className="text-medical-600 hover:text-medical-700 font-medium">
                  {phoneNumber}
                </a>
                <p className="mt-2 text-gray-600 text-sm">
                  Monday - Saturday: 9AM - 7PM<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                <a href={`mailto:${email}`} className="text-teal-600 hover:text-teal-700 font-medium">
                  {email}
                </a>
                <p className="mt-2 text-gray-600 text-sm">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-gray-700">
                  123 Education Street, Medical Campus<br />
                  New Delhi, 110001<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutContact;
