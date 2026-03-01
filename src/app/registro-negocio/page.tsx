'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const SITE_WHATSAPP = '526381123970';

// Fase 1 — Enum fijo de categorías
const CATEGORIAS = [
  'Restaurante',
  'Farmacia',
  'Taller / Mecánico',
  'Bar',
  'Servicios',
] as const;

type Categoria = typeof CATEGORIAS[number];

interface FormData {
  nombre: string;
  categoria: Categoria | '';
  telefono_contacto: string;
  direccion: string;
  descripcion: string;
}

export default function RegistroNegocioPage() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    categoria: '',
    telefono_contacto: '',
    direccion: '',
    descripcion: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fase 3 — WhatsApp del SITIO (no del negocio)
    const msg = encodeURIComponent(
      `Hola, quiero registrar mi negocio en Radar Local.\n\nNegocio: ${form.nombre}\nCategoría: ${form.categoria}\nTeléfono: ${form.telefono_contacto}\nDirección: ${form.direccion}\nDescripción: ${form.descripcion}`
    );
    window.open(`https://wa.me/${SITE_WHATSAPP}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#051F20]">
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-[#6B9E7A] mb-8">
            <Link href="/home" className="hover:text-[#8CB79B] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-[#8CB79B]">Registra tu negocio</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <span className="tag mb-4 inline-block">Para dueños de negocios</span>
            <h1 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#E8F5EA] mb-3">
              Registra tu negocio en Radar Local
            </h1>
            <p className="text-[#6B9E7A] text-base leading-relaxed">
              Aparece cuando turistas y locales busquen lo que vendes. Llena el formulario y te contactamos.
            </p>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-6 sm:p-8 flex flex-col gap-5"
              style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.12)' }}
            >
              {/* Nombre */}
              <div>
                <label className="block text-[12px] font-semibold text-[#8CB79B] uppercase tracking-wider mb-2">Nombre del negocio *</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Restaurante El Malecón"
                  className="w-full px-4 py-3 rounded-xl text-[#E8F5EA] placeholder-[#6B9E7A] text-sm outline-none transition-all"
                  style={{ background: 'rgba(5,31,32,0.5)', border: '1.5px solid rgba(140,183,155,0.15)' }}
                />
              </div>

              {/* Categoría — enum fijo */}
              <div>
                <label className="block text-[12px] font-semibold text-[#8CB79B] uppercase tracking-wider mb-2">Categoría *</label>
                <select
                  name="categoria"
                  value={form.categoria}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ background: 'rgba(5,31,32,0.5)', border: '1.5px solid rgba(140,183,155,0.15)', color: form.categoria ? '#E8F5EA' : '#6B9E7A' }}
                >
                  <option value="" disabled>Selecciona una categoría</option>
                  {CATEGORIAS.map((cat) => (
                    <option key={cat} value={cat} style={{ background: '#173831', color: '#E8F5EA' }}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Teléfono de contacto único — Fase 4: eliminar campo WhatsApp duplicado */}
              <div>
                <label className="block text-[12px] font-semibold text-[#8CB79B] uppercase tracking-wider mb-2">Número de contacto *</label>
                <input
                  type="tel"
                  name="telefono_contacto"
                  value={form.telefono_contacto}
                  onChange={handleChange}
                  required
                  placeholder="+52 638 000 0000"
                  className="w-full px-4 py-3 rounded-xl text-[#E8F5EA] placeholder-[#6B9E7A] text-sm outline-none"
                  style={{ background: 'rgba(5,31,32,0.5)', border: '1.5px solid rgba(140,183,155,0.15)' }}
                />
                <p className="text-[11px] text-[#6B9E7A] mt-1.5">Este número se usará para WhatsApp y contacto directo.</p>
              </div>

              {/* Dirección */}
              <div>
                <label className="block text-[12px] font-semibold text-[#8CB79B] uppercase tracking-wider mb-2">Dirección *</label>
                <input
                  type="text"
                  name="direccion"
                  value={form.direccion}
                  onChange={handleChange}
                  required
                  placeholder="Calle, número, colonia"
                  className="w-full px-4 py-3 rounded-xl text-[#E8F5EA] placeholder-[#6B9E7A] text-sm outline-none"
                  style={{ background: 'rgba(5,31,32,0.5)', border: '1.5px solid rgba(140,183,155,0.15)' }}
                />
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-[12px] font-semibold text-[#8CB79B] uppercase tracking-wider mb-2">Descripción</label>
                <textarea
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                  rows={3}
                  placeholder="¿Qué ofreces? ¿Qué hace especial a tu negocio?"
                  className="w-full px-4 py-3 rounded-xl text-[#E8F5EA] placeholder-[#6B9E7A] text-sm outline-none resize-none"
                  style={{ background: 'rgba(5,31,32,0.5)', border: '1.5px solid rgba(140,183,155,0.15)' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          ) : (
            <div
              className="rounded-3xl p-8 sm:p-12 text-center"
              style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.12)' }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(140,183,155,0.15)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="font-fraunces text-2xl font-semibold text-[#E8F5EA] mb-3">¡Listo!</h2>
              <p className="text-[#6B9E7A] text-sm leading-relaxed mb-6">
                Se abrió WhatsApp con tu información. Envía el mensaje y adjunta tus imágenes — te contactaremos pronto.
              </p>
              <Link href="/home" className="btn-outline px-6 py-3 rounded-xl text-sm inline-block">
                Volver al inicio
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
