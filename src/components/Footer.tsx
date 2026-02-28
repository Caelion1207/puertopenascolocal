"use client";
import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

const SITE_WHATSAPP = "526381123970";

export default function Footer() {
  const year = new Date()?.getFullYear();
  return (
    <footer className="border-t border-[rgba(140,183,155,0.12)] bg-[#051F20]">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AppLogo size={28} />
              <span className="font-fraunces text-[#8CB79B] text-sm font-semibold">
                Radar Local
              </span>
            </div>
            <p className="text-[12px] text-[#6B9E7A] leading-relaxed max-w-[200px]">
              Directorio de negocios locales en Puerto Peñasco, Sonora.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: 'rgba(140,183,155,0.08)', border: '1px solid rgba(140,183,155,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8CB79B] opacity-70" />
              <span className="text-[10px] text-[#8CB79B] opacity-70">Plataforma en lanzamiento</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8CB79B] mb-3">Categorías</p>
            <div className="flex flex-col gap-2">
              <Link href="/categoria/restaurantes" className="text-[13px] text-[#6B9E7A] hover:text-[#E8F5EA] transition-colors">Restaurantes</Link>
              <Link href="/categoria/farmacias" className="text-[13px] text-[#6B9E7A] hover:text-[#E8F5EA] transition-colors">Farmacias</Link>
              <Link href="/categoria/taller-mecanico" className="text-[13px] text-[#6B9E7A] hover:text-[#E8F5EA] transition-colors">Taller / Mecánico</Link>
              <Link href="/categoria/bares" className="text-[13px] text-[#6B9E7A] hover:text-[#E8F5EA] transition-colors">Bares</Link>
              <Link href="/categoria/servicios" className="text-[13px] text-[#6B9E7A] hover:text-[#E8F5EA] transition-colors">Servicios</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8CB79B] mb-3">Contacto</p>
            <div className="flex flex-col gap-2">
              <Link href="/registro-negocio" className="text-[13px] text-[#6B9E7A] hover:text-[#E8F5EA] transition-colors">Registra tu negocio</Link>
              <a
                href={`https://wa.me/${SITE_WHATSAPP}?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Radar%20Local`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#6B9E7A] hover:text-[#E8F5EA] transition-colors flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-[#8CB79B]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(140,183,155,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#6B9E7A]">© {year} Radar Local · Puerto Peñasco, Sonora</p>
          <div className="flex items-center gap-4 text-[12px] text-[#6B9E7A]">
            <a href="#" className="hover:text-[#E8F5EA] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#E8F5EA] transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}