// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { TemplatesComponent } from './pages/templates.component';
import { PricingComponent } from './pages/pricing.component';
import { QuoteComponent } from './pages/quote.component';
import { ContactComponent } from './pages/contact.component';
import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register.component';
import { NewsComponent } from './pages/news.component';
import { NewsAiTecnologia } from './pages/news-ai-tecnologia/news-ai-tecnologia';
import { NewsBitcoin } from './pages/news-bitcoin/news-bitcoin';
import { NewsNegocios } from './pages/news-negocios/news-negocios';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Crea tu web | POLYLINE' },
  { path: 'plantillas', component: TemplatesComponent, title: 'Plantillas' },
  { path: 'precios', component: PricingComponent, title: 'Precios' },
  { path: 'cotizar', component: QuoteComponent, title: 'Cotizar' },
  { path: 'contacto', component: ContactComponent, title: 'Contacto' },
  { path: 'noticias', component: NewsComponent, title: 'Noticias | POLYLINE' },
  { path: 'noticias/ia-tecnologia', component: NewsAiTecnologia, title: 'IA y Tecnología | POLYLINE' },
  { path: 'noticias/bitcoin', component: NewsBitcoin, title: 'Bitcoin y Cripto | POLYLINE' },
  { path: 'noticias/negocios', component: NewsNegocios, title: 'Negocios y Economía | POLYLINE' },
  { path: 'login', component: LoginComponent, title: 'Iniciar Sesión | POLYLINE' },
  { path: 'register', component: RegisterComponent, title: 'Crear Cuenta | POLYLINE' },
  { 
    path: 'plantilla/:slug', 
    loadComponent: () => import('./demo/demo.component').then(m => m.DemoComponent),
    title: 'Demo | POLYLINE'
  },
  { path: '**', redirectTo: '' },
];
