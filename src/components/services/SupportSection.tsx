
import React from 'react';
import { Shield, Search, DollarSign, FileText, BarChart2, Layers } from 'lucide-react';

const SupportSection = () => {
  const supportItems = [
    {
      icon: <Search className="h-5 w-5 text-medical-500" />,
      title: "College Profiling",
      description: "We assess both clinical and non-clinical aspects such as patient inflow, hospital infrastructure, academic quality, faculty, and internship exposure — helping you identify colleges that match your career goals."
    },
    {
      icon: <DollarSign className="h-5 w-5 text-teal-500" />,
      title: "Transparent Budget Planning",
      description: "We ensure realistic planning by clearly explaining hidden costs, government fees, and management quota expectations — allowing your family to prepare confidently."
    },
    {
      icon: <FileText className="h-5 w-5 text-medical-500" />,
      title: "Multi-State Counseling Expertise",
      description: "Our experts break down the counseling processes of various states, including AIQ, state quotas, private and deemed universities, management and NRI seats — removing confusion and uncertainty."
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-teal-500" />,
      title: "Scientific Cutoff Analysis",
      description: "We use real data to analyze previous year cutoffs and apply predictive insights based on NEET trends to help you make the smartest choices during counseling."
    },
    {
      icon: <Layers className="h-5 w-5 text-medical-500" />,
      title: "Strategic Admission Planning",
      description: "Every student receives a customized step-by-step roadmap to avoid missed deadlines and impulsive decisions, ensuring a smooth journey from NEET result to final admission."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Shield className="h-6 w-6 text-medical-600" />
          <span>How Admission Hands Supports You</span>
        </h2>
        
        <div className="space-y-6 mt-6">
          {supportItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="p-3 bg-gradient-to-br from-medical-50 to-teal-50 rounded-lg group-hover:from-medical-100 group-hover:to-teal-100 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-medical-50 to-teal-50 p-6 rounded-xl border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Beyond Admission: Building Futures</h3>
        <p className="text-gray-700 mb-2">At Admission Hands, it's not just about securing any seat. It's about helping you secure the right seat at the right institution — one that aligns with your profile, your ambition, and your future in healthcare.</p>
        <p className="text-gray-700 font-medium">We're not here to just "get you admitted." We're here to help you make a life-changing decision with clarity, confidence, and care.</p>
      </div>
    </div>
  );
};

export default SupportSection;
