'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const SITE_WHATSAPP = "526381123970";

export default function OwnerCTA() {
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
    <section id="registro" className="py-20 px-5" style={{ background: '#051F20' }} ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div
          className="reveal rounded-4xl overflow-hidden relative"
          style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.15)' }}>
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center relative z-10">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(140,183,155,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            <span className="tag mb-5 inline-block">Para dueños de negocios</span>
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#E8F5EA] leading-tight mb-5">
              Haz crecer tu negocio en Puerto Peñasco
            </h2>
            <p className="text-[#6B9E7A] text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Miles de turistas y locales buscan negocios como el tuyo. Aparece en Radar Local y empieza a recibir más clientes hoy mismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/registro-negocio"
                className="btn-primary px-8 py-4 rounded-xl text-sm font-bold flex items-center gap-2">
                Quiero aparecer
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              {/* Fase 3 — WhatsApp del SITIO: solo en footer y aquí (sección final de registro) */}
              <a
                href={`https://wa.me/${SITE_WHATSAPP}?text=Hola%2C%20quiero%20registrar%20mi%20negocio%20en%20Radar%20Local`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-4 rounded-xl text-sm flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
