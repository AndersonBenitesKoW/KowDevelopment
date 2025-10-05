import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  // año para el footer
  readonly year = signal(new Date().getFullYear());

  // Estados UI
  dropdownOpen = false;  // submenú "Noticias"
  menuOpen = false;      // panel móvil (hamburguesa)

  toggleDropdown(event: Event) {
    event.stopImmediatePropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMenu(event: Event) {
    event.stopImmediatePropagation();
    this.menuOpen = !this.menuOpen;

    // Al abrir el menú móvil, aseguramos que "Noticias" empiece cerrado
    if (this.menuOpen) this.dropdownOpen = false;
  }

  // Cierra menú y dropdown (úsalo en links y backdrop)
  closeAll() {
    this.menuOpen = false;
    this.dropdownOpen = false;
  }

  // Cierre al hacer click fuera
  constructor(private router: Router) {
    document.addEventListener('click', () => this.closeAll());
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.closeAll();
      }
    });
  }
}
