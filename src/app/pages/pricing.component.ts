import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans = [
    { 
      name: 'Start', 
      price: '29', 
      description: 'Perfect para emprendedores y pequeños negocios',
      features: [
        '1 página web profesional',
        'Diseño responsive',
        'Hosting incluido por 1 año',
        'Dominio gratuito',
        'Formulario de contacto',
        'Soporte básico por email'
      ], 
      highlight: false 
    },
    { 
      name: 'Business', 
      price: '79', 
      description: 'Ideal para empresas en crecimiento',
      features: [
        'Hasta 10 páginas',
        'SEO optimizado',
        'Integración con redes sociales',
        'Analytics avanzado',
        'Chat en línea',
        'Soporte prioritario 24/7',
        'SSL Premium',
        'Backup automático'
      ], 
      highlight: true 
    },
    { 
      name: 'E-commerce', 
      price: '149', 
      description: 'Para tiendas online profesionales',
      features: [
        'Tienda online completa',
        'Catálogo ilimitado',
        'Carrito de compras',
        'Pasarelas de pago',
        'Gestión de inventario',
        'Reportes de ventas',
        'Marketing por email',
        'Soporte dedicado'
      ], 
      highlight: false 
    },
  ];

  faqs = [
    {
      question: '¿Puedo cambiar de plan después?',
      answer: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu panel de control.'
    },
    {
      question: '¿Qué incluye el soporte técnico?',
      answer: 'Incluye ayuda con configuración, resolución de problemas y actualizaciones de seguridad.'
    },
    {
      question: '¿Los precios incluyen hosting?',
      answer: 'Sí, todos nuestros planes incluyen hosting de alta velocidad y certificado SSL gratuito.'
    },
    {
      question: '¿Hay período de prueba?',
      answer: 'Ofrecemos 14 días de prueba gratuita en el plan Business para que puedas probarlo sin compromiso.'
    }
  ];
}
