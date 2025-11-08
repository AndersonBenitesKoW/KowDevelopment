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
  menuOpen = false;       // panel móvil (hamburguesa)

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) this.dropdownOpen = false; // "Noticias" inicia cerrado
  }

  closeAll() {
    this.menuOpen = false;
    this.dropdownOpen = false;
  }

  // Cierra al navegar para que el panel no quede abierto
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) this.closeAll();
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
