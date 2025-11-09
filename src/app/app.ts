import { Component, signal, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  readonly year = signal(new Date().getFullYear());

  // Estados UI
  dropdownOpen = false;   // submenú "Noticias"
  crudsOpen = false;      // submenú "Cruds"
  menuOpen = false;       // panel móvil (hamburguesa)

  // Método para verificar si el usuario es administrador
  isAdmin(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      return user && user.rol === 'administrador';
    }
    return false;
  }

  // Método para verificar si el usuario está logueado
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      console.log('isLoggedIn check:', user !== null, 'user:', user);
      return user !== null;
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    console.log('Logout initiated');
    if (typeof window !== 'undefined' && window.localStorage) {
      const userBefore = localStorage.getItem('currentUser');
      console.log('User before logout:', userBefore);
      localStorage.removeItem('currentUser');
      const userAfter = localStorage.getItem('currentUser');
      console.log('User after logout:', userAfter);
    }
    console.log('Navigating to home page');
    this.router.navigate(['/']);
  }

  toggleDropdown(event: Event) {
    console.log('toggleDropdown called');
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleCruds(event: Event) {
    console.log('toggleCruds called');
    event.stopPropagation();
    this.crudsOpen = !this.crudsOpen;
  }

  toggleMenu(event: Event) {
    console.log('toggleMenu called');
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) this.dropdownOpen = false; // "Noticias" inicia cerrado
  }

  closeAll() {
    this.menuOpen = false;
    this.dropdownOpen = false;
    this.crudsOpen = false;
  }

  // Cierra al navegar para que el panel no quede abierto
  constructor(private router: Router) {
    console.log('AppComponent constructor called');
  }
  ngOnInit() {
    console.log('AppComponent ngOnInit called');
    this.router.events.subscribe((e) => {
      console.log('Router event:', e);
      if (e instanceof NavigationStart) {
        console.log('NavigationStart detected, closing menu');
        this.closeAll();
      }
    });
  }

  // Cierra si haces clic fuera del menú/hamburguesa; ignora clics dentro
  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    const t = ev.target as HTMLElement;
    if (t.closest('.nav') || t.closest('.hamburger')) return; // clic dentro => no cerrar
    this.closeAll();
  }

  // WhatsApp Widget Toggle
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      const toggle = document.getElementById('whatsapp-toggle');
      const popup = document.getElementById('whatsapp-popup');

      if (toggle && popup) {
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          toggle.classList.toggle('active');
          popup.classList.toggle('active');
        });

        // Cerrar popup al hacer clic fuera
        document.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('.whatsapp-widget')) {
            toggle.classList.remove('active');
            popup.classList.remove('active');
          }
        });
      }
    }
  }
}
