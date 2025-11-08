// src/app/templates/preview/preview-generic.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMeta } from '../templates.data';

@Component({
  selector: 'app-preview-generic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preview-generic">
      <header class="header">
        <div class="logo">{{ data?.name }}</div>
        <nav class="nav">
          <a>Inicio</a>
          <a>Servicios</a>
          <a>Acerca</a>
          <a>Contacto</a>
        </nav>
      </header>
      
      <section class="hero">
        <div class="hero-overlay">
          <h1>{{ data?.name }}</h1>
          <p>{{ data?.desc }}</p>
          <button class="cta">Más Información</button>
        </div>
      </section>
      
      <section class="content">
        <h2>Nuestros Servicios</h2>
        <div class="services-grid">
          <div class="service-card" *ngFor="let feature of data?.features">
            <div class="service-icon">●</div>
            <h3>{{ feature }}</h3>
            <p>Ofrecemos soluciones profesionales adaptadas a tus necesidades</p>
          </div>
        </div>
      </section>
      
      <section class="info">
        <div class="info-content">
          <h2>Acerca de Nosotros</h2>
          <p>Somos una empresa comprometida con la excelencia y la satisfacción del cliente.</p>
          <p>Nuestro equipo de profesionales está listo para ayudarte a alcanzar tus objetivos.</p>
        </div>
        <div class="info-image"></div>
      </section>
      
      <section class="cta-section">
        <h2>¿Listo para Comenzar?</h2>
        <p>Contáctanos hoy y descubre cómo podemos ayudarte</p>
        <button class="cta-btn">Contactar Ahora</button>
      </section>
    </div>
  `,
  styles: [`
    .preview-generic {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      min-height: 100%;
      color: #0f172a;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
      color: white;
      box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="header-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23header-pattern)"/></svg>');
        opacity: 0.3;
      }
    }

    .logo {
      font-weight: 800;
      font-size: 1.3rem;
      letter-spacing: -0.02em;
      position: relative;
      z-index: 1;
    }

    .nav {
      display: flex;
      gap: 1.5rem;
      position: relative;
      z-index: 1;
    }

    .nav a {
      color: white;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      letter-spacing: -0.01em;
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }

    .nav a:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .hero {
      background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #81d4fa 100%);
      color: #0f172a;
      padding: 5rem 2rem;
      text-align: center;
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

    .hero-overlay {
      position: relative;
      z-index: 1;
    }

    .hero h1 {
      font-size: 3rem;
      margin: 0 0 1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero p {
      font-size: 1.3rem;
      margin: 0 0 2rem;
      opacity: 0.9;
      color: #06b6d4;
      font-weight: 500;
    }

    .cta {
      background: linear-gradient(135deg, #0ea5e9, #06b6d4);
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

    .content {
      padding: 4rem 2rem;
      background: white;
    }

    .content h2 {
      text-align: center;
      font-size: 2.5rem;
      margin: 0 0 3rem;
      color: #0f172a;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .service-card {
      padding: 2rem;
      text-align: center;
      border: 1px solid rgba(14, 165, 233, 0.1);
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.95));
      backdrop-filter: blur(10px);
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

    .service-icon {
      font-size: 3rem;
      color: #0ea5e9;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
    }

    .service-card:hover .service-icon {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 0 20px rgba(14, 165, 233, 0.3));
    }

    .service-card h3 {
      margin: 1rem 0 0.5rem;
      color: #0f172a;
      font-weight: 700;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
    }

    .service-card p {
      color: #06b6d4;
      line-height: 1.6;
      font-weight: 500;
    }

    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      align-items: center;
    }

    .info-content h2 {
      font-size: 2.5rem;
      margin: 0 0 1.5rem;
      color: #0f172a;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .info-content p {
      font-size: 1.1rem;
      color: #06b6d4;
      line-height: 1.8;
      margin: 0 0 1rem;
      font-weight: 500;
    }

    .info-image {
      background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
      border-radius: 20px;
      min-height: 300px;
      box-shadow: 0 20px 60px rgba(14, 165, 233, 0.3);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="image-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="2" fill="rgba(255,255,255,0.1)"/><path d="M15 15 L25 15 L25 25 L15 25 Z" stroke="rgba(255,255,255,0.05)" stroke-width="1" fill="none"/></pattern></defs><rect width="100" height="100" fill="url(%23image-pattern)"/></svg>');
        opacity: 0.4;
      }
    }

    .cta-section {
      padding: 4rem 2rem;
      text-align: center;
      background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #10b981 100%);
      color: white;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><path d="M20 20 L30 20 L30 30 L20 30 Z" stroke="rgba(255,255,255,0.05)" stroke-width="1" fill="none"/></pattern></defs><rect width="100" height="100" fill="url(%23cta-pattern)"/></svg>');
        opacity: 0.3;
      }
    }

    .cta-section h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      position: relative;
      z-index: 1;
    }

    .cta-section p {
      font-size: 1.2rem;
      margin: 0 0 2rem;
      opacity: 0.9;
      font-weight: 500;
      position: relative;
      z-index: 1;
    }

    .cta-btn {
      background: white;
      color: #0ea5e9;
      border: none;
      padding: 1rem 3rem;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      font-size: 1.1rem;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
      position: relative;
      z-index: 1;

      &:hover {
        background: #f0f9ff;
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(255, 255, 255, 0.4);
      }
    }

    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        gap: 1rem;
      }

      .nav {
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .info {
        grid-template-columns: 1fr;
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
export class PreviewGenericComponent {
  @Input() data?: TemplateMeta;
}
