import React from 'react';
import Header from '@/components/Header';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Footer from '@/components/Footer';
import GalleryModal from './GalleryModal';

// Fase 1 — Entidad NEGOCIO con campos exactos (sin ratings, sin favoritos, sin métricas)
interface Negocio {
  nombre: string;
  categoria: string;
  categoriaSlug: string;
  descripcion: string;
  direccion: string;
  horario: string;
  telefono_contacto: string; // único número — Fase 3
  heroImage: string;
  heroAlt: string;
  galeria: {src: string;alt: string;label: string;}[];
  tags: string[];
}

const negocios: Record<string, Negocio> = {
  'restaurante-el-malecon': {
    nombre: 'El Malecón Marino',
    categoria: 'Restaurante',
    categoriaSlug: 'restaurantes',
    descripcion: 'Restaurante de mariscos y seafood con vista al mar en el corazón de Puerto Peñasco. Ofrecemos los platillos más frescos del Golfo de California, preparados con recetas tradicionales de Sonora. Un lugar ideal para disfrutar en familia o con amigos.',
    direccion: 'Blvd. Benito Juárez 120, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 11:00am – 10:00pm',
    telefono_contacto: '526381000001',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ef30ea62-1772211556993.png',
    heroAlt: 'Vista principal del restaurante El Malecón Marino con platillos de mariscos frescos',
    galeria: [
    { src: 'https://images.unsplash.com/photo-1726942115955-5e7b68bf77ba', alt: 'Interior del restaurante El Malecón Marino con mesas y decoración marina', label: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1613109041031-817b5156e268', alt: 'Fachada exterior del restaurante El Malecón Marino en el boulevard', label: 'Fachada' },
    { src: 'https://images.unsplash.com/photo-1698462297918-79ae9314e062', alt: 'Platillo especial de mariscos mixtos con camarones y pulpo', label: 'Platillo especial' },
    { src: 'https://images.unsplash.com/photo-1655844356175-76b475c178af', alt: 'Detalle de presentación de ceviche fresco con tostadas', label: 'Detalle' },
    { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1056b1e33-1772264951690.png", alt: 'Plato de mariscos frescos del día en El Malecón Marino', label: 'Especialidad' }],

    tags: ['mariscos', 'seafood', 'vista al mar', 'familiar', 'golfo de california']
  },
  'farmacia-san-angel': {
    nombre: 'Farmacia San Ángel',
    categoria: 'Farmacia',
    categoriaSlug: 'farmacias',
    descripcion: 'Farmacia de confianza en Puerto Peñasco con más de 10 años de servicio a la comunidad. Contamos con medicamentos de patente y genéricos, productos de higiene personal y atención farmacéutica. Servicio a domicilio disponible.',
    direccion: 'Av. Constitución 310, Puerto Peñasco, Sonora',
    horario: 'Abierto las 24 horas, los 365 días del año',
    telefono_contacto: '526381000004',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_163da0b1d-1769527337151.png',
    heroAlt: 'Farmacia San Ángel con amplio surtido de medicamentos y productos de salud',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cc77b8a6-1768683532632.png', alt: 'Interior de Farmacia San Ángel con pasillos organizados y productos de salud', label: 'Interior' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b9010a35-1772256608917.png', alt: 'Fachada de Farmacia San Ángel en Avenida Constitución', label: 'Fachada' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17b834222-1772213824207.png', alt: 'Sección de vitaminas y suplementos en Farmacia San Ángel', label: 'Productos' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ac783ba9-1767974925463.png', alt: 'Mostrador de atención farmacéutica con personal capacitado', label: 'Atención' },
    { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d18fe5a1-1772264953442.png", alt: 'Farmacia San Ángel vista exterior con letrero iluminado', label: 'Exterior' }],

    tags: ['medicamentos', 'genéricos', 'patente', 'higiene', 'domicilio', '24 horas']
  },
  'taller-el-chavo': {
    nombre: 'Taller El Chavo',
    categoria: 'Taller / Mecánico',
    categoriaSlug: 'taller-mecanico',
    descripcion: 'Taller mecánico con experiencia en todo tipo de vehículos. Ofrecemos servicio de afinación, frenos, suspensión, cambio de aceite y diagnóstico computarizado. Trabajo garantizado y precios honestos en Puerto Peñasco.',
    direccion: 'Calle 13 de Abril 88, Puerto Peñasco, Sonora',
    horario: 'Lunes a Sábado: 8:00am – 6:00pm',
    telefono_contacto: '526381000006',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_11e6d8c90-1767782190697.png',
    heroAlt: 'Taller El Chavo con mecánico trabajando en vehículo y herramientas profesionales',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd3fc95a-1772149206418.png', alt: 'Interior del Taller El Chavo con área de trabajo y elevador hidráulico', label: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1605544294782-2529c35cfa20', alt: 'Fachada del Taller El Chavo en Calle 13 de Abril', label: 'Fachada' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_151a8b1e1-1772258685171.png', alt: 'Herramientas y equipo de diagnóstico computarizado en el taller', label: 'Equipo' },
    { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb8136b8-1772264949956.png", alt: 'Mecánico realizando cambio de aceite y revisión de motor', label: 'Servicio' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_149164a3e-1767155041466.png', alt: 'Taller mecánico con herramientas y vehículo en reparación', label: 'Taller' }],

    tags: ['afinación', 'frenos', 'aceite', 'suspensión', 'diagnóstico', 'vehículos']
  },
  'bar-el-faro': {
    nombre: 'Bar El Faro',
    categoria: 'Bar',
    categoriaSlug: 'bares',
    descripcion: 'Bar con ambiente relajado y vista al mar en Puerto Peñasco. Ofrecemos cocteles artesanales, cerveza nacional e importada y botanas. El lugar perfecto para disfrutar el atardecer del Golfo de California con buena música.',
    direccion: 'Paseo Las Glorias 12, Puerto Peñasco, Sonora',
    horario: 'Jueves a Domingo: 6:00pm – 2:00am',
    telefono_contacto: '526381000008',
    heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16555ff76-1772264951684.png",
    heroAlt: 'Bar El Faro con ambiente nocturno, luces cálidas y vista al mar',
    galeria: [
    { src: 'https://images.unsplash.com/photo-1708396911395-1d140b452f6b', alt: 'Interior del Bar El Faro con barra iluminada y ambiente acogedor', label: 'Interior' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10359e184-1772256608194.png', alt: 'Fachada del Bar El Faro en Paseo Las Glorias con vista al mar', label: 'Fachada' },
    { src: 'https://images.unsplash.com/photo-1489168962196-c9054cdf201e', alt: 'Cocteles artesanales preparados en Bar El Faro', label: 'Cocteles' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a5151a2c-1772257128858.png', alt: 'Terraza del Bar El Faro con mesas y vista al atardecer', label: 'Terraza' },
    { src: 'https://images.unsplash.com/photo-1583383058494-9bde2dac58b4', alt: 'Ambiente nocturno en Bar El Faro con iluminación cálida', label: 'Noche' }],

    tags: ['cocteles', 'cerveza', 'música en vivo', 'náutico', 'botanas', 'mar', 'fin de semana']
  },
  'servicios-peñasco-pro': {
    nombre: 'Peñasco Pro Servicios',
    categoria: 'Servicios',
    categoriaSlug: 'servicios',
    descripcion: 'Empresa de servicios del hogar y negocios en Puerto Peñasco. Ofrecemos plomería, electricidad, pintura y mantenimiento general. Personal capacitado, materiales de calidad y presupuesto sin costo. Atendemos emergencias.',
    direccion: 'Av. Benito Juárez 55, Puerto Peñasco, Sonora',
    horario: 'Lunes a Sábado: 8:00am – 6:00pm',
    telefono_contacto: '526381000010',
    heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_179d2f387-1772264955585.png",
    heroAlt: 'Técnico de Peñasco Pro Servicios realizando trabajo de instalación profesional',
    galeria: [
    { src: 'https://images.unsplash.com/photo-1499387190570-f176fa092e35', alt: 'Equipo de Peñasco Pro Servicios con uniformes y herramientas de trabajo', label: 'Equipo' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1069ba0fa-1772257127551.png', alt: 'Trabajo de plomería realizado por Peñasco Pro Servicios en hogar', label: 'Plomería' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bd7ca23b-1769351129025.png', alt: 'Instalación eléctrica profesional por técnico certificado', label: 'Electricidad' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1539e5ac6-1770497276222.png', alt: 'Trabajo de pintura y acabados en interior de vivienda', label: 'Pintura' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17fb5db0e-1772062508388.png', alt: 'Técnico realizando mantenimiento general en hogar', label: 'Mantenimiento' }],

    tags: ['plomería', 'electricidad', 'pintura', 'mantenimiento', 'emergencias', 'hogar']
  },
  'restaurante-la-curva': {
    nombre: 'La Curva Grill',
    categoria: 'Restaurante',
    categoriaSlug: 'restaurantes',
    descripcion: 'Restaurante de parrilla y carnes asadas en Puerto Peñasco. Ambiente familiar con mesas al aire libre, cortes de res de primera calidad y acompañamientos tradicionales. Ideal para reuniones y celebraciones.',
    direccion: 'Blvd. Fremont 340, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 1:00pm – 10:00pm',
    telefono_contacto: '526381000012',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_16c5c63d6-1772256612699.png',
    heroAlt: 'Parrilla con carnes asadas y ambiente familiar en La Curva Grill',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d063aee2-1772257127333.png', alt: 'Corte de carne asada a la parrilla con guarniciones en La Curva Grill', label: 'Parrilla' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d306b80a-1772257127650.png', alt: 'Interior del restaurante La Curva Grill con mesas y decoración rústica', label: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1581876763130-ab595a583640', alt: 'Mesas al aire libre en terraza de La Curva Grill', label: 'Terraza' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e7259998-1772257129137.png', alt: 'Variedad de platillos y especialidades de La Curva Grill', label: 'Menú' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_19c75f444-1772256609909.png', alt: 'Fachada exterior del restaurante La Curva Grill en Blvd. Fremont', label: 'Fachada' }],

    tags: ['parrilla', 'carnes', 'carne asada', 'familiar', 'celebraciones', 'cortes']
  },
  'restaurante-el-capitan': {
    nombre: 'El Capitán Seafood',
    categoria: 'Restaurante',
    categoriaSlug: 'restaurantes',
    descripcion: 'Especialistas en mariscos y pescados frescos del Golfo de California. Ofrecemos ceviche, aguachile, camarones al mojo de ajo y filete de pescado. Ambiente marinero con vista al puerto.',
    direccion: 'Paseo Las Glorias 88, Puerto Peñasco, Sonora',
    horario: 'Miércoles a Lunes: 12:00pm – 9:00pm',
    telefono_contacto: '526381000013',
    heroImage: 'https://images.unsplash.com/photo-1555604042-c7829d285bfd',
    heroAlt: 'Platillos de mariscos frescos del Golfo en El Capitán Seafood',
    galeria: [
    { src: 'https://images.unsplash.com/photo-1726514729400-5055d76ca05b', alt: 'Ceviche fresco con tostadas y limón en El Capitán Seafood', label: 'Ceviche' },
    { src: 'https://images.unsplash.com/photo-1642546517745-13bc7057f8e3', alt: 'Plato de camarones al mojo de ajo con arroz y ensalada', label: 'Camarones' },
    { src: 'https://images.unsplash.com/photo-1609367573693-2f0541c231aa', alt: 'Interior del restaurante El Capitán Seafood con decoración marinera', label: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1634824875720-cd5e3178e296', alt: 'Vista al paseo desde la terraza de El Capitán Seafood', label: 'Vista' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b6389723-1772256608783.png', alt: 'Fachada de El Capitán Seafood en Paseo Las Glorias', label: 'Fachada' }],

    tags: ['mariscos', 'ceviche', 'aguachile', 'camarones', 'pescado', 'golfo', 'seafood']
  },
  'restaurante-dona-lupita': {
    nombre: 'Doña Lupita Cocina',
    categoria: 'Restaurante',
    categoriaSlug: 'restaurantes',
    descripcion: 'Cocina casera mexicana con sazón de hogar en Puerto Peñasco. Enchiladas, mole, pozole y guisos del día preparados con ingredientes frescos. El sabor de siempre a precios accesibles para toda la familia.',
    direccion: 'Calle Sinaloa 15, Puerto Peñasco, Sonora',
    horario: 'Lunes a Sábado: 8:00am – 5:00pm',
    telefono_contacto: '526381000014',
    heroImage: 'https://images.unsplash.com/photo-1669333761976-668ae791dc01',
    heroAlt: 'Comida casera mexicana con enchiladas y mole en Doña Lupita Cocina',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1abce8a9c-1765572956148.png', alt: 'Enchiladas verdes con crema y queso en Doña Lupita Cocina', label: 'Enchiladas' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_14b4e4b76-1771446184750.png', alt: 'Guiso del día con arroz y frijoles en Doña Lupita Cocina', label: 'Guiso del día' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c2b90133-1767784828310.png', alt: 'Comedor familiar de Doña Lupita Cocina con mesas sencillas', label: 'Comedor' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10d132ed7-1772257126997.png', alt: 'Pozole rojo tradicional servido en Doña Lupita Cocina', label: 'Pozole' },
    { src: 'https://images.unsplash.com/photo-1730303907137-190e2719d20b', alt: 'Fachada de Doña Lupita Cocina en Calle Sinaloa', label: 'Fachada' }],

    tags: ['comida casera', 'enchiladas', 'mole', 'pozole', 'desayuno', 'familiar', 'económico']
  },
  'farmacia-vida-sana': {
    nombre: 'Farmacia Vida Sana',
    categoria: 'Farmacia',
    categoriaSlug: 'farmacias',
    descripcion: 'Farmacia céntrica en Puerto Peñasco con amplio surtido de medicamentos de patente y genéricos. Atención profesional, precios competitivos y servicio rápido. Contamos con productos de higiene y cuidado personal.',
    direccion: 'Av. Juárez 210, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 7:00am – 11:00pm',
    telefono_contacto: '526381000015',
    heroImage: 'https://images.unsplash.com/photo-1559574326-b28980940fae',
    heroAlt: 'Interior de Farmacia Vida Sana con pasillos de medicamentos y vitaminas',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_101c9a1f0-1772189577797.png', alt: 'Pasillo de medicamentos en Farmacia Vida Sana con productos organizados', label: 'Medicamentos' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17b834222-1772213824207.png', alt: 'Sección de vitaminas y suplementos en Farmacia Vida Sana', label: 'Vitaminas' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cc77b8a6-1768683532632.png', alt: 'Mostrador de atención en Farmacia Vida Sana', label: 'Atención' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11c85dc84-1772258684333.png', alt: 'Productos de higiene y cuidado personal en Farmacia Vida Sana', label: 'Higiene' },
    { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1277e657b-1772264951687.png", alt: 'Fachada de Farmacia Vida Sana en Avenida Juárez', label: 'Fachada' }],

    tags: ['medicamentos', 'vitaminas', 'higiene', 'cuidado personal', 'genéricos']
  },
  'farmacia-cruz-verde': {
    nombre: 'Cruz Verde Farmacia',
    categoria: 'Farmacia',
    categoriaSlug: 'farmacias',
    descripcion: 'Farmacia especializada en productos naturistas y suplementos en Puerto Peñasco. Ofrecemos medicamentos de patente, genéricos y una amplia selección de remedios naturales. Asesoría farmacéutica gratuita.',
    direccion: 'Blvd. Benito Juárez 450, Puerto Peñasco, Sonora',
    horario: 'Lunes a Sábado: 8:00am – 9:00pm',
    telefono_contacto: '526381000016',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_15cc9e7bc-1772256610640.png',
    heroAlt: 'Cruz Verde Farmacia con sección de vitaminas y suplementos naturales',
    galeria: [
    { src: 'https://images.unsplash.com/photo-1694742971702-3887ed069538', alt: 'Sección de productos naturistas en Cruz Verde Farmacia', label: 'Naturistas' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10f47637a-1765220539233.png', alt: 'Pasillo de medicamentos genéricos en Cruz Verde Farmacia', label: 'Genéricos' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_153d65b95-1765053106122.png', alt: 'Farmacéutico asesorando a cliente en Cruz Verde Farmacia', label: 'Asesoría' },
    { src: 'https://images.unsplash.com/photo-1646579360571-de5ecf3af648', alt: 'Productos de cuidado personal en Cruz Verde Farmacia', label: 'Cuidado' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10086148f-1772256610958.png', alt: 'Fachada de Cruz Verde Farmacia en Blvd. Benito Juárez', label: 'Fachada' }],

    tags: ['naturistas', 'suplementos', 'genéricos', 'asesoría', 'remedios naturales']
  },
  'farmacia-del-pueblo': {
    nombre: 'Farmacia del Pueblo',
    categoria: 'Farmacia',
    categoriaSlug: 'farmacias',
    descripcion: 'Farmacia económica con los mejores precios en medicamentos genéricos en Puerto Peñasco. Atención amable y personalizada. Surtimos recetas médicas y contamos con servicio de entrega a domicilio.',
    direccion: 'Calle 13 de Abril 5, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 8:00am – 8:00pm',
    telefono_contacto: '526381000017',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_19f11f113-1768070429993.png',
    heroAlt: 'Farmacia del Pueblo con atención personalizada y precios accesibles',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1438d99d2-1767472545689.png', alt: 'Mostrador de Farmacia del Pueblo con atención al cliente', label: 'Atención' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1df647b5a-1765188831294.png', alt: 'Medicamentos genéricos a precios accesibles en Farmacia del Pueblo', label: 'Genéricos' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cc77b8a6-1768683532632.png', alt: 'Interior de Farmacia del Pueblo con pasillos ordenados', label: 'Interior' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_18b4c154f-1767619107934.png', alt: 'Sección de productos de higiene en Farmacia del Pueblo', label: 'Higiene' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10bf693c6-1772256608886.png', alt: 'Fachada de Farmacia del Pueblo en Calle 13 de Abril', label: 'Fachada' }],

    tags: ['económico', 'genéricos', 'recetas', 'domicilio', 'accesible']
  },
  'farmacia-del-mar': {
    nombre: 'Farmacia del Mar',
    categoria: 'Farmacia',
    categoriaSlug: 'farmacias',
    descripcion: 'Farmacia céntrica en Puerto Peñasco con amplio surtido de medicamentos de patente y genéricos. Atención profesional, precios competitivos y servicio rápido. Contamos con productos de higiene y cuidado personal.',
    direccion: 'Zona Centro, Local 8, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 8:00am – 10:00pm',
    telefono_contacto: '526381000005',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1599c7030-1772256610302.png',
    heroAlt: 'Farmacia del Mar con amplio surtido de medicamentos en zona centro',
    galeria: [
    { src: 'https://images.unsplash.com/photo-1614635454397-74bfd40e45ad', alt: 'Fachada de Farmacia del Mar en Zona Centro de Puerto Peñasco', label: 'Fachada' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cc77b8a6-1768683532632.png', alt: 'Interior de Farmacia del Mar con pasillos de medicamentos organizados', label: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1630286473534-e68142884b5b', alt: 'Mostrador de atención en Farmacia del Mar', label: 'Atención' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_144cee14e-1772257128692.png', alt: 'Productos de higiene y cuidado personal en Farmacia del Mar', label: 'Productos' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_172c0ed76-1768813496494.png', alt: 'Farmacia del Mar con letrero visible en zona centro', label: 'Exterior' }],

    tags: ['medicamentos', 'genéricos', 'higiene', 'cuidado personal', 'zona centro']
  },
  'taller-frenos-y-mas': {
    nombre: 'Frenos y Más',
    categoria: 'Taller / Mecánico',
    categoriaSlug: 'taller-mecanico',
    descripcion: 'Especialistas en sistema de frenos, suspensión y dirección en Puerto Peñasco. Diagnóstico gratuito, refacciones originales y trabajo garantizado. Atendemos todo tipo de vehículos nacionales e importados.',
    direccion: 'Av. Constitución 77, Puerto Peñasco, Sonora',
    horario: 'Lunes a Viernes: 8:00am – 5:00pm',
    telefono_contacto: '526381000018',
    heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a02e62e8-1766727726488.png",
    heroAlt: 'Técnico revisando sistema de frenos en taller Frenos y Más',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17347ad8c-1764678764086.png', alt: 'Revisión de frenos de disco en taller Frenos y Más', label: 'Frenos' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11e7fade5-1764678765445.png', alt: 'Diagnóstico computarizado de vehículo en Frenos y Más', label: 'Diagnóstico' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a7816296-1772258686125.png', alt: 'Fachada del taller Frenos y Más en Av. Constitución', label: 'Fachada' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17347ad8c-1764678764086.png', alt: 'Mecánico cambiando pastillas de freno en vehículo', label: 'Servicio' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f50c9105-1764783122966.png', alt: 'Herramientas y equipo profesional en taller Frenos y Más', label: 'Equipo' }],

    tags: ['frenos', 'suspensión', 'dirección', 'diagnóstico', 'refacciones', 'vehículos']
  },
  'taller-electrico-peñasco': {
    nombre: 'Eléctrico Peñasco',
    categoria: 'Taller / Mecánico',
    categoriaSlug: 'taller-mecanico',
    descripcion: 'Taller especializado en sistemas eléctricos y electrónicos automotrices en Puerto Peñasco. Diagnóstico computarizado, reparación de alternadores, arranques y sistemas de inyección. Técnicos certificados.',
    direccion: 'Calle Sinaloa 90, Puerto Peñasco, Sonora',
    horario: 'Lunes a Viernes: 8:00am – 6:00pm',
    telefono_contacto: '526381000019',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1382b9361-1768569640300.png',
    heroAlt: 'Mecánico realizando diagnóstico eléctrico en vehículo moderno',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10b7e96ff-1764643783122.png', alt: 'Diagnóstico eléctrico computarizado en Eléctrico Peñasco', label: 'Diagnóstico' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17c42be71-1772256607785.png', alt: 'Reparación de alternador en taller Eléctrico Peñasco', label: 'Alternador' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11f9064eb-1764657847946.png', alt: 'Equipo de diagnóstico electrónico en Eléctrico Peñasco', label: 'Equipo' },
    { src: 'https://images.unsplash.com/photo-1660785728984-b04e6374e36e', alt: 'Técnico revisando cableado eléctrico de vehículo', label: 'Cableado' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_14027a118-1772256608775.png', alt: 'Fachada de Eléctrico Peñasco en Calle Sinaloa', label: 'Fachada' }],

    tags: ['eléctrico', 'electrónico', 'alternador', 'inyección', 'diagnóstico', 'automotriz']
  },
  'taller-llantas-express': {
    nombre: 'Llantas Express',
    categoria: 'Taller / Mecánico',
    categoriaSlug: 'taller-mecanico',
    descripcion: 'Servicio rápido de llantas en Puerto Peñasco. Venta, montaje, balanceo y alineación de llantas para todo tipo de vehículos. Atendemos emergencias de ponchadura. Marcas nacionales e importadas.',
    direccion: 'Blvd. Benito Juárez 320, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 8:00am – 7:00pm',
    telefono_contacto: '526381000020',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e98e1282-1764678762595.png',
    heroAlt: 'Servicio rápido de cambio y balanceo de llantas en Llantas Express',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_187e4ce68-1764745319094.png', alt: 'Cambio de llanta en servicio rápido de Llantas Express', label: 'Cambio' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17d847a54-1772194678346.png', alt: 'Balanceo de ruedas en Llantas Express Puerto Peñasco', label: 'Balanceo' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d0aa9951-1764646705116.png', alt: 'Alineación de dirección en Llantas Express', label: 'Alineación' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1aad88f55-1767996722711.png', alt: 'Inventario de llantas de diferentes marcas en Llantas Express', label: 'Inventario' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e57fb411-1772256608905.png', alt: 'Fachada de Llantas Express en Blvd. Benito Juárez', label: 'Fachada' }],

    tags: ['llantas', 'balanceo', 'alineación', 'ponchadura', 'emergencia', 'vehículos']
  },
  'bar-el-ancla': {
    nombre: 'Bar El Ancla',
    categoria: 'Bar',
    categoriaSlug: 'bares',
    descripcion: 'Bar con decoración náutica y ambiente relajado en Puerto Peñasco. Cocteles artesanales, cerveza fría y botanas. Música en vivo los fines de semana. El lugar favorito de locales y turistas para disfrutar la noche.',
    direccion: 'Calle Primero de Junio 60, Puerto Peñasco, Sonora',
    horario: 'Miércoles a Domingo: 5:00pm – 1:00am',
    telefono_contacto: '526381000021',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_140a83a42-1772258686845.png',
    heroAlt: 'Bar El Ancla con decoración náutica y ambiente relajado en Puerto Peñasco',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1303f06a4-1772257124444.png', alt: 'Barra de Bar El Ancla con decoración náutica y luces cálidas', label: 'Barra' },
    { src: 'https://images.unsplash.com/photo-1636476836864-7688589e480c', alt: 'Cocteles artesanales preparados en Bar El Ancla', label: 'Cocteles' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1148d39c9-1772054952704.png', alt: 'Interior de Bar El Ancla con mesas y ambiente acogedor', label: 'Interior' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_150eec807-1772258686797.png', alt: 'Música en vivo en Bar El Ancla los fines de semana', label: 'Música' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e562395a-1772256608228.png', alt: 'Fachada de Bar El Ancla en Calle Primero de Junio', label: 'Fachada' }],

    tags: ['cocteles', 'cerveza', 'música en vivo', 'náutico', 'botanas', 'noche']
  },
  'bar-sunset-lounge': {
    nombre: 'Sunset Lounge',
    categoria: 'Bar',
    categoriaSlug: 'bares',
    descripcion: 'Lounge bar con terraza y vista privilegiada al atardecer del Golfo de California. Cocteles premium, vinos y tapas. Ambiente sofisticado y relajado. El mejor lugar para ver el atardecer en Puerto Peñasco.',
    direccion: 'Blvd. Las Glorias 200, Puerto Peñasco, Sonora',
    horario: 'Jueves a Domingo: 4:00pm – 2:00am',
    telefono_contacto: '526381000022',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1be9ac41a-1772258689005.png',
    heroAlt: 'Sunset Lounge con terraza y vista al atardecer del Golfo de California',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_148ac4d6b-1772257125021.png', alt: 'Terraza del Sunset Lounge con vista al atardecer del Golfo', label: 'Terraza' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1735c9e05-1770127630552.png', alt: 'Barra de cocteles premium en Sunset Lounge', label: 'Barra' },
    { src: 'https://images.unsplash.com/photo-1688005981109-005d981759ac', alt: 'Interior elegante del Sunset Lounge con iluminación ambiental', label: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1558789146-ab52ebce8be5', alt: 'Cocteles y tapas servidos en Sunset Lounge', label: 'Cocteles' },
    { src: 'https://images.unsplash.com/photo-1693493500992-0877f6263789', alt: 'Fachada del Sunset Lounge en Blvd. Las Glorias', label: 'Fachada' }],

    tags: ['lounge', 'cocteles premium', 'vinos', 'tapas', 'atardecer', 'golfo', 'sofisticado']
  },
  'bar-la-cantina': {
    nombre: 'La Cantina del Puerto',
    categoria: 'Bar',
    categoriaSlug: 'bares',
    descripcion: 'Cantina tradicional mexicana con música en vivo y ambiente auténtico en Puerto Peñasco. Cerveza, mezcal, tequila y botanas tradicionales. Los jueves son de trova y los viernes de norteño. Entrada libre.',
    direccion: 'Zona Centro 33, Puerto Peñasco, Sonora',
    horario: 'Martes a Domingo: 6:00pm – 1:00am',
    telefono_contacto: '526381000023',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_12bb8ee12-1768081184180.png',
    heroAlt: 'La Cantina del Puerto con ambiente mexicano tradicional y música en vivo',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fb6f20e9-1772258685572.png', alt: 'Interior de La Cantina del Puerto con decoración mexicana tradicional', label: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1588546496012-acec4db028be', alt: 'Barra de La Cantina del Puerto con mezcal y tequila', label: 'Barra' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17f587deb-1772256611604.png', alt: 'Música en vivo en La Cantina del Puerto los fines de semana', label: 'Música' },
    { src: 'https://images.unsplash.com/photo-1661163550528-635d77fef746', alt: 'Botanas tradicionales servidas en La Cantina del Puerto', label: 'Botanas' },
    { src: 'https://images.unsplash.com/photo-1681217625763-1c27d2d8a155', alt: 'Fachada de La Cantina del Puerto en Zona Centro', label: 'Fachada' }],

    tags: ['cantina', 'mezcal', 'tequila', 'música en vivo', 'trova', 'norteño', 'tradicional']
  },
  'bar-la-palapa': {
    nombre: 'La Palapa Beach Bar',
    categoria: 'Bar',
    categoriaSlug: 'bares',
    descripcion: 'Bar de playa con ambiente tropical y relajado en Puerto Peñasco. Cocteles frescos, cerveza fría y botanas frente al mar. El lugar perfecto para disfrutar el fin de semana con amigos y familia en la playa.',
    direccion: 'Playa Hermosa, Local 3, Puerto Peñasco, Sonora',
    horario: 'Viernes a Domingo: 4:00pm – 1:00am',
    telefono_contacto: '526381000009',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_11d02816b-1772257127378.png',
    heroAlt: 'La Palapa Beach Bar con mesas en la playa y ambiente tropical',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_18361fd7d-1772257123574.png', alt: 'Terraza de La Palapa Beach Bar frente al mar con mesas y sombrillas', label: 'Terraza' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c4ca95ee-1772257125024.png', alt: 'Cocteles tropicales servidos en La Palapa Beach Bar', label: 'Cocteles' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e40affbe-1772258685748.png', alt: 'Ambiente relajado de playa en La Palapa Beach Bar', label: 'Ambiente' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1af5a8018-1772258684771.png', alt: 'Vista al mar desde La Palapa Beach Bar al atardecer', label: 'Vista' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1236bd083-1772257543825.png', alt: 'Bar con vista al mar y ambiente tropical en Puerto Peñasco', label: 'Portada' }],

    tags: ['playa', 'cocteles', 'cerveza', 'tropical', 'botanas', 'mar', 'fin de semana']
  },
  'servicios-pintura-express': {
    nombre: 'Pintura Express PP',
    categoria: 'Servicios',
    categoriaSlug: 'servicios',
    descripcion: 'Servicio profesional de pintura de interiores y exteriores en Puerto Peñasco. Presupuesto sin costo, materiales de primera calidad y trabajo garantizado. Pintamos casas, departamentos y locales comerciales.',
    direccion: 'Calle Sinaloa 44, Puerto Peñasco, Sonora',
    horario: 'Lunes a Sábado: 8:00am – 6:00pm',
    telefono_contacto: '526381000024',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e9ee59e2-1766907761956.png',
    heroAlt: 'Pintor profesional aplicando pintura en interior de casa con rodillo',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_13c4cf598-1769294977628.png', alt: 'Pintor de Pintura Express PP aplicando pintura en pared interior', label: 'Pintura Interior' },
    { src: 'https://images.unsplash.com/photo-1519762590066-8ad3f61524e3', alt: 'Trabajo de pintura exterior en fachada de casa', label: 'Exterior' },
    { src: 'https://images.unsplash.com/photo-1612033250894-bd6ec4f4cd47', alt: 'Acabados y detalles de pintura en local comercial', label: 'Acabados' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_14dbf4d86-1766856410644.png', alt: 'Equipo de Pintura Express PP con materiales de calidad', label: 'Equipo' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e81c4be1-1766833227753.png', alt: 'Resultado final de trabajo de pintura en hogar', label: 'Resultado' }],

    tags: ['pintura', 'interiores', 'exteriores', 'presupuesto', 'casas', 'locales']
  },
  'servicios-cerrajeria-peñasco': {
    nombre: 'Cerrajería Peñasco',
    categoria: 'Servicios',
    categoriaSlug: 'servicios',
    descripcion: 'Cerrajería profesional con servicio de emergencia las 24 horas en Puerto Peñasco. Apertura de puertas, cambio de cerraduras, duplicado de llaves y instalación de sistemas de seguridad. Respuesta rápida.',
    direccion: 'Blvd. Fremont 110, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 8:00am – 8:00pm',
    telefono_contacto: '526381000025',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a319b957-1767389676748.png',
    heroAlt: 'Cerrajero profesional instalando cerradura de seguridad en puerta',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1aa4d405d-1772161992932.png', alt: 'Cerrajero instalando cerradura de alta seguridad en puerta', label: 'Cerraduras' },
    { src: 'https://images.unsplash.com/photo-1689367934396-ba1cfc04f883', alt: 'Duplicado de llaves en Cerrajería Peñasco', label: 'Llaves' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_103f2ae5b-1767244189643.png', alt: 'Instalación de sistema de seguridad en hogar', label: 'Seguridad' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_18ab54692-1772256611887.png', alt: 'Apertura de puerta en servicio de emergencia de Cerrajería Peñasco', label: 'Emergencia' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a11e2513-1772256612493.png', alt: 'Fachada de Cerrajería Peñasco en Blvd. Fremont', label: 'Fachada' }],

    tags: ['cerrajería', 'cerraduras', 'llaves', 'seguridad', 'emergencia', '24 horas']
  },
  'servicios-jardineria-verde': {
    nombre: 'Jardinería Verde PP',
    categoria: 'Servicios',
    categoriaSlug: 'servicios',
    descripcion: 'Servicio profesional de jardinería y mantenimiento de áreas verdes en Puerto Peñasco. Poda, diseño de jardines, riego automatizado y limpieza de terrenos. Atendemos residencias, hoteles y condominios.',
    direccion: 'Av. Constitución 180, Puerto Peñasco, Sonora',
    horario: 'Lunes a Sábado: 7:00am – 5:00pm',
    telefono_contacto: '526381000026',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ec003d02-1764703347592.png',
    heroAlt: 'Jardinero podando plantas y manteniendo jardín residencial en Puerto Peñasco',
    galeria: [
    { src: 'https://images.unsplash.com/photo-1642510911137-5ca46561a812', alt: 'Jardinero de Jardinería Verde PP podando arbustos en jardín', label: 'Poda' },
    { src: 'https://images.unsplash.com/photo-1722453096041-5b40d7cb5fbc', alt: 'Diseño de jardín con plantas y flores en residencia', label: 'Diseño' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17db12551-1767182945395.png', alt: 'Sistema de riego automatizado instalado por Jardinería Verde PP', label: 'Riego' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1434881a3-1772256609406.png', alt: 'Mantenimiento de área verde en condominio', label: 'Mantenimiento' },
    { src: 'https://images.unsplash.com/photo-1625766924037-97152552d03a', alt: 'Resultado final de jardín diseñado por Jardinería Verde PP', label: 'Resultado' }],

    tags: ['jardinería', 'poda', 'riego', 'diseño', 'mantenimiento', 'áreas verdes']
  },
  'restaurante-casa-sonora': {
    nombre: 'Casa Sonora',
    categoria: 'Restaurante',
    categoriaSlug: 'restaurantes',
    descripcion: 'Restaurante de cocina mexicana tradicional en Puerto Peñasco. Ambiente acogedor con decoración típica sonorense, platillos regionales y sabores auténticos. Ideal para familias y grupos que buscan la gastronomía local.',
    direccion: 'Calle Primero de Junio 45, Puerto Peñasco, Sonora',
    horario: 'Martes a Domingo: 12:00pm – 9:00pm',
    telefono_contacto: '526381000002',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_184b83ca4-1772257125117.png',
    heroAlt: 'Interior acogedor de restaurante Casa Sonora con decoración mexicana tradicional',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_151f0d7cb-1772257125006.png', alt: 'Comedor principal de Casa Sonora con mesas y decoración típica sonorense', label: 'Comedor' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10d16e036-1772257126594.png', alt: 'Platillos de cocina mexicana tradicional en Casa Sonora', label: 'Platillos' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1338474e9-1771898942352.png', alt: 'Enchiladas y guisos regionales servidos en Casa Sonora', label: 'Especialidades' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1744243d0-1772110526932.png', alt: 'Ambiente familiar y acogedor en restaurante Casa Sonora', label: 'Ambiente' },
    { src: 'https://images.unsplash.com/photo-1716215579344-e1601918f185', alt: 'Interior de restaurante mexicano con decoración tradicional sonorense', label: 'Interior' }],

    tags: ['comida mexicana', 'sonorense', 'familiar', 'tradicional', 'regional']
  },
  'restaurante-tacos-el-guero': {
    nombre: 'Tacos El Güero',
    categoria: 'Restaurante',
    categoriaSlug: 'restaurantes',
    descripcion: 'Taquería tradicional con los mejores tacos de carne asada en Puerto Peñasco. Tortillas hechas a mano, salsas caseras y los ingredientes más frescos. Desayunos y comidas rápidas a precios accesibles.',
    direccion: 'Calle Primero de Junio 22, Puerto Peñasco, Sonora',
    horario: 'Lunes a Sábado: 7:00am – 2:00pm',
    telefono_contacto: '526381000003',
    heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1649b1fe7-1772264953487.png",
    heroAlt: 'Tacos de carne asada con salsa y limón en taquería El Güero',
    galeria: [
    { src: "https://img.rocket.new/generatedImages/rocket_gen_img_100cd1bb7-1772264953847.png", alt: 'Tacos de carne asada recién preparados en Tacos El Güero', label: 'Tacos' },
    { src: 'https://images.unsplash.com/photo-1523398337691-c0e99fb073c6', alt: 'Taquero preparando tacos en comal en Tacos El Güero', label: 'Preparación' },
    { src: 'https://images.unsplash.com/photo-1637344453366-8bf6a2c1f150', alt: 'Ambiente de taquería tradicional en Tacos El Güero', label: 'Local' },
    { src: 'https://images.unsplash.com/photo-1734773074866-507cc8d3b99c', alt: 'Tacos con salsa verde y roja en Tacos El Güero', label: 'Salsas' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_14eb28fb9-1770356059784.png', alt: 'Orden de tacos con guarniciones en Tacos El Güero', label: 'Orden' }],

    tags: ['tacos', 'carne asada', 'taquería', 'desayuno', 'económico', 'rápido', 'fresco']
  },
  'servicios-limpieza-total': {
    nombre: 'Limpieza Total PP',
    categoria: 'Servicios',
    categoriaSlug: 'servicios',
    descripcion: 'Empresa de limpieza profesional en Puerto Peñasco. Limpieza de casas, departamentos, oficinas y locales comerciales. Personal capacitado, productos de calidad y servicio puntual. Contratación por evento o mensual.',
    direccion: 'Zona Centro 88, Puerto Peñasco, Sonora',
    horario: 'Lunes a Domingo: 7:00am – 7:00pm',
    telefono_contacto: '526381000011',
    heroImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_14efa66f7-1772257127195.png',
    heroAlt: 'Equipo de Limpieza Total PP con uniformes y equipo de limpieza profesional',
    galeria: [
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f0a2da53-1768068406939.png', alt: 'Equipo de Limpieza Total PP listo para servicio con uniformes', label: 'Equipo' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_13295193a-1768263313988.png', alt: 'Limpieza profesional de hogar por Limpieza Total PP', label: 'Hogar' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12944de83-1769437820942.png', alt: 'Limpieza de oficina y espacios comerciales por Limpieza Total PP', label: 'Oficina' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11d07b2ef-1764727502324.png', alt: 'Resultado de limpieza profunda en hogar por Limpieza Total PP', label: 'Resultado' },
    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1939cda92-1772257542638.png', alt: 'Equipo de limpieza profesional con materiales y uniformes', label: 'Materiales' }],

    tags: ['limpieza', 'hogar', 'oficina', 'profesional', 'domicilio', 'mensual']
  }
};

export function generateStaticParams() {
  return Object.keys(negocios).map((slug) => ({ slug }));
}

export default async function BusinessPage({ params }: {params: Promise<{slug: string;}>;}) {
  const { slug } = await params;
  const biz = negocios[slug];

  if (!biz) {
    return (
      <div className="min-h-screen bg-[#051F20] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B9E7A] text-lg">Negocio no encontrado</p>
          <Link href="/home" className="btn-primary mt-4 inline-block px-6 py-3 rounded-xl text-sm">Volver al inicio</Link>
        </div>
      </div>);

  }

  // Fase 3 — WhatsApp del negocio: usa telefono_contacto con wa.me/52XXXXXXXXXX
  const whatsappMsg = encodeURIComponent(`Hola, vi tu negocio en Radar Local y quiero información.`);
  const whatsappUrl = `https://wa.me/${biz.telefono_contacto}?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-[#051F20]">
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[320px] max-h-[480px] overflow-hidden">
          <AppImage src={biz.heroImage} alt={biz.heroAlt} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051F20] via-[#051F20]/40 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-5 -mt-16 relative z-10 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-[#6B9E7A] mb-6">
            <Link href="/home" className="hover:text-[#8CB79B] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href={`/categoria/${biz.categoriaSlug}`} className="hover:text-[#8CB79B] transition-colors">{biz.categoria}</Link>
            <span>/</span>
            <span className="text-[#8CB79B]">{biz.nombre}</span>
          </div>

          {/* Business Header */}
          <div
            className="rounded-3xl p-6 sm:p-8 mb-6"
            style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.12)' }}>
            {/* Demo label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: 'rgba(140,183,155,0.12)', border: '1px solid rgba(140,183,155,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8CB79B] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#8CB79B] tracking-wide">Tu negocio podría verse así</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#6B9E7A] mb-1">{biz.categoria}</p>
                <h1 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#E8F5EA] mb-3">{biz.nombre}</h1>
                <p className="text-[#6B9E7A] text-sm sm:text-base leading-relaxed max-w-xl">{biz.descripcion}</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {/* Información */}
            <div
              className="sm:col-span-2 rounded-3xl p-6"
              style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
              <h2 className="font-semibold text-[#E8F5EA] text-base mb-4">Información</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(140,183,155,0.1)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#6B9E7A] font-medium uppercase tracking-wider mb-0.5">Dirección</p>
                    <p className="text-[#E8F5EA] text-sm">{biz.direccion}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(140,183,155,0.1)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#6B9E7A] font-medium uppercase tracking-wider mb-0.5">Horario</p>
                    <p className="text-[#E8F5EA] text-sm">{biz.horario}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(140,183,155,0.1)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8CB79B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#6B9E7A] font-medium uppercase tracking-wider mb-0.5">Teléfono</p>
                    <a href={`tel:+${biz.telefono_contacto}`} className="text-[#E8F5EA] text-sm hover:text-[#8CB79B] transition-colors">
                      +{biz.telefono_contacto}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA — Fase 3: usa telefono_contacto del negocio, NUNCA el número del sitio */}
            <div
              className="rounded-3xl p-6 flex flex-col justify-between"
              style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
              <div>
                <h2 className="font-semibold text-[#E8F5EA] text-base mb-2">¿Tienes dudas?</h2>
                <p className="text-[#6B9E7A] text-sm leading-relaxed">Escríbeles directamente por WhatsApp.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: '#25D366', color: '#fff' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.198.298.298.497.099.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.101.272.272.446.52.149.174 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar WhatsApp
              </a>
            </div>
          </div>

          {/* Galería con modal — Fase 6: galería abre en modal */}
          <GalleryModal galeria={biz.galeria} nombre={biz.nombre} />

          {/* Tags */}
          {biz.tags && biz.tags.length > 0 &&
          <div className="mt-5 rounded-3xl p-5" style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#6B9E7A] mb-3">Etiquetas</p>
              <div className="flex flex-wrap gap-2">
                {biz.tags.map((tag) =>
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-full text-[#8CB79B]"
                style={{ background: 'rgba(140,183,155,0.08)', border: '1px solid rgba(140,183,155,0.15)' }}>
                    {tag}
                  </span>
              )}
              </div>
            </div>
          }

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              href={`/categoria/${biz.categoriaSlug}`}
              className="btn-outline px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              ← Ver más en {biz.categoria}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}