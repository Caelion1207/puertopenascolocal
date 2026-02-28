import React from 'react';
import Link from 'next/link';

export default function LeadCaptureSection() {
  return (
    <section className="py-10 px-5" style={{ background: '#051F20' }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl px-8 py-10 sm:px-12 sm:py-12 flex flex-col items-center text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0D3B2E 0%, #173831 100%)', border: '1px solid rgba(140,183,155,0.2)' }}>
          {/* Ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(140,183,155,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
          />

          <span
            className="inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
            style={{ background: 'rgba(140,183,155,0.12)', color: '#8CB79B', border: '1px solid rgba(140,183,155,0.2)' }}>
            Para dueños de negocios
          </span>

          <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#E8F5EA] leading-tight mb-4">
            ¿Tienes un negocio en Puerto Peñasco?
          </h2>

          <p className="text-[#6B9E7A] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Miles de turistas y locales buscan negocios como el tuyo. Aparece en Radar Local y empieza a recibir más clientes hoy mismo.
          </p>

          <Link
            href="/registro-negocio"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: '#8CB79B', color: '#051F20' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Quiero aparecer en Radar Local
          </Link>
        </div>
      </div>
    </section>
  );
}
