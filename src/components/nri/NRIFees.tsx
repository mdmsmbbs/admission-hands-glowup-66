
import React from 'react';
import { Info } from 'lucide-react';

const NRIFees = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NRI Quota Fee Structure</h2>
          <p className="text-gray-600 text-lg">
            Understanding the investment required for securing an MBBS seat through NRI quota
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Government Colleges */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-medical-600 text-white p-4">
              <h3 className="text-xl font-semibold">Government Medical Colleges</h3>
              <p className="text-white/80 text-sm mt-1">NRI Quota Seats</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Annual Tuition Fee</span>
                <span className="text-xl font-bold">₹15-25 Lakhs</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Hostel & Mess</span>
                <span className="font-semibold">₹1-2 Lakhs / year</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Development Fee</span>
                <span className="font-semibold">₹50K-1 Lakh</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-gray-600">Total (Approx.)</span>
                <span className="text-xl font-bold text-medical-600">₹85-1.35 Cr.</span>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg flex gap-3">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  Government college NRI fees are regulated by respective state authorities
                </p>
              </div>
            </div>
          </div>
          
          {/* Private Colleges */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-teal-600 text-white p-4">
              <h3 className="text-xl font-semibold">Private Medical Colleges</h3>
              <p className="text-white/80 text-sm mt-1">NRI Quota Seats</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Annual Tuition Fee</span>
                <span className="text-xl font-bold">₹20-30 Lakhs</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Hostel & Mess</span>
                <span className="font-semibold">₹1.5-3 Lakhs / year</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Development Fee</span>
                <span className="font-semibold">₹1-2 Lakhs</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-gray-600">Total (Approx.)</span>
                <span className="text-xl font-bold text-teal-600">₹1.1-1.7 Cr.</span>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg flex gap-3">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  Private college fees vary significantly based on location and reputation
                </p>
              </div>
            </div>
          </div>
          
          {/* Deemed Universities */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-indigo-600 text-white p-4">
              <h3 className="text-xl font-semibold">Deemed Universities</h3>
              <p className="text-white/80 text-sm mt-1">NRI/Management Quota</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Annual Tuition Fee</span>
                <span className="text-xl font-bold">₹25-40 Lakhs</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Hostel & Mess</span>
                <span className="font-semibold">₹2-3.5 Lakhs / year</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-600">Development Fee</span>
                <span className="font-semibold">₹2-5 Lakhs</span>
              </div>
              
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-gray-600">Total (Approx.)</span>
                <span className="text-xl font-bold text-indigo-600">₹1.5-2.3 Cr.</span>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg flex gap-3">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  Deemed universities may have additional one-time admission fees
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Important Fee Considerations</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Currency Fluctuations</h4>
                <p className="text-gray-600 text-sm">
                  Many institutions charge NRI quota fees in USD or other foreign currencies.
                  Exchange rate fluctuations can significantly impact the final amount in rupees.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Payment Schedule</h4>
                <p className="text-gray-600 text-sm">
                  Most institutions require a significant portion of the fees (sometimes the entire annual fee)
                  to be paid upfront at the time of admission. Plan your finances accordingly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Additional Costs</h4>
                <p className="text-gray-600 text-sm">
                  Beyond tuition and hostel fees, budget for books, equipment, uniform, examination fees,
                  and other miscellaneous expenses that may add up to ₹1-2 lakhs per year.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Fee Increments</h4>
                <p className="text-gray-600 text-sm">
                  Most institutions increase their fees by 5-10% annually. Factor this into your
                  long-term financial planning for the entire duration of the course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRIFees;
