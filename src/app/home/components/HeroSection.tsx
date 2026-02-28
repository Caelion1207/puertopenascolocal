'use client';
import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const floatingCards = [
{
  id: 1,
  image: "https://images.unsplash.com/photo-1709971352284-5d0be57d1318",
  alt: 'Mariscos frescos servidos en restaurante costero de Puerto Peñasco',
  name: 'El Malecón Marino',
  category: 'Mariscos',
  tag: 'Abierto',
  floatClass: 'animate-float-a',
  delay: '0s'
},
{
  id: 2,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12bb8ee12-1768081184180.png",
  alt: 'Interior acogedor de restaurante mexicano con decoración tradicional',
  name: 'Casa Sonora',
  category: 'Restaurante',
  tag: 'Popular',
  floatClass: 'animate-float-b',
  delay: '1s',
  elevated: true
},
{
  id: 3,
  image: "https://images.unsplash.com/photo-1702355605400-2576c5942e9e",
  alt: 'Tienda de artesanías y souvenirs mexicanos en Puerto Peñasco',
  name: 'Artesanías del Mar',
  category: 'Tienda',
  tag: 'Nuevo',
  floatClass: 'animate-float-c',
  delay: '0.5s'
}];

export default function HeroSection() {
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>('.hero-float-card');
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      cards.forEach((card, i) => {
        const depth = [8, 14, 10][i] || 8;
        card.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12">
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #235347 0%, transparent 70%)', filter: 'blur(60px)' }} />
        
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8CB79B 0%, transparent 70%)', filter: 'blur(80px)' }} />
        
        <div
          className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #173831 0%, transparent 70%)', filter: 'blur(50px)' }} />
        
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text + Categories */}
          <div className="flex flex-col items-start">
            {/* Launch badge */}
            <div className="animate-fade-in flex items-center gap-2 mb-3 px-3 py-1 rounded-full" style={{ background: 'rgba(140,183,155,0.08)', border: '1px solid rgba(140,183,155,0.18)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8CB79B] opacity-80" />
              <span className="text-[10px] font-medium tracking-wide text-[#8CB79B] opacity-80">
                Plataforma en lanzamiento en Puerto Peñasco
              </span>
            </div>

            {/* Location badge */}
            <div className="animate-fade-in flex items-center gap-2 glass-card px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8CB79B]" style={{ boxShadow: '0 0 8px rgba(140,183,155,0.8)' }} />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8CB79B]">
                Puerto Peñasco, Sonora
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up font-fraunces text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] leading-[1.05] font-semibold text-[#E8F5EA] mb-4">
              Descubre los mejores{' '}
              <em className="not-italic text-[#8CB79B]">negocios locales</em>
            </h1>

            <p className="animate-fade-in-up-delay-1 text-[#6B9E7A] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Restaurantes, farmacias y servicios de Puerto Peñasco — todo en un solo lugar.
            </p>

            {/* Category chips */}
            <div className="animate-fade-in-up-delay-2 flex flex-wrap gap-2">
              {[
                { label: 'Restaurantes', slug: 'restaurantes' },
                { label: 'Farmacias', slug: 'farmacias' },
                { label: 'Taller', slug: 'talleres' },
                { label: 'Bares', slug: 'bares' },
                { label: 'Servicios', slug: 'servicios' },
              ].map((s) => (
                <Link
                  key={s.slug}
                  href={`/categoria/${s.slug}`}
                  className="text-[11px] font-medium text-[#6B9E7A] hover:text-[#8CB79B] transition-colors px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(140,183,155,0.07)', border: '1px solid rgba(140,183,155,0.12)' }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Floating cards grid */}
          <div className="hidden lg:flex items-center justify-center relative h-[520px]">
            {/* Card 1 — left */}
            <div
              className="hero-float-card animate-float-a absolute left-0 top-[60px] w-[200px] cursor-pointer"
              style={{ transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}>
              
              <FloatingBizCard card={floatingCards[0]} />
            </div>

            {/* Card 2 — center elevated */}
            <div
              className="hero-float-card animate-float-b absolute left-[50%] -translate-x-1/2 top-[0px] w-[210px] z-20 cursor-pointer"
              style={{ transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}>
              
              <FloatingBizCard card={floatingCards[1]} elevated />
            </div>

            {/* Card 3 — right */}
            <div
              className="hero-float-card animate-float-c absolute right-0 top-[80px] w-[200px] cursor-pointer"
              style={{ transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}>
              
              <FloatingBizCard card={floatingCards[2]} />
            </div>

            {/* Decorative ring */}
            <div
              className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{ border: '1px dashed rgba(140,183,155,0.12)' }} />
            
            <div
              className="absolute inset-0 m-auto w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{ border: '1px dashed rgba(140,183,155,0.08)' }} />
            
          </div>
        </div>

        {/* Mobile: horizontal scroll preview */}
        <div className="lg:hidden mt-10 flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 hide-scrollbar">
          {floatingCards.map((card) =>
          <div key={card.id} className="shrink-0 w-[180px]">
              <FloatingBizCard card={card} />
            </div>
          )}
        </div>
      </div>
    </section>);

}

function FloatingBizCard({ card, elevated }: {card: typeof floatingCards[0];elevated?: boolean;}) {
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden biz-card ${elevated ? 'shadow-[0_24px_60px_rgba(5,31,32,0.7)]' : 'shadow-[0_12px_32px_rgba(5,31,32,0.5)]'}`}>
      
      <div className="relative h-[130px] overflow-hidden">
        <AppImage
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#051F20]/60 to-transparent" />
        <span className="absolute top-2.5 right-2.5 tag tag-open">{card.tag}</span>
      </div>
      <div className="p-3.5">
        <p className="text-[11px] text-[#6B9E7A] font-semibold uppercase tracking-wider mb-0.5">{card.category}</p>
        <h3 className="text-[#E8F5EA] font-semibold text-sm leading-tight">{card.name}</h3>
      </div>
    </div>
  );
}