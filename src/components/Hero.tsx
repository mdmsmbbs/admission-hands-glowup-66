import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-medical-900/90 to-teal-900/90"></div>
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-up text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Expert Consultation for Your <span className="text-medical-500">MBBS, MD/MS</span> Journey
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              Expert guidance to secure admissions in top medical colleges. Personalized mentoring that turns aspirations into achievements.
            </p>
            
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {[
                'Specialized in MBBS admissions counseling',
                'Access to 100+ premier medical institutions',
                '95% success rate in admissions',
                'One-on-one personalized guidance'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="btn-primary text-sm sm:text-base">
                Book Free Consultation
              </Button>
              <Button className="btn-outline flex items-center text-sm sm:text-base">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Medical Student Success" 
                className="w-full h-auto rounded-t-xl"
              />
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-900">Success Stories</h3>
                    <p className="text-sm text-gray-600">From our students</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`} 
                          alt="Student" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded p-3 sm:p-4 mb-2 sm:mb-4">
                  <p className="text-sm sm:text-base text-gray-700 italic">"Admission Hands helped me get into my dream medical college. Their personalized guidance was invaluable!"</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">- Riya Sharma, AIIMS Delhi</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-medical-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-40 sm:h-40 bg-teal-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
