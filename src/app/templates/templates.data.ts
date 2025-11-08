// src/app/templates/templates.data.ts

export interface TemplateMeta {
  id: number;
  slug: string;
  name: string;
  type: 'ecommerce' | 'landing' | 'portfolio' | 'blog' | 'restaurant' | 'agency';
  desc: string;
  features: string[];
  category: string;
  previewUrl?: string;
  previewImage?: string; // Nueva propiedad para la imagen
}

export const TEMPLATES: TemplateMeta[] = [
  {
    id: 1,
    slug: 'ecommerce-moderno',
    name: 'E-commerce Moderno',
    type: 'ecommerce',
    desc: 'Tienda online completa con carrito, pagos y gestión de productos.',
    features: ['Carrito de compras', 'Pagos seguros', 'Gestión de inventario'],
    category: 'Tienda Online',
    previewImage: 'ecommerce-moderno.jpg'
  },
  {
    id: 2,
    slug: 'landing-profesional',
    name: 'Landing Page Profesional',
    type: 'landing',
    desc: 'Página de aterrizaje optimizada para conversiones y ventas.',
    features: ['Formularios de contacto', 'Testimonios', 'Call-to-action'],
    category: 'Marketing',
    previewImage: 'landing-profesional.jpg'
  },
  {
    id: 3,
    slug: 'portfolio-creativo',
    name: 'Portfolio Creativo',
    type: 'portfolio',
    desc: 'Muestra tu trabajo de manera elegante y profesional.',
    features: ['Galería de proyectos', 'Biografía', 'Formulario de contacto'],
    category: 'Personal',
    previewImage: 'portfolio-creativo.jpg'
  },
  {
    id: 4,
    slug: 'blog-corporativo',
    name: 'Blog Corporativo',
    type: 'blog',
    desc: 'Sitio web para empresas con blog integrado y noticias.',
    features: ['Sistema de blog', 'Categorías', 'Búsqueda avanzada'],
    category: 'Corporativo',
    previewImage: 'blog-corporativo.jpg'
  },
  {
    id: 5,
    slug: 'restaurante-delivery',
    name: 'Restaurante & Delivery',
    type: 'restaurant',
    desc: 'Sitio web para restaurantes con menú online y pedidos.',
    features: ['Menú interactivo', 'Sistema de pedidos', 'Reservas online'],
    category: 'Gastronomía',
    previewImage: 'restaurante-delivery.jpg'
  },
  {
    id: 6,
    slug: 'agencia-digital',
    name: 'Agencia Digital',
    type: 'agency',
    desc: 'Sitio web para agencias de marketing y servicios digitales.',
    features: ['Portfolio de servicios', 'Casos de éxito', 'Equipo'],
    category: 'Servicios',
    previewImage: 'agencia-digital.jpg'
  }
];
