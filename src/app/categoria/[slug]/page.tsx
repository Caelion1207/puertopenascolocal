import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

interface Business {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  address: string;
  hours: string;
  phone: string;
  tags: string[];
}

const categoryData: Record<string, {title: string;emoji: string;description: string;businesses: Business[];}> = {
  restaurantes: {
    title: 'Restaurantes',
    emoji: '🍽️',
    description: 'Los mejores lugares para comer en Puerto Peñasco.',
    businesses: [
    {
      id: 1,
      slug: 'restaurante-el-malecon',
      name: 'El Malecón Marino',
      category: 'Restaurante',
      image: "https://images.unsplash.com/photo-1617737053118-577ca9825712",
      alt: 'Plato de mariscos frescos con vista al mar en restaurante El Malecón Marino',
      address: 'Blvd. Benito Juárez 120',
      hours: 'Lun–Dom: 11am – 10pm',
      phone: '+52 638 100 0001',
      tags: ['Abierto', 'Mariscos']
    },
    {
      id: 2,
      slug: 'restaurante-casa-sonora',
      name: 'Casa Sonora',
      category: 'Restaurante',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1744243d0-1772110526932.png",
      alt: 'Interior acogedor de restaurante Casa Sonora con decoración mexicana tradicional',
      address: 'Calle Primero de Junio 45',
      hours: 'Mar–Dom: 12pm – 9pm',
      phone: '+52 638 100 0002',
      tags: ['Abierto', 'Comida Mexicana']
    },
    {
      id: 3,
      slug: 'restaurante-tacos-el-guero',
      name: 'Tacos El Güero',
      category: 'Restaurante',
      image: "https://images.unsplash.com/photo-1734773074866-507cc8d3b99c",
      alt: 'Tacos de carne asada con salsa y limón en taquería El Güero',
      address: 'Calle Primero de Junio 22',
      hours: 'Lun–Sáb: 7am – 2pm',
      phone: '+52 638 100 0003',
      tags: ['Abierto', 'Tacos']
    },
    {
      id: 4,
      slug: 'restaurante-la-curva',
      name: 'La Curva Grill',
      category: 'Restaurante',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c5c63d6-1772256612699.png",
      alt: 'Parrilla con carnes asadas y ambiente familiar en La Curva Grill',
      address: 'Blvd. Fremont 340, Puerto Peñasco',
      hours: 'Lun–Dom: 1pm – 10pm',
      phone: '+52 638 100 0012',
      tags: ['Abierto', 'Parrilla']
    },
    {
      id: 5,
      slug: 'restaurante-el-capitan',
      name: 'El Capitán Seafood',
      category: 'Restaurante',
      image: "https://images.unsplash.com/photo-1555604042-c7829d285bfd",
      alt: 'Platillos de mariscos frescos del Golfo en El Capitán Seafood',
      address: 'Paseo Las Glorias 88, Puerto Peñasco',
      hours: 'Miér–Lun: 12pm – 9pm',
      phone: '+52 638 100 0013',
      tags: ['Abierto', 'Seafood']
    },
    {
      id: 6,
      slug: 'restaurante-dona-lupita',
      name: 'Doña Lupita Cocina',
      category: 'Restaurante',
      image: "https://images.unsplash.com/photo-1669333761976-668ae791dc01",
      alt: 'Comida casera mexicana con enchiladas y mole en Doña Lupita Cocina',
      address: 'Calle Sinaloa 15, Puerto Peñasco',
      hours: 'Lun–Sáb: 8am – 5pm',
      phone: '+52 638 100 0014',
      tags: ['Abierto', 'Comida Casera']
    }]

  },
  farmacias: {
    title: 'Farmacias',
    emoji: '💊',
    description: 'Farmacias y puntos de salud en Puerto Peñasco.',
    businesses: [
    {
      id: 1,
      slug: 'farmacia-san-angel',
      name: 'Farmacia San Ángel',
      category: 'Farmacia',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_194bdcf84-1772256612218.png",
      alt: 'Farmacia San Ángel con productos de salud y medicamentos en Puerto Peñasco',
      address: 'Av. Constitución 310',
      hours: 'Abierto 24 horas',
      phone: '+52 638 100 0004',
      tags: ['Abierto 24h', 'Envío a domicilio']
    },
    {
      id: 2,
      slug: 'farmacia-del-mar',
      name: 'Farmacia del Mar',
      category: 'Farmacia',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1599c7030-1772256610302.png",
      alt: 'Farmacia del Mar con amplio surtido de medicamentos en zona centro',
      address: 'Zona Centro, Local 8',
      hours: 'Lun–Dom: 8am – 10pm',
      phone: '+52 638 100 0005',
      tags: ['Abierto']
    },
    {
      id: 3,
      slug: 'farmacia-vida-sana',
      name: 'Farmacia Vida Sana',
      category: 'Farmacia',
      image: "https://images.unsplash.com/photo-1559574326-b28980940fae",
      alt: 'Interior de Farmacia Vida Sana con pasillos de medicamentos y vitaminas',
      address: 'Av. Juárez 210, Puerto Peñasco',
      hours: 'Lun–Dom: 7am – 11pm',
      phone: '+52 638 100 0015',
      tags: ['Abierto', 'Genéricos']
    },
    {
      id: 4,
      slug: 'farmacia-cruz-verde',
      name: 'Cruz Verde Farmacia',
      category: 'Farmacia',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15cc9e7bc-1772256610640.png",
      alt: 'Cruz Verde Farmacia con sección de vitaminas y suplementos naturales',
      address: 'Blvd. Benito Juárez 450, Puerto Peñasco',
      hours: 'Lun–Sáb: 8am – 9pm',
      phone: '+52 638 100 0016',
      tags: ['Abierto', 'Naturistas']
    },
    {
      id: 5,
      slug: 'farmacia-del-pueblo',
      name: 'Farmacia del Pueblo',
      category: 'Farmacia',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f11f113-1768070429993.png",
      alt: 'Farmacia del Pueblo con atención personalizada y precios accesibles',
      address: 'Calle 13 de Abril 5, Puerto Peñasco',
      hours: 'Lun–Dom: 8am – 8pm',
      phone: '+52 638 100 0017',
      tags: ['Abierto', 'Económica']
    }]

  },
  'taller-mecanico': {
    title: 'Taller / Mecánico',
    emoji: '🔧',
    description: 'Talleres mecánicos y servicios automotrices en Puerto Peñasco.',
    businesses: [
    {
      id: 1,
      slug: 'taller-el-chavo',
      name: 'Taller El Chavo',
      category: 'Taller / Mecánico',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_149164a3e-1767155041466.png",
      alt: 'Taller mecánico El Chavo con herramientas y vehículo en reparación',
      address: 'Calle 13 de Abril 88',
      hours: 'Lun–Sáb: 8am – 6pm',
      phone: '+52 638 100 0006',
      tags: ['Abierto', 'Mecánica General']
    },
    {
      id: 2,
      slug: 'taller-autoservicio-peñasco',
      name: 'Autoservicio Peñasco',
      category: 'Taller / Mecánico',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_149164a3e-1767155041466.png",
      alt: 'Taller Autoservicio Peñasco con área de trabajo y equipos de diagnóstico',
      address: 'Blvd. Fremont 200',
      hours: 'Lun–Vie: 9am – 5pm',
      phone: '+52 638 100 0007',
      tags: ['Abierto', 'Diagnóstico']
    },
    {
      id: 3,
      slug: 'taller-frenos-y-mas',
      name: 'Frenos y Más',
      category: 'Taller / Mecánico',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a02e62e8-1766727726488.png",
      alt: 'Técnico revisando sistema de frenos en taller Frenos y Más',
      address: 'Av. Constitución 77, Puerto Peñasco',
      hours: 'Lun–Sáb: 8am – 5pm',
      phone: '+52 638 100 0018',
      tags: ['Abierto', 'Frenos']
    },
    {
      id: 4,
      slug: 'taller-electrico-peñasco',
      name: 'Eléctrico Peñasco',
      category: 'Taller / Mecánico',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1382b9361-1768569640300.png",
      alt: 'Mecánico realizando diagnóstico eléctrico en vehículo moderno',
      address: 'Calle Sinaloa 90, Puerto Peñasco',
      hours: 'Lun–Vie: 8am – 6pm',
      phone: '+52 638 100 0019',
      tags: ['Abierto', 'Eléctrico']
    },
    {
      id: 5,
      slug: 'taller-llantas-express',
      name: 'Llantas Express',
      category: 'Taller / Mecánico',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e98e1282-1764678762595.png",
      alt: 'Servicio rápido de cambio y balanceo de llantas en Llantas Express',
      address: 'Blvd. Benito Juárez 320, Puerto Peñasco',
      hours: 'Lun–Dom: 8am – 7pm',
      phone: '+52 638 100 0020',
      tags: ['Abierto', 'Llantas']
    }]

  },
  bares: {
    title: 'Bares',
    emoji: '🍺',
    description: 'Bares y lugares de entretenimiento nocturno en Puerto Peñasco.',
    businesses: [
    {
      id: 1,
      slug: 'bar-el-faro',
      name: 'Bar El Faro',
      category: 'Bar',
      image: "https://images.unsplash.com/photo-1575749292085-75c605f98838",
      alt: 'Bar El Faro con ambiente nocturno y vista al mar en Puerto Peñasco',
      address: 'Paseo Las Glorias 12',
      hours: 'Jue–Dom: 6pm – 2am',
      phone: '+52 638 100 0008',
      tags: ['Abierto', 'Vista al Mar']
    },
    {
      id: 2,
      slug: 'bar-la-palapa',
      name: 'La Palapa Beach Bar',
      category: 'Bar',
      image: "https://images.unsplash.com/photo-1650053163078-e8547b21f012",
      alt: 'La Palapa Beach Bar con mesas en la playa y ambiente tropical',
      address: 'Playa Hermosa, Local 3',
      hours: 'Vie–Dom: 4pm – 1am',
      phone: '+52 638 100 0009',
      tags: ['Fin de semana', 'Playa']
    },
    {
      id: 3,
      slug: 'bar-el-ancla',
      name: 'Bar El Ancla',
      category: 'Bar',
      image: "https://images.unsplash.com/photo-1707531425858-8fc996d6129a",
      alt: 'Bar El Ancla con decoración náutica y ambiente relajado en Puerto Peñasco',
      address: 'Calle Primero de Junio 60, Puerto Peñasco',
      hours: 'Mié–Dom: 5pm – 1am',
      phone: '+52 638 100 0021',
      tags: ['Abierto', 'Cocteles']
    },
    {
      id: 4,
      slug: 'bar-sunset-lounge',
      name: 'Sunset Lounge',
      category: 'Bar',
      image: "https://images.unsplash.com/photo-1668277155756-0ebb2801f6b4",
      alt: 'Sunset Lounge con terraza y vista al atardecer del Golfo de California',
      address: 'Blvd. Las Glorias 200, Puerto Peñasco',
      hours: 'Jue–Dom: 4pm – 2am',
      phone: '+52 638 100 0022',
      tags: ['Abierto', 'Terraza']
    },
    {
      id: 5,
      slug: 'bar-la-cantina',
      name: 'La Cantina del Puerto',
      category: 'Bar',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_12bb8ee12-1768081184180.png",
      alt: 'La Cantina del Puerto con ambiente mexicano tradicional y música en vivo',
      address: 'Zona Centro 33, Puerto Peñasco',
      hours: 'Mar–Dom: 6pm – 1am',
      phone: '+52 638 100 0023',
      tags: ['Abierto', 'Música en Vivo']
    }]

  },
  servicios: {
    title: 'Servicios',
    emoji: '⚙️',
    description: 'Servicios profesionales y del hogar en Puerto Peñasco.',
    businesses: [
    {
      id: 1,
      slug: 'servicios-peñasco-pro',
      name: 'Peñasco Pro Servicios',
      category: 'Servicios',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd7ca23b-1769351129025.png",
      alt: 'Técnico de Peñasco Pro Servicios realizando instalación eléctrica en hogar',
      address: 'Av. Benito Juárez 55',
      hours: 'Lun–Sáb: 8am – 6pm',
      phone: '+52 638 100 0010',
      tags: ['Abierto', 'Plomería', 'Electricidad']
    },
    {
      id: 2,
      slug: 'servicios-limpieza-total',
      name: 'Limpieza Total PP',
      category: 'Servicios',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_146af9ae0-1764670046603.png",
      alt: 'Equipo de Limpieza Total PP con uniformes y equipo de limpieza profesional',
      address: 'Zona Centro 88',
      hours: 'Lun–Dom: 7am – 7pm',
      phone: '+52 638 100 0011',
      tags: ['Abierto', 'Limpieza']
    },
    {
      id: 3,
      slug: 'servicios-pintura-express',
      name: 'Pintura Express PP',
      category: 'Servicios',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9ee59e2-1766907761956.png",
      alt: 'Pintor profesional aplicando pintura en interior de casa con rodillo',
      address: 'Calle Sinaloa 44, Puerto Peñasco',
      hours: 'Lun–Sáb: 8am – 6pm',
      phone: '+52 638 100 0024',
      tags: ['Abierto', 'Pintura']
    },
    {
      id: 4,
      slug: 'servicios-cerrajeria-peñasco',
      name: 'Cerrajería Peñasco',
      category: 'Servicios',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a319b957-1767389676748.png",
      alt: 'Cerrajero profesional instalando cerradura de seguridad en puerta',
      address: 'Blvd. Fremont 110, Puerto Peñasco',
      hours: 'Lun–Dom: 8am – 8pm',
      phone: '+52 638 100 0025',
      tags: ['Abierto', 'Cerrajería']
    },
    {
      id: 5,
      slug: 'servicios-jardineria-verde',
      name: 'Jardinería Verde PP',
      category: 'Servicios',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec003d02-1764703347592.png",
      alt: 'Jardinero podando plantas y manteniendo jardín residencial en Puerto Peñasco',
      address: 'Av. Constitución 180, Puerto Peñasco',
      hours: 'Lun–Sáb: 7am – 5pm',
      phone: '+52 638 100 0026',
      tags: ['Abierto', 'Jardinería']
    }]

  }
};

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: {params: Promise<{slug: string;}>;}) {
  const { slug } = await params;
  const data = categoryData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#051F20] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B9E7A] text-lg">Categoría no encontrada</p>
          <Link href="/home" className="btn-primary mt-4 inline-block px-6 py-3 rounded-xl text-sm">Volver al inicio</Link>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-[#051F20]">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-[#6B9E7A] mb-8">
            <Link href="/home" className="hover:text-[#8CB79B] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-[#8CB79B]">{data.title}</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{data.emoji}</span>
              <h1 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#E8F5EA]">{data.title}</h1>
            </div>
            <p className="text-[#6B9E7A] text-base">{data.description}</p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.businesses.map((biz) =>
            <div
              key={biz.id}
              className="biz-card rounded-2xl overflow-hidden flex flex-col"
              style={{ background: '#173831', border: '1px solid rgba(140,183,155,0.1)' }}>
              
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden shrink-0">
                  <AppImage src={biz.image} alt={biz.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173831]/60 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    {biz.tags.slice(0, 1).map((tag) =>
                  <span key={tag} className="tag tag-open">{tag}</span>
                  )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#6B9E7A] mb-1">{biz.category}</p>
                  <h3 className="font-semibold text-[#E8F5EA] text-base mb-3">{biz.name}</h3>
                  <div className="flex flex-col gap-1.5 mb-4 flex-1">
                    <p className="text-[12px] text-[#6B9E7A] flex items-center gap-1.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      {biz.address}
                    </p>
                    <p className="text-[12px] text-[#8CB79B] flex items-center gap-1.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      {biz.hours}
                    </p>
                  </div>
                  <Link
                  href={`/negocio/${biz.slug}`}
                  className="btn-primary text-xs font-bold px-4 py-2.5 rounded-xl text-center block">
                    Ver negocio →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}