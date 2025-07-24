// src/app/page.tsx

'use client';

import { useEffect, useState } from 'react';
import Header from './_components/header';
import Hero from './_components/hero';
import FirstTextContainer from './_components/firstTextContainer';
import SecondMp4 from './_components/secondMp4';
import Statistic from './_components/statistic';
import Cards from './_components/cards';
import Footer from './_components/footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero/>
  <FirstTextContainer/>
  <SecondMp4/>


       {/* tootoi heseg */}
  <Statistic/>


      {/* Mp4 Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Happy Families & Nannies</h2>
          <video
            className="w-full rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
            src="/compressedMomNanny.mp4"
          />
        </div>
      </section>

      {/* About Us / Team */}
    <Cards/>

      {/* Footer */}
    <Footer/>
    </main>
    
  );
}
