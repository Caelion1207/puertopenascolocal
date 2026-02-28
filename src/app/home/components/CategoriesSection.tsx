'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const categories = [
  { id: 1, name: 'Restaurantes', emoji: '🍽️', slug: 'restaurantes', span: 'col-span-2 row-span-1', bg: '#173831' },
  { id: 2, name: 'Farmacias', emoji: '💊', slug: 'farmacias', span: 'col-span-1 row-span-2', bg: '#173831' },
  { id: 3, name: 'Taller / Mecánico', emoji: '🔧', slug: 'taller-mecanico', span: 'col-span-1 row-span-1', bg: '#173831' },
  { id: 4, name: 'Bares', emoji: '🍺', slug: 'bares', span: 'col-span-1 row-span-1', bg: '#173831' },
  { id: 5, name: 'Servicios', emoji: '⚙️', slug: 'servicios', span: 'col-span-2 row-span-1', bg: '#173831' },
];

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="categorias" className="py-20 bg-[#051F20]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8CB79B] mb-2">Explora</p>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#E8F5EA] leading-tight">
              Categorías principales
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4 h-[420px] sm:h-[480px]">
          {categories?.map((cat, i) => (
            <Link
              key={cat?.id}
              href={`/categoria/${cat?.slug}`}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} cat-card rounded-2xl sm:rounded-3xl cursor-pointer group relative overflow-hidden ${cat?.span}`}
              style={{
                backgroundColor: cat?.bg,
                border: '1px solid rgba(140,183,155,0.1)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(140,183,155,0.08) 0%, transparent 70%)' }}
              />
              <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5">
                <span className="text-2xl sm:text-3xl">{cat?.emoji}</span>
                <div>
                  <h3 className="font-semibold text-[#E8F5EA] text-sm sm:text-base leading-tight">{cat?.name}</h3>
                  <p className="text-[11px] text-[#6B9E7A] mt-0.5">Ver negocios →</p>
                </div>
              </div>
              {/* Corner arrow */}
              <div
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                style={{ background: 'rgba(140,183,155,0.2)' }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}