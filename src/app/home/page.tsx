'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import CategoryQuickFilter from './components/CategoryQuickFilter';
import FeaturedListings from './components/FeaturedListings';
import OwnerCTA from './components/OwnerCTA';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category: string) => {
    const next = activeCategory === category ? '' : category;
    setActiveCategory(next);
  };

  return (
    <div className="min-h-screen bg-[#051F20] noise-overlay">
      <Header />
      <main>
        <HeroSection />
        <CategoryQuickFilter activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
        <FeaturedListings activeCategory={activeCategory} onClearSearch={() => setActiveCategory('')} />
        {/* Fase 5: Solo OwnerCTA al final */}
        <OwnerCTA />
      </main>
      <Footer />
    </div>
  );
}