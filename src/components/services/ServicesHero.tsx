
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative py-12 bg-cover bg-center text-white" style={{
      backgroundImage: `linear-gradient(90deg, rgba(37,99,235,0.9) 0%, rgba(29,78,216,0.85) 100%), url('https://images.unsplash.com/photo-1631217868264-e6a3d2d5bf8c?auto=format&fit=crop&w=2070&q=80')`
    }}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Personalized Admission Solutions for Every Medical Aspirant</h1>
          <p className="text-lg text-gray-100 mb-8">
            Comprehensive counseling and admission services designed to help students secure their place in top medical colleges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">How Admission Hands Supports You</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔍</span>
              <p className="text-gray-100"><strong>College Profiling:</strong> We assess both clinical and non-clinical aspects such as patient inflow, hospital infrastructure, academic quality, faculty, and internship exposure — helping you identify colleges that match your career goals.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <p className="text-gray-100"><strong>Transparent Budget Planning:</strong> We ensure realistic planning by clearly explaining hidden costs, government fees, and management quota expectations — allowing your family to prepare confidently.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <p className="text-gray-100"><strong>Multi-State Counseling Expertise:</strong> Our experts break down the counseling processes of various states, including AIQ, state quotas, private and deemed universities, management and NRI seats — removing confusion and uncertainty.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <p className="text-gray-100"><strong>Scientific Cutoff Analysis:</strong> We use real data to analyze previous year cutoffs and apply predictive insights based on NEET trends to help you make the smartest choices during counseling.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗂️</span>
              <p className="text-gray-100"><strong>Strategic Admission Planning:</strong> Every student receives a customized step-by-step roadmap to avoid missed deadlines and impulsive decisions, ensuring a smooth journey from NEET result to final admission.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-medical-100">Beyond Admission: Building Futures</h3>
            <p className="text-gray-100">At Admission Hands, it's not just about securing any seat. It's about helping you secure the right seat at the right institution — one that aligns with your profile, your ambition, and your future in healthcare.</p>
            <p className="text-gray-100">We're not here to just "get you admitted." We're here to help you make a life-changing decision with clarity, confidence, and care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
