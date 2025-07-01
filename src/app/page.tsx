'use client';

import Image from 'next/image';
import Header from './_components/header';
import Hero from './_components/hero';
import Cards from './_components/cards';
import Mp4Section from './_components/mp4Section';
import InfoWithIcons from './_components/infoWithIcons';
import AboutUs from './_components/aboutUs';
import InstagramSection from './_components/instagramSection';
import Footer from './_components/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f7f2fc] via-[#fdf6f8] to-[#f1faff] text-gray-800">
<div className="relative min-h-screen  overflow-hidden">
   <div className="absolute top-[10px] left-[-100px] w-[600px] h-[600px] bg-pink-300 opacity-40 rounded-full filter blur-3xl z-0"></div>
  <div className="absolute top-1/3 left-[-100px] w-[600px] h-[600px] bg-pink-300 opacity-40 rounded-full filter blur-3xl z-0"></div>  
  <div className="absolute  right-[-150px] w-[500px] h-[500px] bg-blue-300 opacity-40 rounded-full filter blur-3xl z-0"></div>
  <div className="absolute top-1/4 right-[50px] w-[400px] h-[400px] bg-blue-300 opacity-40 rounded-full filter blur-3xl z-0"></div>  
  <div className="absolute  right-[-150px] w-[500px] h-[500px] bg-blue-300 opacity-40 rounded-full filter blur-3xl z-0"></div>
    <div className="absolute bottom-1/4 right-[-20px] w-[400px] h-[400px] bg-blue-300 opacity-40 rounded-full filter blur-3xl z-0"></div>  
  <div className="absolute  bottom-[50px] left-[100px] w-[650px] h-[650px] bg-pink-300 opacity-40 rounded-full filter blur-3xl z-0"></div>
  <div className="relative">
      <Header/>
      <Hero/>
      <Cards/>
      <InfoWithIcons/>
      <Mp4Section/>
      <AboutUs/>
      <InstagramSection/>
      <Footer/>
  </div>
</div>
    </main>
  );
}
