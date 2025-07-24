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
import IntroductionMp4 from './_components/introductionMp4';
import BottomTextContainer from './_components/bottomTextContainer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <main className="bg-white text-gray-900">
  <Header />
  <Hero/>
  <FirstTextContainer/>
  <SecondMp4/>
  <Statistic/>
    <Cards/>
  <IntroductionMp4/>
  <BottomTextContainer/>
  <Footer/>
    </main>
  );
}
