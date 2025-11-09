import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Aquí deberías verificar si el usuario está autenticado y tiene rol de administrador
    // Por ahora, solo verificamos si existe un usuario en localStorage con rol administrador
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');

    if (user && user.rol === 'administrador') {
      return true;
    }

    // Si no es administrador, redirigir al login
    this.router.navigate(['/login']);
    return false;
  }
}