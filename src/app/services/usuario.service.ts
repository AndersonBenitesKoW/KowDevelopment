import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // URL de tu backend Spring Boot

  constructor(private http: HttpClient) {}

  /* ====================== AUTENTICACIÓN ====================== */

  // Login (usando "contraseña" o "password")
  loginUsuario(email: string, contraseña: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, { email, contraseña });
  }

  /* ====================== CRUD USUARIOS ====================== */

  // Registrar usuario con valores por defecto
  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    const usuarioConDefaults = {
      ...usuario,
      active: true,
      rol: 'cliente'
    };
    return this.http.post<Usuario>(this.apiUrl, usuarioConDefaults);
  }

  // Listar todos
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Obtener usuario por ID
  getUsuarioById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  // Crear usuario
  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // Actualizar usuario (PUT)
  updateUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  // Actualizar parcialmente (PATCH)
  patchUsuario(id: string, partialData: any): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/${id}`, partialData);
  }

  // Eliminar usuario
  deleteUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /* ====================== UTILIDADES ====================== */

  // Verificar si un email ya está registrado
  verificarEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/verificar-email?email=${email}`);
  }
}
