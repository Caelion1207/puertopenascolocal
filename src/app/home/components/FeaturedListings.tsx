'use client';
import React, { useEffect, useRef, useMemo } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import { Negocio, negocios } from '@/data/negocios';

// Fase 2 — Normalización de texto para búsqueda real
function normalizar(texto: string): string {
  return texto.
  toLowerCase().
  normalize('NFD').
  replace(/[\u0300-\u036f]/g, '').
  replace(/[^a-z0-9\s]/g, ' ').
  trim();
}

function buscarCoincidencia(negocio: Negocio, palabras: string[]): boolean {
  const campos = [
  normalizar(negocio.nombre),
  normalizar(negocio.descripcion),
  normalizar(negocio.categoria),
  ...negocio.tags.map(normalizar)].
  join(' ');
  return palabras.every((palabra) => campos.includes(palabra));
}

function obtenerSugerencia(query: string): string | null {
  const q = normalizar(query);
  const sugerencias: {palabras: string[];categoria: string;}[] = [
  { palabras: ['desayuno', 'comida', 'comer', 'restaurante', 'taco', 'mariscos', 'seafood', 'almuerzo', 'cena', 'fresco'], categoria: 'Restaurante' },
  { palabras: ['farmacia', 'medicina', 'medicamento', 'salud', 'pastilla', 'remedio'], categoria: 'Farmacia' },
  { palabras: ['taller', 'mecanico', 'carro', 'auto', 'frenos', 'aceite', 'llanta', 'reparacion'], categoria: 'Taller / Mecánico' },
  { palabras: ['bar', 'cerveza', 'coctel', 'noche', 'bebida', 'trago'], categoria: 'Bar' },
  { palabras: ['servicio', 'limpieza', 'plomero', 'electricista', 'pintura', 'jardineria', 'cerrajero'], categoria: 'Servicios' }];

  for (const s of sugerencias) {
    if (s.palabras.some((p) => q.includes(p))) return s.categoria;
  }
  return null;
}

interface FeaturedListingsProps {
  activeCategory?: string;
  onClearSearch?: () => void;
}

export default function FeaturedListings({ activeCategory = '', onClearSearch }: FeaturedListingsProps) {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    if (!activeCategory) return negocios;
    return negocios.filter((n) =>
      normalizar(n.categoria).includes(normalizar(activeCategory))
    );
  }, [activeCategory]);

  const isFiltering = activeCategory.trim().length > 0;

  return (
    <section id="negocios" className="py-20" style={{ background: '#0A2A2B' }} ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8CB79B] mb-2">Destacados</p>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#E8F5EA] leading-tight">
              {isFiltering ?
              <>
                  Resultados para{' '}
                  <em className="not-italic text-[#8CB79B]">&ldquo;{activeCategory}&rdquo;</em>
                </> :

              'Negocios destacados'
              }
            </h2>
          </div>
        </div>

        {/* Contador dinámico */}
        {isFiltering &&
        <div className="reveal mb-6">
            {filtered.length > 0 ?
          <p className="text-[#8CB79B] text-sm font-medium">
                Mostrando{' '}
                <span className="font-bold text-[#E8F5EA]">{filtered.length}</span>
                {' '}resultado{filtered.length !== 1 ? 's' : ''} para{' '}
                <span className="text-[#8CB79B] font-semibold">&ldquo;{activeCategory}&rdquo;</span>
              </p> :

          <p className="text-[#6B9E7A] text-sm">
                No se encontraron resultados para{' '}
                <span className="text-[#8CB79B] font-semibold">&ldquo;{activeCategory}&rdquo;</span>
              </p>
          }
          </div>
        }

        {filtered.length > 0 ?
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map((neg, i) =>
          <div key={neg.id} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <BusinessCard negocio={neg} />
              </div>
          )}
          </div> :

        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
            style={{ background: 'rgba(140,183,155,0.08)', border: '1px solid rgba(140,183,155,0.15)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B9E7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <p className="text-[#E8F5EA] font-semibold text-lg mb-2">Sin resultados</p>
            <p className="text-[#6B9E7A] text-sm max-w-xs mb-4">
              No encontramos negocios en la categoría{' '}
              <span className="text-[#8CB79B]">&ldquo;{activeCategory}&rdquo;</span>.
            </p>
            {onClearSearch &&
          <button
            onClick={onClearSearch}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: 'rgba(140,183,155,0.1)',
              border: '1.5px solid rgba(140,183,155,0.25)',
              color: '#8CB79B'
            }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Limpiar filtro
              </button>
          }
          </div>
        }
      </div>
    </section>);

}

function BusinessCard({ negocio }: {negocio: Negocio;}) {
  const portada = negocio.galeria[0];
  return (
    <Link
      href={`/negocio/${negocio.slug}`}
      className="biz-card rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group h-full flex flex-col"
      style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
      <div className="relative h-[200px] overflow-hidden shrink-0">
        <AppImage
          src={portada.src}
          alt={portada.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173831]/70 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="tag tag-open">{negocio.tags[0]}</span>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#6B9E7A] mb-1">{negocio.categoria}</p>
        <h3 className="font-semibold text-[#E8F5EA] text-base mb-3 leading-tight">{negocio.nombre}</h3>
        <div className="flex flex-col gap-1.5 mb-4 flex-1">
          <p className="text-[12px] text-[#6B9E7A] flex items-center gap-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            {negocio.direccion}
          </p>
        </div>
        <span className="btn-primary text-xs font-bold px-4 py-2.5 rounded-xl text-center block">
          Ver negocio →
        </span>
      </div>
    </Link>);

}