import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;
  showRegisterButton = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, contraseña } = this.loginForm.value;

      // Primero verificar si el usuario existe
      this.usuarioService.verificarEmail(email).subscribe({
        next: (existe) => {
          if (existe) {
            // Usuario existe, proceder con login
            this.usuarioService.loginUsuario(email, contraseña).subscribe({
              next: (usuario) => {
                if (usuario) {
                  // Guardar usuario en localStorage
                  localStorage.setItem('currentUser', JSON.stringify(usuario));
                  alert('Login exitoso');
                  console.log('Login exitoso:', usuario);
                  this.router.navigate(['/']);
                } else {
                  alert('Credenciales inválidas');
                  console.error('Credenciales inválidas');
                }
              },
              error: (error) => {
                console.error('Error en login:', error);
                alert('Error en login. Verifique sus credenciales.');
              }
            });
          } else {
            // Usuario no existe, mostrar botón de registro
            this.showRegisterButton = true;
            alert('Usuario no encontrado. ¿Desea registrarse?');
            console.log('Usuario no encontrado:', email);
          }
        },
        error: (error) => {
          console.error('Error al verificar email:', error);
          alert('Error al verificar usuario. Intente nuevamente.');
        }
      });
    }
  }
}