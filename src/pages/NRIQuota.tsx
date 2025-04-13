
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NRIHero from '@/components/nri/NRIHero';
import NRIEligibility from '@/components/nri/NRIEligibility';
import NRIFees from '@/components/nri/NRIFees';
import NRIProcess from '@/components/nri/NRIProcess';
import NRIFAQ from '@/components/nri/NRIFAQ';
import NRICTA from '@/components/nri/NRICTA';

const NRIQuota = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <NRIHero />
        <NRIEligibility />
        <NRIProcess />
        <NRIFees />
        <NRIFAQ />
        <NRICTA />
      </main>
      <Footer />
    </div>
  );
};

export default NRIQuota;
