
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VideoSection from '@/components/VideoSection';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AdmissionHands - Expert Medical College Admission Guidance</title>
        <meta name="description" content="Get expert guidance for MBBS, MD/MS admissions in top medical colleges. Personalized counseling, guaranteed results. Start your medical journey today." />
        <meta name="keywords" content="medical admissions, MBBS admission, medical college counseling, NRI quota, medical education, admission guidance" />
        <meta property="og:title" content="AdmissionHands - Medical College Admission Experts" />
        <meta property="og:description" content="Expert guidance for medical college admissions. Get personalized counseling and secure your seat in top medical colleges." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <VideoSection />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
