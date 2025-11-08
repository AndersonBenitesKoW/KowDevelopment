// src/app/templates/preview/preview-landing.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMeta } from '../templates.data';

@Component({
  selector: 'app-preview-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preview-landing">
      <header class="header">
        <div class="container">
          <div class="logo">{{ data?.name || 'Portfolio' }}</div>
          <nav class="nav">
            <a>Inicio</a>
            <a>Proyectos</a>
            <a>Sobre mí</a>
            <a>Contacto</a>
          </nav>
        </div>
      </header>
      
      <section class="intro">
        <div class="container">
          <div class="intro-content">
            <h1>Hola, Soy un Creativo</h1>
            <p class="tagline">Diseñador & Desarrollador</p>
            <p class="description">Creo experiencias digitales únicas y memorables que conectan marcas con sus audiencias</p>
            <button class="cta">Ver Proyectos</button>
          </div>
          <div class="intro-image">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop" alt="Workspace">
          </div>
        </div>
      </section>
      
      <section class="projects">
        <div class="container">
          <h2>Proyectos Destacados</h2>
          <div class="projects-grid">
            <div class="project-card" *ngFor="let project of projects">
              <div class="project-image">
                <img [src]="project.image" [alt]="project.title">
              </div>
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="about">
        <div class="container">
          <div class="about-content">
            <div class="about-image">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop" alt="Profile">
            </div>
            <div class="about-text">
              <h2>Sobre Mí</h2>
              <p>Soy un profesional apasionado por el diseño y la tecnología, con más de 5 años de experiencia creando soluciones digitales innovadoras.</p>
              <p>Mi enfoque combina creatividad, funcionalidad y las últimas tendencias del mercado para entregar proyectos excepcionales.</p>
              <div class="stats">
                <div class="stat">
                  <h3>50+</h3>
                  <p>Proyectos</p>
                </div>
                <div class="stat">
                  <h3>30+</h3>
                  <p>Clientes</p>
                </div>
                <div class="stat">
                  <h3>5+</h3>
                  <p>Años</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="skills">
        <div class="container">
          <h2>Habilidades</h2>
          <div class="skills-grid">
            <div class="skill-card" *ngFor="let skill of skills">
              <img [src]="skill.icon" [alt]="skill.name">
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.level }}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="testimonials">
        <div class="container">
          <h2>Testimonios</h2>
          <div class="testimonials-grid">
            <div class="testimonial" *ngFor="let testimonial of testimonials">
              <p class="quote">"{{ testimonial.text }}"</p>
              <div class="author">
                <img [src]="testimonial.avatar" [alt]="testimonial.name">
                <div>
                  <h4>{{ testimonial.name }}</h4>
                  <p>{{ testimonial.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="contact">
        <div class="container">
          <h2>Trabajemos Juntos</h2>
          <p>¿Tienes un proyecto en mente? Hablemos</p>
          <div class="contact-info">
            <div class="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email">
              <span>hello@portfolio.com</span>
            </div>
            <div class="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter">
              <span>@portfolio</span>
            </div>
            <div class="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="LinkedIn">
              <span>/portfolio</span>
            </div>
          </div>
          <button class="contact-btn">Enviar Mensaje</button>
        </div>
      </section>
      
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 {{ data?.name || 'Portfolio' }}. Todos los derechos reservados.</p>
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
    
    .preview-portfolio {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #fff;
      min-height: 100%;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Header */
    .header {
      padding: 1.5rem 0;
      background: #1a1a1a;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #fbbf24;
    }
    
    .nav {
      display: flex;
      gap: 2rem;
    }
    
    .nav a {
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav a:hover {
      color: #fbbf24;
    }
    
    /* Intro */
    .intro {
      padding: 80px 20px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
    
    .intro .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .intro h1 {
      font-size: 3.5rem;
      margin: 0 0 1rem;
      color: #1a1a1a;
    }
    
    .tagline {
      font-size: 1.8rem;
      color: #fbbf24;
      margin: 0 0 1rem;
      font-weight: 600;
    }
    
    .description {
      font-size: 1.1rem;
      color: #666;
      margin: 0 0 2rem;
      line-height: 1.6;
    }
    
    .cta {
      background: #1a1a1a;
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s;
    }
    
    .cta:hover {
      background: #fbbf24;
      color: #1a1a1a;
      transform: translateY(-2px);
    }
    
    .intro-image {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    }
    
    .intro-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    /* Projects */
    .projects {
      padding: 80px 20px;
      background: white;
    }
    
    .projects h2 {
      text-align: center;
      font-size: 2.5rem;
      margin: 0 0 3rem;
      color: #1a1a1a;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    
    .project-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: all 0.3s;
      cursor: pointer;
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }
    
    .project-image {
      height: 240px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-info {
      padding: 1.5rem;
    }
    
    .project-info h3 {
      margin: 0 0 0.5rem;
      color: #1a1a1a;
      font-size: 1.3rem;
    }
    
    .project-info p {
      margin: 0;
      color: #666;
      font-size: 0.95rem;
    }
    
    /* About */
    .about {
      padding: 80px 20px;
      background: #f8f9fa;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      align-items: center;
    }
    
    .about-image {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }
    
    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .about-text h2 {
      font-size: 2.5rem;
      margin: 0 0 1.5rem;
      color: #1a1a1a;
    }
    
    .about-text p {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .stat {
      text-align: center;
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .stat h3 {
      font-size: 2.5rem;
      color: #fbbf24;
      margin: 0 0 0.5rem;
    }
    
    .stat p {
      font-size: 1rem;
      color: #666;
      margin: 0;
    }
    
    /* Skills */
    .skills {
      padding: 80px 20px;
      background: white;
    }
    
    .skills h2 {
      text-align: center;
      font-size: 2.5rem;
      margin: 0 0 3rem;
      color: #1a1a1a;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
    
    .skill-card {
      text-align: center;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 12px;
      transition: all 0.3s;
    }
    
    .skill-card:hover {
      background: #e9ecef;
      transform: translateY(-5px);
    }
    
    .skill-card img {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
    }
    
    .skill-card h3 {
      font-size: 1.2rem;
      margin: 0 0 0.5rem;
      color: #1a1a1a;
    }
    
    .skill-card p {
      color: #666;
      font-size: 0.9rem;
      margin: 0;
    }
    
    /* Testimonials */
    .testimonials {
      padding: 80px 20px;
      background: #1a1a1a;
      color: white;
    }
    
    .testimonials h2 {
      text-align: center;
      font-size: 2.5rem;
      margin: 0 0 3rem;
      color: white;
    }
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .testimonial {
      background: #2a2a2a;
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #fbbf24;
    }
    
    .quote {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-style: italic;
      color: #e0e0e0;
    }
    
    .author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .author img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .author h4 {
      margin: 0 0 0.3rem;
      color: white;
      font-size: 1rem;
    }
    
    .author p {
      margin: 0;
      color: #999;
      font-size: 0.9rem;
    }
    
    /* Contact */
    .contact {
      padding: 80px 20px;
      text-align: center;
      background: white;
    }
    
    .contact h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem;
      color: #1a1a1a;
    }
    
    .contact > p {
      font-size: 1.2rem;
      margin: 0 0 2rem;
      color: #666;
    }
    
    .contact-info {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    
    .contact-item img {
      width: 32px;
      height: 32px;
    }
    
    .contact-item span {
      font-size: 1rem;
      color: #666;
    }
    
    .contact-btn {
      background: #fbbf24;
      color: #1a1a1a;
      border: none;
      padding: 1rem 2.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.3s;
    }
    
    .contact-btn:hover {
      background: #1a1a1a;
      color: white;
      transform: translateY(-2px);
    }
    
    /* Footer */
    .footer {
      background: #1a1a1a;
      color: white;
      padding: 2rem 0;
      text-align: center;
    }
    
    .footer p {
      margin: 0;
      color: #999;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .intro .container {
        grid-template-columns: 1fr;
      }
      
      .intro h1 {
        font-size: 2.5rem;
      }
      
      .nav {
        flex-wrap: wrap;
        gap: 1rem;
      }
      
      .about-content {
        grid-template-columns: 1fr;
      }
      
      .stats {
        grid-template-columns: 1fr;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .contact-info {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class PreviewLandingComponent {
  @Input() data?: TemplateMeta;

  projects = [
    {
      title: 'E-commerce Moderno',
      category: 'Diseño Web & Desarrollo',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      title: 'App Móvil Fitness',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
    },
    {
      title: 'Dashboard Analítico',
      category: 'Desarrollo Frontend',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Branding Corporativo',
      category: 'Diseño Gráfico',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
    },
    {
      title: 'Landing Page SaaS',
      category: 'Diseño Web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
    },
    {
      title: 'Sistema de Gestión',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop'
    }
  ];

  skills = [
    {
      name: 'Diseño UI/UX',
      level: 'Avanzado',
      icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055687.png'
    },
    {
      name: 'Frontend',
      level: 'Experto',
      icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png'
    },
    {
      name: 'Backend',
      level: 'Intermedio',
      icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920277.png'
    },
    {
      name: 'Mobile Apps',
      level: 'Avanzado',
      icon: 'https://cdn-icons-png.flaticon.com/128/2965/2965310.png'
    }
  ];

  testimonials = [
    {
      text: 'Excelente profesional. Entregó el proyecto a tiempo y superó nuestras expectativas. Totalmente recomendado.',
      name: 'María García',
      position: 'CEO, StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      text: 'Trabajar con él fue una experiencia increíble. Su atención al detalle y creatividad son excepcionales.',
      name: 'Carlos Rodríguez',
      position: 'Director, AgenciaCreativa',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      text: 'Profesional, responsable y con gran capacidad técnica. Los resultados hablan por sí solos.',
      name: 'Ana Martínez',
      position: 'Manager, TechCorp',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];
}