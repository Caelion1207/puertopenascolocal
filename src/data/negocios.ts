export interface Negocio {
  id: number;
  slug: string;
  nombre: string;
  categoria: 'Restaurante' | 'Farmacia' | 'Taller / Mecánico' | 'Bar' | 'Servicios';
  descripcion: string;
  direccion: string;
  telefono_contacto: string;
  galeria: { src: string; alt: string; label: string }[];
  tags: string[];
  repartidores?: string[];
}

export const negocios: Negocio[] = [
  {
    id: 1,
    slug: 'restaurante-el-malecon',
    nombre: 'El Malecón Marino',
    categoria: 'Restaurante',
    descripcion: 'Restaurante de mariscos y seafood con vista al mar en el corazón de Puerto Peñasco. Ofrecemos los platillos más frescos del Golfo de California, preparados con recetas tradicionales de Sonora.',
    direccion: 'Blvd. Benito Juárez 120',
    telefono_contacto: '526381000001',
    galeria: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f3826b5b-1765042442593.png', alt: 'Plato de mariscos frescos con vista al mar en Puerto Peñasco', label: 'Portada' },
      { src: 'https://images.unsplash.com/photo-1726942115955-5e7b68bf77ba', alt: 'Interior del restaurante El Malecón Marino con mesas y decoración marina', label: 'Interior' },
      { src: 'https://images.unsplash.com/photo-1613109041031-817b5156e268', alt: 'Fachada exterior del restaurante El Malecón Marino en el boulevard', label: 'Fachada' },
      { src: 'https://images.unsplash.com/photo-1698462297918-79ae9314e062', alt: 'Platillo especial de mariscos mixtos con camarones y pulpo', label: 'Platillo especial' },
      { src: 'https://images.unsplash.com/photo-1655844356175-76b475c178af', alt: 'Detalle de presentación de ceviche fresco con tostadas', label: 'Detalle' },
    ],
    tags: ['mariscos', 'seafood', 'restaurante', 'comida', 'desayuno', 'almuerzo', 'cena', 'vista al mar', 'golfo'],
  },
  {
    id: 2,
    slug: 'farmacia-san-angel',
    nombre: 'Farmacia San Ángel',
    categoria: 'Farmacia',
    descripcion: 'Farmacia de confianza en Puerto Peñasco con más de 10 años de servicio. Medicamentos de patente y genéricos, productos de higiene personal y atención farmacéutica. Servicio a domicilio disponible.',
    direccion: 'Av. Constitución 310',
    telefono_contacto: '526381000004',
    galeria: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_172c0ed76-1768813496494.png', alt: 'Farmacia local con productos de salud en Puerto Peñasco', label: 'Portada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cc77b8a6-1768683532632.png', alt: 'Interior de Farmacia San Ángel con pasillos organizados y productos de salud', label: 'Interior' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b9010a35-1772256608917.png', alt: 'Fachada de Farmacia San Ángel en Avenida Constitución', label: 'Fachada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17b834222-1772213824207.png', alt: 'Sección de vitaminas y suplementos en Farmacia San Ángel', label: 'Productos' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ac783ba9-1767974925463.png', alt: 'Mostrador de atención farmacéutica con personal capacitado', label: 'Atención' },
    ],
    tags: ['farmacia', 'medicamentos', 'salud', 'genéricos', 'patente', 'higiene', 'domicilio', '24 horas'],
  },
  {
    id: 3,
    slug: 'taller-el-chavo',
    nombre: 'Taller El Chavo',
    categoria: 'Taller / Mecánico',
    descripcion: 'Taller mecánico con experiencia en todo tipo de vehículos. Afinación, frenos, suspensión, cambio de aceite y diagnóstico computarizado. Trabajo garantizado y precios honestos.',
    direccion: 'Calle 13 de Abril 88',
    telefono_contacto: '526381000006',
    galeria: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_149164a3e-1767155041466.png', alt: 'Taller mecánico con herramientas y vehículo en reparación', label: 'Portada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd3fc95a-1772149206418.png', alt: 'Interior del Taller El Chavo con área de trabajo y elevador hidráulico', label: 'Interior' },
      { src: 'https://images.unsplash.com/photo-1605544294782-2529c35cfa20', alt: 'Fachada del Taller El Chavo en Calle 13 de Abril', label: 'Fachada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_151a8b1e1-1772258685171.png', alt: 'Herramientas y equipo de diagnóstico computarizado en el taller', label: 'Equipo' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f50c9105-1764783122966.png', alt: 'Mecánico realizando cambio de aceite y revisión de motor', label: 'Servicio' },
    ],
    tags: ['taller', 'mecánico', 'afinación', 'frenos', 'aceite', 'suspensión', 'diagnóstico', 'vehículos', 'reparación'],
  },
  {
    id: 4,
    slug: 'restaurante-casa-sonora',
    nombre: 'Casa Sonora',
    categoria: 'Restaurante',
    descripcion: 'Restaurante de cocina mexicana tradicional en Puerto Peñasco. Ambiente acogedor con decoración típica sonorense, platillos regionales y sabores auténticos. Ideal para familias.',
    direccion: 'Av. Kino 45',
    telefono_contacto: '526381000002',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1716215579344-e1601918f185', alt: 'Interior de restaurante mexicano con decoración tradicional sonorense', label: 'Portada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_151f0d7cb-1772257125006.png', alt: 'Comedor principal de Casa Sonora con mesas y decoración típica sonorense', label: 'Comedor' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10d16e036-1772257126594.png', alt: 'Platillos de cocina mexicana tradicional en Casa Sonora', label: 'Platillos' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1338474e9-1771898942352.png', alt: 'Enchiladas y guisos regionales servidos en Casa Sonora', label: 'Especialidades' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1744243d0-1772110526932.png', alt: 'Ambiente familiar y acogedor en restaurante Casa Sonora', label: 'Ambiente' },
    ],
    tags: ['restaurante', 'comida mexicana', 'sonorense', 'familiar', 'desayuno', 'almuerzo', 'cena', 'tradicional'],
  },
  {
    id: 5,
    slug: 'bar-la-palapa',
    nombre: 'Bar La Palapa',
    categoria: 'Bar',
    descripcion: 'Bar de playa con ambiente tropical y relajado en Puerto Peñasco. Cocteles frescos, cerveza fría y botanas frente al mar. El lugar perfecto para disfrutar el fin de semana.',
    direccion: 'Malecón Kino s/n',
    telefono_contacto: '526381000009',
    galeria: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1236bd083-1772257543825.png', alt: 'Bar con vista al mar y ambiente tropical en Puerto Peñasco', label: 'Portada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_18361fd7d-1772257123574.png', alt: 'Terraza de La Palapa Beach Bar frente al mar con mesas y sombrillas', label: 'Terraza' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c4ca95ee-1772257125024.png', alt: 'Cocteles tropicales servidos en La Palapa Beach Bar', label: 'Cocteles' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e40affbe-1772258685748.png', alt: 'Ambiente relajado de playa en La Palapa Beach Bar', label: 'Ambiente' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1af5a8018-1772258684771.png', alt: 'Vista al mar desde La Palapa Beach Bar al atardecer', label: 'Vista' },
    ],
    tags: ['bar', 'playa', 'cocteles', 'cerveza', 'tropical', 'botanas', 'mar', 'noche', 'música'],
  },
  {
    id: 6,
    slug: 'servicios-limpieza-total',
    nombre: 'Limpieza Total',
    categoria: 'Servicios',
    descripcion: 'Empresa de limpieza profesional en Puerto Peñasco. Limpieza de casas, departamentos, oficinas y locales comerciales. Personal capacitado, productos de calidad y servicio puntual.',
    direccion: 'Calle Fremont 22',
    telefono_contacto: '526381000011',
    galeria: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1939cda92-1772257542638.png', alt: 'Equipo de limpieza profesional con materiales y uniformes', label: 'Portada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a3a92630-1772264951453.png', alt: 'Equipo de Limpieza Total listo para servicio con uniformes', label: 'Equipo' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dd9ea512-1772264951213.png', alt: 'Limpieza profesional de hogar por Limpieza Total', label: 'Hogar' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_146af9ae0-1764670046603.png', alt: 'Limpieza de oficina y espacios comerciales por Limpieza Total', label: 'Oficina' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_16d2a97e0-1772264950945.png', alt: 'Resultado de limpieza profunda en hogar por Limpieza Total', label: 'Resultado' },
    ],
    tags: ['limpieza', 'servicios', 'hogar', 'oficina', 'profesional', 'domicilio', 'mantenimiento'],
  },
];
