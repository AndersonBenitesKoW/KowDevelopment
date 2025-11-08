// src/app/templates/preview/preview-agency.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateMeta } from '../templates.data';

interface Servicio { title: string; desc: string; bullets: string[]; }
interface CasoExito { cliente: string; impacto: string; detalle: string; }
interface Miembro { nombre: string; rol: string; img: string; }

@Component({
  selector: 'app-preview-agency',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<header class="topbar">
  <div class="container row between center">
    <a class="brand row center">
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-label="LUMENIA logo" class="logo">
        <circle cx="32" cy="32" r="30" fill="none" stroke="#111" stroke-width="2"/>
        <path d="M22 14v32h20" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M46 18l-6 6" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
      </svg>
      <span class="brand__name">{{ data?.name || 'LUMENIA' }}</span>
    </a>
    <nav class="nav nav--desktop">
      <a href="#servicios">Servicios</a>
      <a href="#casos">Casos de éxito</a>
      <a href="#equipo">Equipo</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <a class="btn btn--primary nav--desktop" href="#contacto">Hablemos</a>
  </div>
</header>

<section class="hero">
  <div class="hero__bg"></div>
  <div class="container">
    <h1 class="hero__title">Hacemos crecer marcas con <u class="accent">ideas luminosas</u></h1>
    <p class="hero__lead">
      Somos <strong>{{ data?.name || 'LUMENIA' }}</strong>, agencia digital enfocada en estrategia, diseño y crecimiento. Construimos
      experiencias que convierten y campañas que escalan.
    </p>
    <div class="hero__cta">
      <a class="btn btn--primary" href="#contacto">Solicitar propuesta</a>
      <a class="btn btn--ghost" href="#casos">Ver casos de éxito →</a>
    </div>
    <ul class="hero__trust row wrap">
      <li>✔ Entregas en 2–4 semanas</li>
      <li>✔ KPI-driven</li>
      <li>✔ Soporte continuo</li>
    </ul>
  </div>
</section>

<section id="servicios" class="section section--gray">
  <div class="container">
    <header class="section__head">
      <h2>Portfolio de servicios</h2>
      <p class="muted">De punta a punta: desde el ADN de tu marca hasta performance.</p>
    </header>
    <div class="grid grid--cards-3">
      <article class="card" *ngFor="let s of servicios">
        <h3 class="card__title">{{ s.title }}</h3>
        <p class="muted">{{ s.desc }}</p>
        <ul class="bullets">
          <li *ngFor="let b of s.bullets">✔ {{ b }}</li>
        </ul>
        <button class="btn btn--ghost btn--block">Saber más</button>
      </article>
    </div>
  </div>
</section>

<section id="casos" class="section">
  <div class="container">
    <header class="section__head">
      <h2>Casos de éxito</h2>
      <p class="muted">Resultados medibles y aprendizajes replicables.</p>
    </header>
    <div class="grid grid--cards-3">
      <article class="card" *ngFor="let c of casosExito">
        <header class="row between center">
          <strong>{{ c.cliente }}</strong>
          <span class="badge">{{ c.impacto }}</span>
        </header>
        <p class="muted">{{ c.detalle }}</p>
      </article>
    </div>
  </div>
</section>

<section id="equipo" class="section section--gray">
  <div class="container">
    <header class="section__head">
      <h2>Equipo</h2>
      <p class="muted">Multidisciplinario: diseño, datos y crecimiento sostenible.</p>
    </header>
    <div class="grid grid--cards-3">
      <article class="card" *ngFor="let p of equipo">
        <div class="member">
          <img [src]="p.img" [alt]="p.nombre" class="member__avatar" />
          <div>
            <div class="member__name">{{ p.nombre }}</div>
            <div class="member__role">{{ p.rol }}</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="contacto" class="section">
  <div class="container container--narrow">
    <div class="contact">
      <h3 class="contact__title">¿Listo para iluminar tu proyecto?</h3>
      <form (submit)="onSubmit($event)" class="form">
        <label class="form__group">
          <span>Nombre</span>
          <input type="text" placeholder="Tu nombre" />
        </label>
        <label class="form__group">
          <span>Correo</span>
          <input type="email" [(ngModel)]="email" name="email" placeholder="tu@correo.com" />
        </label>
        <label class="form__group">
          <span>Mensaje</span>
          <textarea rows="4" placeholder="Cuéntanos sobre tu proyecto…"></textarea>
        </label>
        <button class="btn btn--primary" type="submit">Enviar</button>
      </form>
      <p class="muted small">Al enviar aceptas nuestra política de privacidad.</p>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container row between center wrap">
    <div class="row center gap">
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-label="LUMENIA logo" class="logo logo--sm">
        <circle cx="32" cy="32" r="30" fill="none" stroke="#111" stroke-width="2"/>
        <path d="M22 14v32h20" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M46 18l-6 6" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
      </svg>
      <span class="small">© {{ year }} {{ data?.name || 'LUMENIA' }} · Agencia Digital</span>
    </div>
    <div class="muted small">Hecho con ♥ para marcas que quieren brillar</div>
  </div>
</footer>
  `,
  styles: [`
// Paleta y tokens
$bg: #ffffff;
$ink: #111111;
$muted: #6b7280;
$line: #e5e7eb;
$surface: #f8fafc;
$primary: #111111;
$primary-ink: #ffffff;
$radius: 16px;
$radius-sm: 12px;
$shadow: 0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.06);

* { box-sizing: border-box; }
:host { display:block; background:$bg; color:$ink; }
img { max-width: 100%; display: block; }

.container { max-width: 1120px; margin: 0 auto; padding: 0 16px; }
.container--narrow { max-width: 720px; }
.row { display:flex; gap:12px; }
.row.center { align-items:center; }
.row.between { justify-content:space-between; }
.row.wrap { flex-wrap:wrap; }
.row.gap { gap:8px; }
.grid { display:grid; gap:16px; }
.grid--cards-3 { 
  grid-template-columns: 1fr; 
  @media(min-width:640px){ 
    grid-template-columns: repeat(2,1fr);
  } 
  @media(min-width:1024px){ 
    grid-template-columns: repeat(3,1fr);
  } 
}
.small { font-size: 12px; }
.muted { color:$muted; }

// Topbar
.topbar { 
  position: sticky; 
  top:0; 
  z-index: 40; 
  backdrop-filter: blur(6px); 
  background: rgba(255,255,255,.8); 
  border-bottom:1px solid $line; 
  height:64px; 
  display:flex; 
  align-items:center; 
}
.nav--desktop { 
  display:none; 
  @media(min-width:768px){ 
    display:inline-flex; 
    align-items:center; 
    gap:24px; 
  } 
}
.nav a { 
  color:inherit; 
  text-decoration:none; 
  opacity:.9; 
  cursor: pointer;
  &:hover{ 
    text-decoration:underline; 
  } 
}
.brand { 
  gap:12px; 
  text-decoration:none; 
  color:inherit; 
  cursor: pointer;
}
.brand__name { 
  font-weight:600; 
  letter-spacing:.02em; 
}
.logo { 
  width:32px; 
  height:32px; 
}
.logo--sm { 
  width:24px; 
  height:24px; 
}

// Botones
.btn { 
  display:inline-flex; 
  align-items:center; 
  justify-content:center; 
  padding:10px 16px; 
  border-radius:$radius-sm; 
  border:1px solid $line; 
  background:#fff; 
  cursor:pointer; 
  transition:.2s ease; 
  text-decoration:none; 
  color:inherit;
  &:hover { 
    background:#f9fafb; 
  }
}
.btn--primary { 
  background:$primary; 
  color:$primary-ink; 
  border-color:$primary; 
  &:hover{ 
    filter:brightness(.95); 
  } 
}
.btn--ghost { 
  background:transparent; 
}
.btn--block { 
  width:100%; 
}

// Hero
.hero { 
  position:relative; 
  padding: 96px 0 48px; 
  overflow:hidden; 
}
.hero__bg { 
  position:absolute; 
  inset:0; 
  pointer-events:none; 
  opacity:.7; 
  mask-image: linear-gradient(to bottom, black, transparent); 
}
.hero__bg:before { 
  content:""; 
  position:absolute; 
  left:50%; 
  transform:translateX(-50%); 
  top:-120px; 
  width:1200px; 
  height:1200px; 
  border-radius:50%; 
  filter: blur(90px); 
  background: radial-gradient( circle at 50% 50%, rgba(124,58,237,.15), rgba(255,255,255,0) 60% ); 
}
.hero__title { 
  font-size: clamp(32px, 5vw, 52px); 
  font-weight: 800; 
  line-height: 1.1; 
}
.hero__lead { 
  margin-top:16px; 
  font-size:18px; 
  max-width: 680px; 
}
.hero__cta { 
  margin-top:24px; 
  display:flex; 
  gap:12px; 
  flex-wrap:wrap; 
}
.hero__trust { 
  margin-top:24px; 
  color:$muted; 
  font-size:14px; 
  gap:24px;
  list-style: none;
  padding: 0;
}
.accent {
  text-decoration-color: rgba(124,58,237,.3);
  text-decoration-thickness: 3px;
}

// Sections
.section { 
  padding: 64px 0; 
}
.section--gray { 
  background:$surface; 
}
.section__head { 
  margin-bottom: 20px; 
  h2{ 
    font-size: clamp(22px,3vw,30px); 
    font-weight:700; 
    margin:0 0 6px; 
  } 
}

// Card
.card { 
  border:1px solid $line; 
  border-radius:$radius; 
  padding:20px; 
  box-shadow: $shadow; 
  background:#fff; 
}
.card__title { 
  font-size:18px; 
  font-weight:600; 
  margin-bottom:8px; 
}
.bullets { 
  margin:12px 0 0; 
  padding-left: 0; 
  list-style:none; 
  li{ 
    margin:6px 0; 
  } 
}
.badge { 
  font-size:12px; 
  padding:4px 8px; 
  border-radius:999px; 
  background:#f3f4f6; 
  border:1px solid $line; 
}

// Equipo
.member { 
  display:flex; 
  gap:12px; 
  align-items:center; 
}
.member__avatar { 
  width:48px; 
  height:48px; 
  border-radius:999px; 
  object-fit:cover; 
}
.member__name { 
  font-weight:600; 
}
.member__role { 
  font-size: 14px; 
  color:$muted; 
}

// Contacto
.contact { 
  border:1px solid $line; 
  border-radius:$radius; 
  padding:20px; 
  box-shadow:$shadow; 
  background:#fff; 
}
.contact__title {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
}
.form { 
  display:grid; 
  gap:12px; 
}
.form__group { 
  display:grid; 
  gap:6px; 
  font-size:14px; 
  span{ 
    color:$ink; 
    font-weight: 500;
  } 
  input, textarea { 
    border:1px solid $line; 
    border-radius:$radius-sm; 
    padding:10px 12px; 
    outline:none; 
    font: inherit; 
    &:focus{ 
      border-color:$ink; 
      box-shadow:0 0 0 3px rgba(17,17,17,.08); 
    } 
  } 
}

// Footer
.footer { 
  border-top:1px solid $line; 
  padding: 24px 0; 
}
  `]
})
export class PreviewAgencyComponent {
  @Input() data?: TemplateMeta;

  year = new Date().getFullYear();
  email = '';

  servicios: Servicio[] = [
    { 
      title: 'Estrategia & Branding', 
      desc: 'Naming, identidad visual, tono de marca y playbooks de comunicación.', 
      bullets: ['Arquitectura de marca', 'Guías de estilo', 'Social kits'] 
    },
    { 
      title: 'Paid Media & Growth', 
      desc: 'Campañas multicanal con foco en CAC, ROAS y experimentación.', 
      bullets: ['Meta/Google Ads', 'Funnels', 'A/B testing'] 
    },
  ];

  casosExito: CasoExito[] = [
    { 
      cliente: 'Cafe Boreal', 
      impacto: '+142% ventas online', 
      detalle: 'Rediseño web + campañas de adquisición y retención.' 
    },
    { 
      cliente: 'FitZone', 
      impacto: '-38% CAC', 
      detalle: 'Optimización de funnels y creatividades de alto rendimiento.' 
    },
    { 
      cliente: 'Luna Deco', 
      impacto: '+3.2x ROAS', 
      detalle: 'Segmentación por intención y catálogo dinámico.' 
    },
  ];

  equipo: Miembro[] = [
    { 
      nombre: 'María Serrano', 
      rol: 'Directora de Estrategia', 
      img: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=400&auto=format&fit=crop' 
    },
    { 
      nombre: 'Daniel Rivas', 
      rol: 'Líder UX/UI', 
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' 
    },
    { 
      nombre: 'Lucía Paredes', 
      rol: 'Performance & Data', 
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' 
    },
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    alert('¡Gracias! Te contactaremos en breve. Email: ' + this.email);
    this.email = '';
  }
}
