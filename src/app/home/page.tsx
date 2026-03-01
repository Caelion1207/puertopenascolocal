'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedListings from './components/FeaturedListings';
import OwnerCTA from './components/OwnerCTA';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="min-h-screen bg-[#051F20] noise-overlay">
      <Header />
      <main>
        <HeroSection />
        <FeaturedListings activeCategory={activeCategory} onClearSearch={() => setActiveCategory('')} />
        {/* Fase 5: Solo OwnerCTA al final */}
        <OwnerCTA />
      </main>
      <Footer />
    </div>
  );
}