// src/app/templates/preview/preview-ecommerce.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMeta } from '../templates.data';

@Component({
  selector: 'app-preview-ecommerce',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preview-ecommerce">
      <!-- Top Bar -->
      <div class="top-bar">
        <div class="container">
          <span>Envíos a todo el país</span>
          <span>+123 456 7890</span>
        </div>
      </div>

      <!-- Header -->
      <header class="header">
        <div class="container">
          <div class="logo">
            <img src="https://media.istockphoto.com/id/1276733968/es/vector/plantilla-de-dise%C3%B1o-de-ilustraci%C3%B3n-de-salud-y-vector-m%C3%A9dico-s%C3%ADmbolo-de-la-salud.jpg?s=612x612&w=0&k=20&c=q6pEAqgX6Af1vp1oXuxmZyS8WQgxiG7CXwc04ZxmzLU=" alt="Logo">
            <span class="name">{{ data?.name || 'FarmaSalud' }}</span>
          </div>
          
          <div class="search-bar">
            <input type="text" placeholder="Buscar medicamentos, productos...">
            <button>Buscar</button>
          </div>
          
          <div class="header-actions">
            <button class="user-btn">
              <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="Usuario">
            </button>
            <button class="cart-btn">
              <img src="https://cdn-icons-png.flaticon.com/128/263/263142.png" alt="Carrito">
              <span class="badge">0</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Navigation -->
      <nav class="nav">
        <div class="container">
          <a>Inicio</a>
          <a>Medicamentos</a>
          <a>Dermocosmética</a>
          <a>Vitaminas</a>
          <a>Maternidad</a>
          <a>Ofertas</a>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Tu salud es nuestra prioridad</h1>
          <p>En FarmaSalud encontrarás los mejores productos para el cuidado de tu salud y bienestar, con el respaldo de nuestros farmacéuticos expertos.</p>
          <button class="cta-button">Ver productos</button>
        </div>
      </section>

      <!-- Categories -->
      <section class="categories">
        <div class="container">
          <h2>Categorías</h2>
          <div class="category-grid">
            <div class="category-card" *ngFor="let cat of categories">
              <img [src]="cat.image" [alt]="cat.name">
              <h3>{{ cat.name }}</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="products">
        <div class="container">
          <h2>Productos Destacados</h2>
          <div class="underline"></div>
          
          <div class="product-grid">
            <div class="product-card" *ngFor="let product of products">
              <div class="product-img">
                <img [src]="product.image" [alt]="product.name">
                <span class="discount" *ngIf="product.discount">-{{ product.discount }}%</span>
              </div>
              <h3>{{ product.name }}</h3>
              <p class="description">{{ product.description }}</p>
              <div class="price-section">
                <span class="old-price" *ngIf="product.oldPrice">\${{ product.oldPrice }}</span>
                <span class="price">\${{ product.price }}</span>
              </div>
              <button class="add-btn">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Banner Promocional -->
      <section class="promo-banner">
        <div class="container">
          <div class="promo-content">
            <h2>Ofertas Especiales</h2>
            <p>Hasta 40% de descuento en productos seleccionados</p>
            <button>Ver ofertas</button>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section class="services">
        <div class="container">
          <div class="service-grid">
            <div class="service-item">
              <img src="https://cdn-icons-png.flaticon.com/128/411/411763.png" alt="Envío">
              <h3>Envío Gratis</h3>
              <p>En compras mayores a $50</p>
            </div>
            <div class="service-item">
              <img src="https://cdn-icons-png.flaticon.com/128/4108/4108042.png" alt="Pago">
              <h3>Pago Seguro</h3>
              <p>Múltiples métodos de pago</p>
            </div>
            <div class="service-item">
              <img src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png" alt="Asesoría">
              <h3>Asesoría Profesional</h3>
              <p>Consulta con farmacéuticos</p>
            </div>
            <div class="service-item">
              <img src="https://cdn-icons-png.flaticon.com/128/3209/3209265.png" alt="Atención">
              <h3>Atención 24/7</h3>
              <p>Estamos para ayudarte</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-section">
              <h4>{{ data?.name || 'FarmaSalud' }}</h4>
              <p>Tu farmacia de confianza</p>
            </div>
            <div class="footer-section">
              <h4>Información</h4>
              <a>Sobre nosotros</a>
              <a>Preguntas frecuentes</a>
              <a>Términos y condiciones</a>
            </div>
            <div class="footer-section">
              <h4>Contacto</h4>
              <a>info@farmasalud.com</a>
              <a>+123 456 7890</a>
              <a>Av. Principal 123</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 {{ data?.name || 'FarmaSalud' }}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .preview-ecommerce {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #f8f9fa;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Top Bar */
    .top-bar {
      background: #1e88e5;
      color: white;
      padding: 8px 0;
      font-size: 14px;
    }
    
    .top-bar .container {
      display: flex;
      justify-content: space-between;
    }
    
    /* Header */
    .header {
      background: white;
      padding: 20px 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 24px;
      font-weight: bold;
      color: #2e7d32;
    }
    
    .logo img {
      width: 40px;
      height: 40px;
    }
    
    .search-bar {
      flex: 1;
      display: flex;
      max-width: 500px;
    }
    
    .search-bar input {
      flex: 1;
      padding: 10px 15px;
      border: 2px solid #1e88e5;
      border-right: none;
      border-radius: 25px 0 0 25px;
      font-size: 14px;
      outline: none;
    }
    
    .search-bar button {
      padding: 10px 20px;
      background: #1e88e5;
      color: white;
      border: none;
      border-radius: 0 25px 25px 0;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
    }
    
    .header-actions {
      display: flex;
      gap: 15px;
    }
    
    .user-btn, .cart-btn {
      background: white;
      border: 2px solid #e0e0e0;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      position: relative;
    }
    
    .user-btn img, .cart-btn img {
      width: 24px;
      height: 24px;
    }
    
    .badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #ff5722;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
    }
    
    /* Navigation */
    .nav {
      background: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .nav .container {
      display: flex;
      gap: 30px;
      padding: 15px 20px;
    }
    
    .nav a {
      color: #424242;
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }
    
    .nav a:hover {
      color: #1e88e5;
    }
    
    /* Hero */
    .hero {
      background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
      color: white;
      padding: 80px 20px;
      text-align: center;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero h1 {
      color: white;
      font-size: 42px;
      margin-bottom: 15px;
    }
    
    .hero p {
      font-size: 18px;
      margin-bottom: 25px;
      opacity: 0.95;
      line-height: 1.6;
      color: #e3f2fd;
    }
    
    .cta-button {
      background: #ff9800;
      color: white;
      border: none;
      padding: 15px 40px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 25px;
      cursor: pointer;
    }
    
    .cta-button:hover {
      background: #f57c00;
    }
    
    /* Categories */
    .categories {
      padding: 50px 20px;
      background: white;
    }
    
    .categories h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 40px;
      color: #2e7d32;
    }
    
    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
    }
    
    .category-card {
      background: #f5f5f5;
      padding: 30px 20px;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .category-card:hover {
      background: #e8f5e9;
      transform: translateY(-5px);
    }
    
    .category-card img {
      width: 64px;
      height: 64px;
      margin-bottom: 15px;
    }
    
    .category-card h3 {
      font-size: 16px;
      color: #424242;
    }
    
    /* Products */
    .products {
      padding: 50px 20px;
    }
    
    .products h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 10px;
      color: #212121;
    }
    
    .underline {
      width: 80px;
      height: 4px;
      background: #2e7d32;
      margin: 0 auto 40px;
    }
    
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 25px;
    }
    
    .product-card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s;
    }
    
    .product-card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      transform: translateY(-5px);
    }
    
    .product-img {
      background: #f5f5f5;
      height: 200px;
      border-radius: 8px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    
    .product-img img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    
    .discount {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ff5722;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
      font-size: 14px;
    }
    
    .product-card h3 {
      font-size: 18px;
      margin-bottom: 8px;
      color: #212121;
    }
    
    .description {
      font-size: 14px;
      color: #757575;
      margin-bottom: 15px;
    }
    
    .price-section {
      margin-bottom: 15px;
    }
    
    .old-price {
      text-decoration: line-through;
      color: #9e9e9e;
      margin-right: 10px;
      font-size: 16px;
    }
    
    .price {
      color: #2e7d32;
      font-size: 24px;
      font-weight: bold;
    }
    
    .add-btn {
      background: #2e7d32;
      color: white;
      border: none;
      padding: 12px 25px;
      width: 100%;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }
    
    .add-btn:hover {
      background: #1b5e20;
    }
    
    /* Promo Banner */
    .promo-banner {
      background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
      color: white;
      padding: 60px 20px;
      text-align: center;
      margin: 50px 0;
    }
    
    .promo-content h2 {
      font-size: 36px;
      margin-bottom: 15px;
    }
    
    .promo-content p {
      font-size: 20px;
      margin-bottom: 25px;
    }
    
    .promo-content button {
      background: white;
      color: #ff9800;
      border: none;
      padding: 15px 40px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 25px;
      cursor: pointer;
    }
    
    .promo-content button:hover {
      background: #f5f5f5;
    }
    
    /* Services */
    .services {
      padding: 50px 20px;
      background: white;
    }
    
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    
    .service-item {
      text-align: center;
      padding: 20px;
    }
    
    .service-item img {
      width: 64px;
      height: 64px;
      margin-bottom: 15px;
    }
    
    .service-item h3 {
      font-size: 18px;
      margin-bottom: 8px;
      color: #212121;
    }
    
    .service-item p {
      color: #757575;
      font-size: 14px;
    }
    
    /* Footer */
    .footer {
      background: #263238;
      color: white;
      padding: 40px 20px 20px;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
      margin-bottom: 30px;
    }
    
    .footer-section h4 {
      margin-bottom: 15px;
      color: #81c784;
      font-size: 18px;
    }
    
    .footer-section p,
    .footer-section a {
      color: #b0bec5;
      display: block;
      margin: 8px 0;
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;
    }
    
    .footer-section a:hover {
      color: white;
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #455a64;
      color: #90a4ae;
      font-size: 14px;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .header .container {
        flex-wrap: wrap;
      }
      
      .search-bar {
        order: 3;
        width: 100%;
        max-width: 100%;
        margin-top: 15px;
      }
      
      .nav .container {
        overflow-x: auto;
        white-space: nowrap;
      }
      
      .hero h1 {
        font-size: 28px;
      }
      
      .hero p {
        font-size: 16px;
      }
      
      .product-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
      
      .category-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }
    }
  `]
})
export class PreviewEcommerceComponent {
  @Input() data?: TemplateMeta;

  categories = [
    { name: 'Medicamentos', image: 'https://cdn-icons-png.flaticon.com/128/2913/2913133.png' },
    { name: 'Vitaminas', image: 'https://cdn-icons-png.flaticon.com/128/3143/3143616.png' },
    { name: 'Cuidado Personal', image: 'https://cdn-icons-png.flaticon.com/128/2553/2553642.png' },
    { name: 'Bebés', image: 'https://cdn-icons-png.flaticon.com/128/2659/2659360.png' },
    { name: 'Dermocosméticos', image: 'https://cdn-icons-png.flaticon.com/128/3268/3268377.png' },
    { name: 'Equipos Médicos', image: 'https://cdn-icons-png.flaticon.com/128/2913/2913163.png' }
  ];

  products = [
    { 
      name: 'Paracetamol 500mg', 
      description: 'Analgésico y antipirético',
      price: 8.99, 
      oldPrice: 12.99,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop'
    },
    { 
      name: 'Vitamina C 1000mg', 
      description: 'Suplemento vitamínico',
      price: 15.50, 
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mav/mav07161/y/55.jpg'
    },
    { 
      name: 'Crema Hidratante', 
      description: 'Para piel seca',
      price: 22.99, 
      oldPrice: 29.99,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop'
    },
    { 
      name: 'Termómetro Digital', 
      description: 'Medición rápida',
      price: 18.00, 
      image: 'https://images.unsplash.com/photo-1612351728668-5682f4e0b5b7?w=300&h=300&fit=crop'
    },
    { 
      name: 'Protector Solar SPF 50', 
      description: 'Protección UVA/UVB',
      price: 25.50, 
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop'
    },
    { 
      name: 'Omega 3 Premium', 
      description: 'Salud cardiovascular',
      price: 32.99, 
      oldPrice: 45.00,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300&h=300&fit=crop'
    }
  ];
}