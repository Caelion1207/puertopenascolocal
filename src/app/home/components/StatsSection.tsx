'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
{ value: 480, suffix: '+', label: 'Negocios registrados', icon: '🏪' },
{ value: 12, suffix: 'K+', label: 'Búsquedas mensuales', icon: '🔍' },
{ value: 4.8, suffix: '★', label: 'Valoración promedio', icon: '⭐', decimal: true },
{ value: 98, suffix: '%', label: 'Negocios verificados', icon: '✅' }];


const testimonials = [
{
  id: 1,
  name: 'Sofía Mendoza Ruiz',
  role: 'Turista de Hermosillo',
  avatar: "https://images.unsplash.com/photo-1609029577965-705aa5293416",
  avatarAlt: 'Mujer joven sonriendo, turista visitando Puerto Peñasco desde Hermosillo',
  quote: 'Encontré el mejor restaurante de mariscos en 30 segundos. Increíble lo fácil que es descubrir negocios locales aquí.',
  rating: 5
},
{
  id: 2,
  name: 'Carlos Vega Torres',
  role: 'Residente local',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17e8b6b7e-1763295946660.png",
  avatarAlt: 'Hombre adulto residente de Puerto Peñasco con camisa casual',
  quote: 'Gracias a PuertoPeñascoLocal mi tienda recibe 3 veces más clientes. La plataforma es súper fácil de usar.',
  rating: 5
},
{
  id: 3,
  name: 'Jessica Park',
  role: 'Turista de Phoenix, AZ',
  avatar: "https://images.unsplash.com/photo-1495632120336-f07c31484294",
  avatarAlt: 'Mujer americana sonriendo, turista de Phoenix visitando Rocky Point',
  quote: 'As an American visitor to Rocky Point, this was a lifesaver. Found everything I needed in one place.',
  rating: 5
}];


function CountUp({ target, suffix, decimal }: {target: number;suffix: string;decimal?: boolean;}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(current);
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.round(count)}{suffix}
    </span>);

}

export default function StatsSection() {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#051F20]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Stats row */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20">
          {stats.map((stat, i) =>
          <div
            key={i}
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center"
            style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
            
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#8CB79B] mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <p className="text-[12px] text-[#6B9E7A] font-medium">{stat.label}</p>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="reveal mb-10 text-center">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8CB79B] mb-2">Testimonios</p>
          <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#E8F5EA]">
            Lo que dicen los usuarios
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) =>
          <div
            key={t.id}
            className={`reveal reveal-delay-${i + 1} rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-4`}
            style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
            
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, s) =>
              <span key={s} className="star">★</span>
              )}
              </div>
              {/* Quote */}
              <p className="text-[#E8F5EA]/80 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full" />
                
                </div>
                <div>
                  <p className="text-[#E8F5EA] font-semibold text-sm">{t.name}</p>
                  <p className="text-[11px] text-[#6B9E7A]">{t.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}