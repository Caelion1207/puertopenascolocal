'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#051F20]/90 backdrop-blur-xl border-b border-[rgba(140,183,155,0.12)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2">
          <AppLogo size={32} />
          <span className="font-fraunces font-semibold text-[#E8F5EA] text-lg tracking-tight hidden sm:block">
            PuertoPeñasco<span className="text-[#8CB79B]">Local</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8CB79B]">
          <Link href="/home#categorias" className="hover:text-[#E8F5EA] transition-colors duration-200">Categorías</Link>
          <Link href="/home#negocios" className="hover:text-[#E8F5EA] transition-colors duration-200">Negocios</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/registro-negocio"
            className="hidden sm:inline-flex items-center gap-1.5 btn-primary text-xs px-4 py-2 rounded-full"
          >
            Registra tu negocio
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#8CB79B] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen
                ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
                : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>
              }
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#051F20]/95 backdrop-blur-xl border-t border-[rgba(140,183,155,0.12)] px-5 py-4 flex flex-col gap-4">
          <Link href="/home#categorias" className="text-sm text-[#8CB79B] font-medium" onClick={() => setMenuOpen(false)}>Categorías</Link>
          <Link href="/home#negocios" className="text-sm text-[#8CB79B] font-medium" onClick={() => setMenuOpen(false)}>Negocios</Link>
          <Link href="/registro-negocio" className="btn-primary text-xs px-4 py-2.5 rounded-full text-center" onClick={() => setMenuOpen(false)}>
            Registra tu negocio
          </Link>
        </div>
      )}
    </header>
  );
}