  // src/app/templates/preview/preview-blog-corporativo.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMeta } from '../templates.data';

@Component({
  selector: 'app-preview-blog-corporativo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preview-blog">
      <!-- Header -->
      <header class="header">
        <div class="container">
          <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/128/3771/3771514.png" alt="Logo">
            <span>{{ data?.name || 'Corporativo Blog' }}</span>
          </div>
          <nav class="nav">
            <a>Inicio</a>
            <a>Blog</a>
            <a>Noticias</a>
            <a>Sobre Nosotros</a>
            <a>Contacto</a>
          </nav>
          <div class="search-icon">
            <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt="Buscar">
          </div>
        </div>
      </header>

      <!-- Featured Post -->
      <section class="featured">
        <div class="container">
          <div class="featured-content">
            <span class="badge">Destacado</span>
            <h1>El Futuro de la Transformación Digital en las Empresas</h1>
            <p>Descubre cómo las empresas líderes están adoptando nuevas tecnologías para mantenerse competitivas en un mercado en constante evolución.</p>
            <div class="meta">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop" alt="Author">
              <div>
                <strong>Juan Pérez</strong>
                <span>15 de Marzo, 2024 • 5 min lectura</span>
              </div>
            </div>
            <button class="read-more">Leer artículo completo</button>
          </div>
          <div class="featured-image">
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop" alt="Featured">
          </div>
        </div>
      </section>

      <!-- Search Bar -->
      <section class="search-section">
        <div class="container">
          <div class="search-bar">
            <input type="text" placeholder="Buscar artículos, noticias, temas...">
            <button>Buscar</button>
          </div>
          <div class="categories">
            <span>Categorías populares:</span>
            <a *ngFor="let cat of categories">{{ cat }}</a>
          </div>
        </div>
      </section>

      <!-- Latest Posts -->
      <section class="posts">
        <div class="container">
          <div class="section-header">
            <h2>Últimas Publicaciones</h2>
            <a class="view-all">Ver todos los artículos</a>
          </div>
          
          <div class="posts-grid">
            <article class="post-card" *ngFor="let post of posts">
              <div class="post-image">
                <img [src]="post.image" [alt]="post.title">
                <span class="category-tag">{{ post.category }}</span>
              </div>
              <div class="post-content">
                <div class="post-meta">
                  <span>{{ post.date }}</span>
                  <span>{{ post.readTime }}</span>
                </div>
                <h3>{{ post.title }}</h3>
                <p>{{ post.excerpt }}</p>
                <div class="post-footer">
                  <div class="author">
                    <img [src]="post.authorAvatar" [alt]="post.author">
                    <span>{{ post.author }}</span>
                  </div>
                  <a class="read-link">Leer más</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="newsletter">
        <div class="container">
          <div class="newsletter-content">
            <img src="https://cdn-icons-png.flaticon.com/128/561/561127.png" alt="Newsletter">
            <h2>Suscríbete a nuestro Newsletter</h2>
            <p>Recibe los mejores artículos y noticias directamente en tu correo</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Tu correo electrónico">
              <button type="submit">Suscribirse</button>
            </form>
            <p class="privacy">No spam. Solo contenido de calidad. Cancela cuando quieras.</p>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="categories-section">
        <div class="container">
          <h2>Explora por Categoría</h2>
          <div class="categories-grid">
            <div class="category-card" *ngFor="let cat of categoryCards">
              <img [src]="cat.icon" [alt]="cat.name">
              <h3>{{ cat.name }}</h3>
              <p>{{ cat.count }} artículos</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Trending Topics -->
      <section class="trending">
        <div class="container">
          <h2>Temas Más Populares</h2>
          <div class="trending-grid">
            <div class="trending-item" *ngFor="let topic of trendingTopics; let i = index">
              <span class="number">{{ i + 1 }}</span>
              <div class="trending-content">
                <h4>{{ topic.title }}</h4>
                <p>{{ topic.views }} vistas • {{ topic.comments }} comentarios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <h4>{{ data?.name || 'Corporativo Blog' }}</h4>
              <p>Tu fuente de información empresarial y tecnológica</p>
              <div class="social">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="LinkedIn">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111491.png" alt="Instagram">
              </div>
            </div>
            <div class="footer-col">
              <h4>Blog</h4>
              <a>Últimos artículos</a>
              <a>Categorías</a>
              <a>Autores</a>
              <a>Archivo</a>
            </div>
            <div class="footer-col">
              <h4>Empresa</h4>
              <a>Sobre nosotros</a>
              <a>Equipo</a>
              <a>Carreras</a>
              <a>Contacto</a>
            </div>
            <div class="footer-col">
              <h4>Legal</h4>
              <a>Política de privacidad</a>
              <a>Términos de uso</a>
              <a>Cookies</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 {{ data?.name || 'Corporativo Blog' }}. Todos los derechos reservados.</p>
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

    .preview-blog {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      min-height: 100%;
      color: #0f172a;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Header */
    .header {
      background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
      padding: 1.2rem 0;
      box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
      position: sticky;
      top: 0;
      z-index: 100;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="blog-header-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23blog-header-pattern)"/></svg>');
        opacity: 0.3;
      }
    }

    .header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      font-size: 1.3rem;
      color: white;
      letter-spacing: -0.02em;
    }

    .logo img {
      width: 36px;
      height: 36px;
    }

    .nav {
      display: flex;
      gap: 2rem;
    }

    .nav a {
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: -0.01em;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }

    .nav a:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    .search-icon {
      cursor: pointer;
    }
    
    .search-icon img {
      width: 24px;
      height: 24px;
      opacity: 0.6;
    }
    
    /* Featured */
    .featured {
      padding: 80px 20px;
      background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #81d4fa 100%);
      color: #0f172a;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
          radial-gradient(circle at 20% 80%, rgba(55, 65, 81, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(75, 85, 99, 0.2) 0%, transparent 50%);
        pointer-events: none;
        animation: float 6s ease-in-out infinite;
      }
    }

    .featured .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .badge {
      background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(6, 182, 212, 0.2));
      color: #0ea5e9;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 1rem;
      border: 1px solid rgba(14, 165, 233, 0.3);
    }

    .featured h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      line-height: 1.3;
      font-weight: 800;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .featured p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.9;
      color: #06b6d4;
      font-weight: 500;
    }

    .meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .meta img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 2px solid #0ea5e9;
    }

    .meta strong {
      display: block;
      margin-bottom: 0.2rem;
      color: #0f172a;
      font-weight: 700;
    }

    .meta span {
      font-size: 0.9rem;
      opacity: 0.8;
      color: #06b6d4;
    }

    .read-more {
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
      }

      &:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 12px 30px rgba(14, 165, 233, 0.4);

        &::before {
          left: 100%;
        }
      }
    }

    .featured-image {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(14, 165, 233, 0.3);
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="featured-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="2" fill="rgba(14,165,233,0.1)"/><path d="M15 15 L25 15 L25 25 L15 25 Z" stroke="rgba(14,165,233,0.05)" stroke-width="1" fill="none"/></pattern></defs><rect width="100" height="100" fill="url(%23featured-pattern)"/></svg>');
        opacity: 0.4;
        pointer-events: none;
      }
    }

    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }
    
    /* Search Section */
    .search-section {
      padding: 60px 20px;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    }

    .search-bar {
      display: flex;
      max-width: 600px;
      margin: 0 auto 2rem;
      box-shadow: 0 8px 30px rgba(14, 165, 233, 0.15);
      border-radius: 12px;
      overflow: hidden;
    }

    .search-bar input {
      flex: 1;
      padding: 1rem 1.5rem;
      border: 2px solid rgba(14, 165, 233, 0.2);
      border-right: none;
      border-radius: 12px 0 0 12px;
      font-size: 1rem;
      outline: none;
      background: white;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;

      &:focus {
        border-color: #0ea5e9;
        box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
      }
    }

    .search-bar button {
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 0 12px 12px 0;
      font-weight: 700;
      cursor: pointer;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(14, 165, 233, 0.4);

        &::before {
          left: 100%;
        }
      }
    }
    
    .categories {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .categories span {
      color: #06b6d4;
      font-weight: 600;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }

    .categories a {
      color: #0ea5e9;
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      border: 1px solid rgba(14, 165, 233, 0.2);
    }

    .categories a:hover {
      background: rgba(14, 165, 233, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
    }
    
    /* Posts */
    .posts {
      padding: 80px 20px;
      background: white;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      font-size: 2rem;
      color: #0f172a;
      font-weight: 800;
      letter-spacing: -0.02em;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .view-all {
      color: #0ea5e9;
      text-decoration: none;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      border: 1px solid rgba(14, 165, 233, 0.2);

      &:hover {
        background: rgba(14, 165, 233, 0.1);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
      }
    }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
    }

    .post-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.95));
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      backdrop-filter: blur(10px);
      position: relative;
      border: 1px solid rgba(14, 165, 233, 0.1);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #0ea5e9, #06b6d4, #10b981);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        border-color: rgba(99, 102, 241, 0.3);

        &::before {
          opacity: 1;
        }
      }
    }
    
    .post-image {
      height: 220px;
      position: relative;
      overflow: hidden;
    }
    
    .post-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    
    .post-card:hover .post-image img {
      transform: scale(1.05);
    }
    
    .category-tag {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
    }

    .post-content {
      padding: 1.5rem;
    }

    .post-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.85rem;
      color: #06b6d4;
      font-weight: 500;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }

    .post-content h3 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
      color: #0f172a;
      line-height: 1.4;
      font-weight: 700;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }

    .post-content > p {
      color: #06b6d4;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .post-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid rgba(14, 165, 233, 0.2);
    }

    .author {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .author img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid #0ea5e9;
    }

    .author span {
      font-size: 0.9rem;
      color: #0f172a;
      font-weight: 600;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }

    .read-link {
      color: #0ea5e9;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      text-decoration: none;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      border: 1px solid rgba(14, 165, 233, 0.2);

      &:hover {
        background: rgba(14, 165, 233, 0.1);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
      }
    }
    
    /* Newsletter */
    .newsletter {
      padding: 80px 20px;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    }

    .newsletter-content {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    .newsletter-content img {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
      filter: drop-shadow(0 4px 12px rgba(14, 165, 233, 0.3));
    }

    .newsletter h2 {
      font-size: 2rem;
      margin-bottom: 0.8rem;
      color: #0f172a;
      font-weight: 800;
      letter-spacing: -0.02em;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .newsletter p {
      color: #06b6d4;
      margin-bottom: 2rem;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .newsletter-form {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 8px 30px rgba(14, 165, 233, 0.15);
      border-radius: 12px;
      overflow: hidden;
    }

    .newsletter-form input {
      flex: 1;
      padding: 1rem 1.5rem;
      border: 2px solid rgba(14, 165, 233, 0.2);
      border-right: none;
      border-radius: 12px 0 0 12px;
      font-size: 1rem;
      outline: none;
      background: white;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;

      &:focus {
        border-color: #0ea5e9;
        box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
      }
    }

    .newsletter-form button {
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 0 12px 12px 0;
      font-weight: 700;
      cursor: pointer;
      white-space: nowrap;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(14, 165, 233, 0.4);

        &::before {
          left: 100%;
        }
      }
    }
    
    .privacy {
      font-size: 0.85rem;
      color: #718096;
    }
    
    /* Categories Section */
    .categories-section {
      padding: 80px 20px;
      background: white;
    }

    .categories-section h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
      color: #0f172a;
      font-weight: 800;
      letter-spacing: -0.02em;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .category-card {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.95));
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(14, 165, 233, 0.1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #0ea5e9, #06b6d4, #10b981);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        border-color: rgba(99, 102, 241, 0.3);

        &::before {
          opacity: 1;
        }
      }
    }

    .category-card img {
      width: 56px;
      height: 56px;
      margin-bottom: 1rem;
      filter: drop-shadow(0 4px 12px rgba(14, 165, 233, 0.3));
    }

    .category-card h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #0f172a;
      font-weight: 700;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }

    .category-card p {
      color: #06b6d4;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    /* Trending */
    .trending {
      padding: 80px 20px;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    }

    .trending h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
      color: #0f172a;
      font-weight: 800;
      letter-spacing: -0.02em;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .trending-grid {
      max-width: 800px;
      margin: 0 auto;
      display: grid;
      gap: 1.5rem;
    }

    .trending-item {
      display: flex;
      gap: 1.5rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.95));
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(14, 165, 233, 0.15);
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(14, 165, 233, 0.1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #0ea5e9, #06b6d4, #10b981);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        transform: translateX(12px) scale(1.02);
        border-color: rgba(99, 102, 241, 0.3);

        &::before {
          opacity: 1;
        }
      }
    }

    .number {
      font-size: 2rem;
      font-weight: bold;
      color: #0ea5e9;
      min-width: 50px;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .trending-content h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #0f172a;
      font-weight: 700;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }

    .trending-content p {
      color: #06b6d4;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    /* Footer */
    .footer {
      background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #10b981 100%);
      color: white;
      padding: 80px 20px 20px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footer-pattern" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><path d="M20 20 L30 20 L30 30 L20 30 Z" stroke="rgba(255,255,255,0.05)" stroke-width="1" fill="none"/></pattern></defs><rect width="100" height="100" fill="url(%23footer-pattern)"/></svg>');
        opacity: 0.3;
        pointer-events: none;
      }
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 3rem;
      margin-bottom: 2rem;
      position: relative;
      z-index: 1;
    }

    .footer-col h4 {
      margin-bottom: 1.5rem;
      color: white;
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .footer-col p {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .footer-col a {
      display: block;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      margin: 0.5rem 0;
      cursor: pointer;
      font-weight: 500;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      transition: all 0.3s ease;
      padding: 0.25rem 0;
      border-radius: 4px;

      &:hover {
        color: white;
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(4px);
      }
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
      transition: all 0.3s ease;
      filter: brightness(0) invert(1);

      &:hover {
        opacity: 1;
        transform: translateY(-2px) scale(1.1);
        filter: brightness(0) invert(1) drop-shadow(0 4px 12px rgba(255, 255, 255, 0.3));
      }
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.8);
      position: relative;
      z-index: 1;
      font-weight: 500;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .featured .container {
        grid-template-columns: 1fr;
      }

      .featured h1 {
        font-size: 2rem;
      }

      .nav {
        display: none;
      }

      .posts-grid {
        grid-template-columns: 1fr;
      }

      .newsletter-form {
        flex-direction: column;
      }

      .search-bar {
        flex-direction: column;
      }

      .search-bar input,
      .search-bar button {
        border-radius: 12px;
        border: 2px solid rgba(14, 165, 233, 0.2);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      33% {
        transform: translateY(-10px) rotate(1deg);
      }
      66% {
        transform: translateY(5px) rotate(-1deg);
      }
    }
  `]
})
export class PreviewBlogCorporativoComponent {
  @Input() data?: TemplateMeta;

  categories = ['Tecnología', 'Negocios', 'Marketing', 'Innovación', 'Tendencias'];

  posts = [
    {
      title: 'Estrategias de Marketing Digital para 2024',
      excerpt: 'Descubre las últimas tendencias y estrategias que están revolucionando el marketing digital este año.',
      category: 'Marketing',
      date: '12 Mar 2024',
      readTime: '8 min',
      author: 'María González',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      title: 'Inteligencia Artificial en los Negocios',
      excerpt: 'Cómo la IA está transformando la forma en que las empresas operan y toman decisiones estratégicas.',
      category: 'Tecnología',
      date: '10 Mar 2024',
      readTime: '6 min',
      author: 'Carlos Ruiz',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      title: 'Liderazgo en la Era Digital',
      excerpt: 'Las habilidades esenciales que todo líder necesita desarrollar para tener éxito en el entorno digital.',
      category: 'Negocios',
      date: '8 Mar 2024',
      readTime: '7 min',
      author: 'Ana Martínez',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop'
    },
    {
      title: 'Innovación y Transformación Digital',
      excerpt: 'Casos de éxito de empresas que han logrado innovar y transformarse digitalmente con resultados extraordinarios.',
      category: 'Innovación',
      date: '5 Mar 2024',
      readTime: '9 min',
      author: 'Pedro López',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    },
    {
      title: 'Ciberseguridad: Protege tu Empresa',
      excerpt: 'Guía completa sobre las mejores prácticas de ciberseguridad para proteger tu negocio de amenazas digitales.',
      category: 'Tecnología',
      date: '3 Mar 2024',
      readTime: '10 min',
      author: 'Laura Fernández',
      authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop'
    },
    {
      title: 'El Futuro del Trabajo Remoto',
      excerpt: 'Análisis profundo sobre cómo el trabajo remoto está redefiniendo la cultura empresarial y la productividad.',
      category: 'Tendencias',
      date: '1 Mar 2024',
      readTime: '5 min',
      author: 'Roberto Sánchez',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop'
    }
  ];

  categoryCards = [
    {
      name: 'Tecnología',
      icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920277.png',
      count: 45
    },
    {
      name: 'Negocios',
      icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
      count: 38
    },
    {
      name: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/3179/3179068.png',
      count: 32
    },
    {
      name: 'Innovación',
      icon: 'https://cdn-icons-png.flaticon.com/128/2618/2618494.png',
      count: 28
    }
  ];

  trendingTopics = [
    {
      title: 'Cómo implementar IA en tu estrategia empresarial',
      views: '12.5k',
      comments: 89
    },
    {
      title: 'Las 10 herramientas de productividad más usadas',
      views: '10.2k',
      comments: 67
    },
    {
      title: 'Guía completa de SEO para principiantes',
      views: '9.8k',
      comments: 54
    },
    {
      title: 'Marketing de contenidos: Estrategias efectivas',
      views: '8.4k',
      comments: 42
    },
    {
      title: 'Cómo crear una estrategia de marketing digital efectiva',
      views: '7.9k',
      comments: 36
    }
  ];
}