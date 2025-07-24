// src/app/_components/header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className=" fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md text-[#fdfdfd]">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <span className="text-2xl md:text-3xl  tracking-tight text-[#fdfdfd]">
      nanny<span className="text-pink-500">agency</span>
    </span>
    <nav className="hidden md:flex space-x-8 items-center text-[#fdfdfd] text-base">
      <a href="#about" className="hover:text-pink-500 transition">About</a>
      <a href="#services" className="hover:text-pink-500 transition">Services</a>
      <a href="#team" className="hover:text-pink-500 transition">Team</a>
      <a
        href="#contact"
        className="ml-4 px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition font-medium"
      >
        Get Started
      </a>
    </nav>
  </div>
</header>
  );
};

export default Header;
