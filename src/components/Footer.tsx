
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">AdmissionHands</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner for MBBS admissions. We help aspiring medical students secure seats in top colleges across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-500 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">College Selection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Application Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interview Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study Guidance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Counseling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-medical-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Medical Campus, New Delhi, 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-medical-500 mr-3 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-medical-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@admissionhands.com" className="text-gray-400 hover:text-white transition-colors">info@admissionhands.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-medical-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Monday - Saturday: 9AM - 7PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AdmissionHands. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
