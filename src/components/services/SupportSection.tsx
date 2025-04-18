
import React from 'react';

const SupportSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">How Admission Hands Supports You</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🔍</span>
          <p className="text-black"><strong>College Profiling:</strong> We assess both clinical and non-clinical aspects such as patient inflow, hospital infrastructure, academic quality, faculty, and internship exposure — helping you identify colleges that match your career goals.</p>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="text-2xl">💰</span>
          <p className="text-black"><strong>Transparent Budget Planning:</strong> We ensure realistic planning by clearly explaining hidden costs, government fees, and management quota expectations — allowing your family to prepare confidently.</p>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="text-2xl">📚</span>
          <p className="text-black"><strong>Multi-State Counseling Expertise:</strong> Our experts break down the counseling processes of various states, including AIQ, state quotas, private and deemed universities, management and NRI seats — removing confusion and uncertainty.</p>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="text-2xl">📊</span>
          <p className="text-black"><strong>Scientific Cutoff Analysis:</strong> We use real data to analyze previous year cutoffs and apply predictive insights based on NEET trends to help you make the smartest choices during counseling.</p>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="text-2xl">🗂️</span>
          <p className="text-black"><strong>Strategic Admission Planning:</strong> Every student receives a customized step-by-step roadmap to avoid missed deadlines and impulsive decisions, ensuring a smooth journey from NEET result to final admission.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">Beyond Admission: Building Futures</h3>
        <p className="text-black">At Admission Hands, it's not just about securing any seat. It's about helping you secure the right seat at the right institution — one that aligns with your profile, your ambition, and your future in healthcare.</p>
        <p className="text-black">We're not here to just "get you admitted." We're here to help you make a life-changing decision with clarity, confidence, and care.</p>
      </div>
    </div>
  );
};

export default SupportSection;
