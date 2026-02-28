'use client';
import React from 'react';

const CATEGORIES = [
  { label: 'Restaurantes', icon: '🍽️', query: 'Restaurante' },
  { label: 'Farmacias', icon: '💊', query: 'Farmacia' },
  { label: 'Talleres', icon: '🔧', query: 'Taller' },
  { label: 'Bares', icon: '🍹', query: 'Bar' },
  { label: 'Servicios', icon: '⚡', query: 'Servicios' },
];

interface CategoryQuickFilterProps {
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

export default function CategoryQuickFilter({ activeCategory, onCategoryClick }: CategoryQuickFilterProps) {
  return (
    <section className="py-10 px-5" style={{ background: '#051F20' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8CB79B] mb-4 text-center">
          Explorar por categoría
        </p>

        {/* Mobile: horizontal scroll / Desktop: centered flex */}
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center hide-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.query;
            return (
              <button
                key={cat.query}
                onClick={() => onCategoryClick(cat.query)}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: isActive
                    ? 'rgba(140,183,155,0.18)'
                    : 'rgba(23,56,49,0.7)',
                  border: isActive
                    ? '1.5px solid rgba(140,183,155,0.55)'
                    : '1.5px solid rgba(140,183,155,0.12)',
                  color: isActive ? '#E8F5EA' : '#6B9E7A',
                  boxShadow: isActive ? '0 0 12px rgba(140,183,155,0.12)' : 'none',
                }}
                aria-pressed={isActive}
              >
                <span className="text-base leading-none">{cat.icon}</span>
                <span>{cat.label}</span>
                {isActive && (
                  <span
                    className="ml-1 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(140,183,155,0.25)' }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
