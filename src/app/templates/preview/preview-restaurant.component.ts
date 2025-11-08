// src/app/templates/preview/preview-restaurante.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMeta } from '../templates.data';

@Component({
  selector: 'app-preview-restaurante',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preview-restaurant">
      <!-- Top Bar -->
      <div class="top-bar">
        <div class="container">
          <div class="contact-info">
            <span>📞 +123 456 7890</span>
            <span>📍 Av. Principal 123, Lima</span>
          </div>
          <div class="hours">
            <span>⏰ Abierto: Lun - Dom 11:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>

      <!-- Header -->
      <header class="header">
        <div class="container">
          <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/128/3075/3075977.png" alt="Logo">
            <div class="logo-text">
              <span class="brand">{{ data?.name || 'Sabor Latino' }}</span>
              <span class="tagline">Cocina Auténtica</span>
            </div>
          </div>
          <nav class="nav">
            <a>Inicio</a>
            <a>Menú</a>
            <a>Promociones</a>
            <a>Reservas</a>
            <a>Contacto</a>
          </nav>
          <button class="order-btn">Hacer Pedido</button>
        </div>
      </header>

      <!-- Hero -->
      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Sabores que Enamoran</h1>
          <p>Disfruta de la mejor comida latina con delivery a domicilio</p>
          <div class="hero-buttons">
            <button class="btn-primary">Ver Menú</button>
            <button class="btn-secondary">Pedir Ahora</button>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="features">
        <div class="container">
          <div class="feature-grid">
            <div class="feature-item">
              <img src="https://cdn-icons-png.flaticon.com/128/3703/3703377.png" alt="Delivery">
              <h3>Delivery Rápido</h3>
              <p>Entregamos en 30-45 minutos</p>
            </div>
            <div class="feature-item">
              <img src="https://cdn-icons-png.flaticon.com/128/3082/3082031.png" alt="Calidad">
              <h3>Ingredientes Frescos</h3>
              <p>100% productos naturales</p>
            </div>
            <div class="feature-item">
              <img src="https://cdn-icons-png.flaticon.com/128/1046/1046747.png" alt="Chef">
              <h3>Chefs Expertos</h3>
              <p>20 años de experiencia</p>
            </div>
            <div class="feature-item">
              <img src="https://cdn-icons-png.flaticon.com/128/2769/2769339.png" alt="Reserva">
              <h3>Reserva Online</h3>
              <p>Asegura tu mesa fácilmente</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Section -->
      <section class="menu-section">
        <div class="container">
          <div class="section-title">
            <h2>Nuestro Menú</h2>
            <p>Descubre nuestros platos más populares</p>
          </div>

          <!-- Menu Categories -->
          <div class="menu-categories">
            <button class="category-btn active" *ngFor="let cat of menuCategories">
              {{ cat }}
            </button>
          </div>

          <!-- Menu Items -->
          <div class="menu-grid">
            <div class="menu-item" *ngFor="let item of menuItems">
              <div class="menu-image">
                <img [src]="item.image" [alt]="item.name">
                <span class="badge" *ngIf="item.popular">Popular</span>
                <span class="badge new" *ngIf="item.isNew">Nuevo</span>
              </div>
              <div class="menu-content">
                <div class="menu-header">
                  <h3>{{ item.name }}</h3>
                  <span class="price">S/{{ item.price }}</span>
                </div>
                <p class="description">{{ item.description }}</p>
                <div class="menu-footer">
                  <div class="rating">
                    <span class="stars">★★★★★</span>
                    <span class="reviews">({{ item.reviews }})</span>
                  </div>
                  <button class="add-btn">Agregar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Promotions -->
      <section class="promotions">
        <div class="container">
          <div class="section-title">
            <h2>Promociones Especiales</h2>
            <p>Aprovecha nuestras ofertas limitadas</p>
          </div>
          <div class="promo-grid">
            <div class="promo-card" *ngFor="let promo of promotions">
              <img [src]="promo.image" [alt]="promo.title">
              <div class="promo-content">
                <span class="discount">-{{ promo.discount }}%</span>
                <h3>{{ promo.title }}</h3>
                <p>{{ promo.description }}</p>
                <button>Ordenar Ahora</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="testimonials">
        <div class="container">
          <div class="section-title">
            <h2>Lo Que Dicen Nuestros Clientes</h2>
          </div>
          <div class="testimonials-grid">
            <div class="testimonial-card" *ngFor="let testimonial of testimonials">
              <div class="stars">★★★★★</div>
              <p>"{{ testimonial.text }}"</p>
              <div class="customer">
                <img [src]="testimonial.avatar" [alt]="testimonial.name">
                <div>
                  <strong>{{ testimonial.name }}</strong>
                  <span>Cliente frecuente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Reservation -->
      <section class="reservation">
        <div class="container">
          <div class="reservation-content">
            <div class="reservation-info">
              <h2>Reserva tu Mesa</h2>
              <p>Disfruta de una experiencia gastronómica inolvidable en nuestro restaurante</p>
              <ul class="benefits">
                <li>Ambiente acogedor y familiar</li>
                <li>Atención personalizada</li>
                <li>Música en vivo los fines de semana</li>
                <li>Zona infantil disponible</li>
              </ul>
            </div>
            <form class="reservation-form">
              <input type="text" placeholder="Tu nombre">
              <input type="email" placeholder="Tu email">
              <input type="tel" placeholder="Teléfono">
              <input type="date" placeholder="Fecha">
              <input type="time" placeholder="Hora">
              <select>
                <option>Número de personas</option>
                <option>1-2 personas</option>
                <option>3-4 personas</option>
                <option>5-6 personas</option>
                <option>Más de 6 personas</option>
              </select>
              <button type="submit">Reservar Ahora</button>
            </form>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="gallery">
        <div class="container">
          <div class="section-title">
            <h2>Galería</h2>
            <p>Un vistazo a nuestra cocina y ambiente</p>
          </div>
          <div class="gallery-grid">
            <div class="gallery-item" *ngFor="let img of galleryImages">
              <img [src]="img" alt="Gallery">
            </div>
          </div>
        </div>
      </section>

      <!-- Download App -->
      <section class="app-section">
        <div class="container">
          <div class="app-content">
            <div class="app-text">
              <h2>Descarga Nuestra App</h2>
              <p>Haz tus pedidos más rápido y recibe ofertas exclusivas</p>
              <div class="app-buttons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png" alt="Google Play">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png" alt="App Store">
              </div>
            </div>
            <div class="app-image">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop" alt="App">
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <div class="footer-logo">
                <img src="https://cdn-icons-png.flaticon.com/128/3075/3075977.png" alt="Logo">
                <span>{{ data?.name || 'Sabor Latino' }}</span>
              </div>
              <p>Sabores auténticos que alimentan el alma</p>
              <div class="social">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111491.png" alt="Instagram">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter">
              </div>
            </div>
            <div class="footer-col">
              <h4>Enlaces Rápidos</h4>
              <a>Menú</a>
              <a>Promociones</a>
              <a>Reservas</a>
              <a>Nosotros</a>
            </div>
            <div class="footer-col">
              <h4>Horarios</h4>
              <p>Lunes - Jueves: 11:00 AM - 10:00 PM</p>
              <p>Viernes - Sábado: 11:00 AM - 11:00 PM</p>
              <p>Domingo: 11:00 AM - 9:00 PM</p>
            </div>
            <div class="footer-col">
              <h4>Contacto</h4>
              <p>📞 +123 456 7890</p>
              <p>📧 info@saborlatino.com</p>
              <p>📍 Av. Principal 123, Lima</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 {{ data?.name || 'Sabor Latino' }}. Todos los derechos reservados.</p>
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
    
    .preview-restaurant {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #fff;
      min-height: 100%;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Top Bar */
    .top-bar {
      background: #1a1a1a;
      color: white;
      padding: 0.8rem 0;
      font-size: 0.9rem;
    }
    
    .top-bar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .contact-info {
      display: flex;
      gap: 2rem;
    }
    
    /* Header */
    .header {
      background: white;
      padding: 1rem 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .logo img {
      width: 50px;
      height: 50px;
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
    }
    
    .brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: #d97706;
    }
    
    .tagline {
      font-size: 0.85rem;
      color: #666;
    }
    
    .nav {
      display: flex;
      gap: 2rem;
    }
    
    .nav a {
      color: #4a5568;
      text-decoration: none;
      cursor: pointer;
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav a:hover {
      color: #d97706;
    }
    
    .order-btn {
      background: #d97706;
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .order-btn:hover {
      background: #b45309;
      transform: translateY(-2px);
    }
    
    /* Hero */
    .hero {
      height: 600px;
      background: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop') center/cover;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      padding: 0 20px;
    }
    
    .hero h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    
    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    
    .btn-primary, .btn-secondary {
      padding: 1rem 2.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .btn-primary {
      background: #d97706;
      color: white;
    }
    
    .btn-primary:hover {
      background: #b45309;
      transform: translateY(-2px);
    }
    
    .btn-secondary {
      background: white;
      color: #d97706;
    }
    
    .btn-secondary:hover {
      background: #f5f5f5;
    }
    
    /* Features */
    .features {
      padding: 60px 20px;
      background: #f7fafc;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .feature-item {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      transition: all 0.3s;
    }
    
    .feature-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    }
    
    .feature-item img {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
    }
    
    .feature-item h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #1a202c;
    }
    
    .feature-item p {
      color: #718096;
    }
    
    /* Menu Section */
    .menu-section {
      padding: 80px 20px;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-title h2 {
      font-size: 2.5rem;
      color: #1a202c;
      margin-bottom: 0.5rem;
    }
    
    .section-title p {
      font-size: 1.1rem;
      color: #718096;
    }
    
    .menu-categories {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    
    .category-btn {
      padding: 0.8rem 2rem;
      border: 2px solid #e2e8f0;
      background: white;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s;
    }
    
    .category-btn.active,
    .category-btn:hover {
      background: #d97706;
      color: white;
      border-color: #d97706;
    }
    
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
    }
    
    .menu-item {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: all 0.3s;
    }
    
    .menu-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    }
    
    .menu-image {
      height: 220px;
      position: relative;
      overflow: hidden;
    }
    
    .menu-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #d97706;
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    .badge.new {
      background: #10b981;
    }
    
    .menu-content {
      padding: 1.5rem;
    }
    
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 0.8rem;
    }
    
    .menu-content h3 {
      font-size: 1.3rem;
      color: #1a202c;
    }
    
    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #d97706;
    }
    
    .description {
      color: #718096;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .menu-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid #e2e8f0;
    }
    
    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .stars {
      color: #fbbf24;
      font-size: 1rem;
    }
    
    .reviews {
      color: #718096;
      font-size: 0.9rem;
    }
    
    .add-btn {
      background: #d97706;
      color: white;
      border: none;
      padding: 0.6rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .add-btn:hover {
      background: #b45309;
    }
    
    /* Promotions */
    .promotions {
      padding: 80px 20px;
      background: #f7fafc;
    }
    
    .promo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .promo-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
    }
    
    .promo-card img {
      width: 180px;
      height: 180px;
      object-fit: cover;
    }
    
    .promo-content {
      padding: 1.5rem;
      flex: 1;
      position: relative;
    }
    
    .discount {
      position: absolute;
      top: -10px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    .promo-content h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #1a202c;
    }
    
    .promo-content p {
      color: #718096;
      margin-bottom: 1rem;
    }
    
    .promo-content button {
      background: #d97706;
      color: white;
      border: none;
      padding: 0.7rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
    }
    
    /* Testimonials */
    .testimonials {
      padding: 80px 20px;
    }
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    
    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    
    .stars {
      color: #fbbf24;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    
    .testimonial-card p {
      color: #4a5568;
      font-style: italic;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .customer {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .customer img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .customer strong {
      display: block;
      color: #1a202c;
      margin-bottom: 0.2rem;
    }
    
    .customer span {
      color: #718096;
      font-size: 0.9rem;
    }
    
    /* Reservation */
    .reservation {
      padding: 80px 20px;
      background: #f7fafc;
    }
    
    .reservation-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .reservation-info h2 {
      font-size: 2.5rem;
      color: #1a202c;
      margin-bottom: 1rem;
    }
    
    .reservation-info > p {
      color: #718096;
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    
    .benefits {
      list-style: none;
    }
    
    .benefits li {
      padding: 0.8rem 0;
      color: #4a5568;
      padding-left: 2rem;
      position: relative;
    }
    
    .benefits li:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #d97706;
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    .reservation-form {
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .reservation-form input,
    .reservation-form select {
      padding: 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
    }
    
    .reservation-form input:focus,
    .reservation-form select:focus {
      border-color: #d97706;
    }
    
    .reservation-form button {
      background: #d97706;
      color: white;
      border: none;
      padding: 1.2rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      margin-top: 0.5rem;
    }
    
    /* Gallery */
    .gallery {
      padding: 80px 20px;
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
    }
    
    .gallery-item {
      height: 280px;
      overflow: hidden;
      border-radius: 12px;
      cursor: pointer;
    }
    
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    
    .gallery-item:hover img {
      transform: scale(1.1);
    }
    
    /* App Section */
    .app-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      color: white;
    }
    
    .app-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .app-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .app-text p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }
    
    .app-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .app-buttons img {
      height: 50px;
      cursor: pointer;
    }
    
    .app-image {
      text-align: center;
    }
    
    .app-image img {
      max-width: 300px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    
    /* Footer */
    .footer {
      background: #1a202c;
      color: white;
      padding: 50px 20px 20px;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-bottom: 2rem;
    }
    
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .footer-logo img {
      width: 40px;
      height: 40px;
    }
    
    .footer-logo span {
      font-size: 1.5rem;
      font-weight: bold;
      color: #d97706;
    }
    
    .footer-col h4 {
      margin-bottom: 1.5rem;
      color: #d97706;
      font-size: 1.1rem;
    }
    
    .footer-col p {
      color: #cbd5e0;
      line-height: 1.8;
      margin: 0.5rem 0;
    }
    
    .footer-col a {
      display: block;
      color: #cbd5e0;
      text-decoration: none;
      margin: 0.5rem 0;
      cursor: pointer;
    }
    
    .footer-col a:hover {
      color: white;
    }
    
    .social {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .social img {
      width: 32px;
      height: 32px;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.3s;
    }
    
    .social img:hover {
      opacity: 1;
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #2d3748;
      color: #cbd5e0;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .top-bar .container {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
      }
      
      .contact-info {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .header .container {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
      
      .nav {
        display: none;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero p {
        font-size: 1.2rem;
      }
      
      .hero-buttons {
        flex-direction: column;
      }
      
      .menu-grid {
        grid-template-columns: 1fr;
      }
      
      .promo-grid {
        grid-template-columns: 1fr;
      }
      
      .promo-card {
        flex-direction: column;
      }
      
      .promo-card img {
        width: 100%;
        height: 200px;
      }
      
      .reservation-content {
        grid-template-columns: 1fr;
      }
      
      .app-content {
        grid-template-columns: 1fr;
      }
      
      .app-image img {
        max-width: 250px;
      }
    }
  `]
})
export class PreviewRestauranteComponent {
  @Input() data?: TemplateMeta;

  menuCategories = ['Todo', 'Entradas', 'Platos Principales', 'Postres', 'Bebidas'];

  menuItems = [
    {
      name: 'Ceviche Clásico',
      description: 'Pescado fresco marinado en limón con cebolla morada, ají limo y camote',
      price: 35,
      popular: true,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&h=400&fit=crop'
    },
    {
      name: 'Lomo Saltado',
      description: 'Carne de res salteada con cebolla, tomate y papas fritas, acompañado de arroz',
      price: 32,
      popular: true,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=400&fit=crop'
    },
    {
      name: 'Arroz con Mariscos',
      description: 'Arroz amarillo con una mezcla de mariscos frescos y especias tradicionales',
      price: 38,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&fit=crop'
    },
    {
      name: 'Ají de Gallina',
      description: 'Pollo deshilachado en salsa cremosa de ají amarillo sobre papas y arroz',
      price: 28,
      isNew: true,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop'
    },
    {
      name: 'Anticuchos',
      description: 'Brochetas de corazón de res marinadas, asadas a la parrilla',
      price: 25,
      popular: true,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop'
    },
    {
      name: 'Causa Limeña',
      description: 'Capas de papa amarilla con relleno de pollo o atún, palta y mayo',
      price: 22,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop'
    }
  ];

  promotions = [
    {
      title: 'Combo Familiar',
      description: 'Ceviche + Lomo Saltado + Chicha Morada para 4 personas',
      discount: 30,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
    },
    {
      title: 'Menú Ejecutivo',
      description: 'Entrada + Plato Principal + Postre + Bebida',
      discount: 25,
      image: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&h=300&fit=crop'
    },
    {
      title: 'Happy Hour',
      description: '2x1 en bebidas y piqueos de 5pm a 7pm',
      discount: 50,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop'
    }
  ];

  testimonials = [
    {
      text: 'La mejor comida peruana que he probado. El ceviche es simplemente espectacular, fresco y con el punto perfecto de limón.',
      name: 'María González',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      text: 'El delivery es rapidísimo y la comida llega caliente. El lomo saltado es mi favorito, lo pido cada semana.',
      name: 'Carlos Rodríguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      text: 'Ambiente familiar y acogedor. Los anticuchos están deliciosos y el servicio es excelente. Muy recomendado.',
      name: 'Ana Martínez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  galleryImages = [
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop'
  ];
}