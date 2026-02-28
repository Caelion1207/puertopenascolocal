'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface GaleriaItem {
  src: string;
  alt: string;
  label: string;
}

interface GalleryModalProps {
  galeria: GaleriaItem[];
  nombre: string;
}

export default function GalleryModal({ galeria, nombre }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? galeria.length - 1 : prev - 1));

  const next = () =>
    setCurrentIndex((prev) => (prev === galeria.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div
        className="rounded-3xl p-6 sm:p-8"
        style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
        <h2 className="font-semibold text-[#E8F5EA] text-base mb-5">Galería</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {galeria.map((img, i) => (
            <button
              key={i}
              onClick={() => openModal(i)}
              className="relative rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#8CB79B]"
              style={{ paddingBottom: '75%' }}
              aria-label={`Ver imagen: ${img.label}`}>
              <AppImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                style={{ background: 'rgba(5,31,32,0.5)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8F5EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-2 py-1.5"
                style={{ background: 'linear-gradient(to top, rgba(5,31,32,0.8), transparent)' }}>
                <p className="text-[10px] text-[#E8F5EA]/80 font-medium">{img.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(5,31,32,0.95)', backdropFilter: 'blur(8px)' }}
          onClick={closeModal}>
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}>
            {/* Close button — visible, closes modal only */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-[#8CB79B] hover:text-[#E8F5EA] transition-colors"
              aria-label="Cerrar galería">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image — renders galeria[currentIndex] */}
            <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom: '66%' }}>
              <AppImage
                src={galeria[currentIndex].src}
                alt={galeria[currentIndex].alt}
                fill
                className="object-cover" />
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between mt-3 px-1">
              <p className="text-[#8CB79B] text-sm font-medium">
                {galeria[currentIndex].label} — {nombre}
              </p>
              <p className="text-[#6B9E7A] text-xs">
                {currentIndex + 1} / {galeria.length}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(140,183,155,0.1)', border: '1px solid rgba(140,183,155,0.2)' }}
                aria-label="Imagen anterior">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(140,183,155,0.1)', border: '1px solid rgba(140,183,155,0.2)' }}
                aria-label="Siguiente imagen">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 justify-center flex-wrap">
              {galeria.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    index === currentIndex
                      ? 'ring-2 ring-[#8CB79B] opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  style={{ width: 48, height: 36 }}
                  aria-label={`Ver imagen ${index + 1}`}>
                  <AppImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
