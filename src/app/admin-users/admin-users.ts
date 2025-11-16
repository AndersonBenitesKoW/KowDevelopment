import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.scss'
})
export class AdminUsersComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioForm: FormGroup;
  editingUsuario: Usuario | null = null;
  showForm = false;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) {
    this.usuarioForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      apellidos: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      contraseña: [''],
      rol: ['cliente', Validators.required],
      active: [true]
    });
  }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    console.log('AdminUsersComponent: Iniciando carga de usuarios');
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios) => {
        console.log('AdminUsersComponent: Usuarios cargados exitosamente:', usuarios);
        this.usuarios = usuarios;
      },
      error: (error) => {
        console.error('AdminUsersComponent: Error cargando usuarios:', error);
        alert('Error cargando usuarios: ' + error.message);
      }
    });
  }

  toggleForm(usuario?: Usuario) {
    this.showForm = !this.showForm;
    if (usuario) {
      this.editingUsuario = usuario;
      this.usuarioForm.patchValue({
        ...usuario,
        contraseña: '' // No mostrar contraseña existente
      });
    } else {
      this.editingUsuario = null;
      this.usuarioForm.reset({ rol: 'cliente', active: true });
    }
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      const usuarioData = {
        ...this.usuarioForm.value,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      if (this.editingUsuario) {
         // Para actualización, incluir contraseña solo si se cambió
         if (!usuarioData.contraseña) {
           delete usuarioData.contraseña;
         }
         this.usuarioService.updateUsuario(this.editingUsuario.id!, usuarioData).subscribe({
           next: () => {
             alert('Usuario actualizado exitosamente');
             this.loadUsuarios();
             this.toggleForm();
           },
           error: (error: any) => {
             console.error('Error actualizando usuario:', error);
             alert('Error actualizando usuario: ' + error.message);
           }
         });
       } else {
         // Para creación, requerir contraseña
         if (!usuarioData.contraseña) {
           alert('La contraseña es requerida para crear un nuevo usuario');
           return;
         }
         this.usuarioService.createUsuario(usuarioData).subscribe({
           next: () => {
             alert('Usuario creado exitosamente');
             this.loadUsuarios();
             this.toggleForm();
           },
           error: (error: any) => {
             console.error('Error creando usuario:', error);
             alert('Error creando usuario: ' + error.message);
           }
         });
       }
    }
  }

  toggleUserStatus(usuario: Usuario) {
     const updates = {
       active: !usuario.active,
       updatedAt: new Date()
     };

     this.usuarioService.patchUsuario(usuario.id!, updates).subscribe({
       next: () => {
         alert(`Usuario ${updates.active ? 'activado' : 'desactivado'} exitosamente`);
         this.loadUsuarios();
       },
       error: (error: any) => {
         console.error('Error actualizando estado del usuario:', error);
         alert('Error actualizando estado del usuario: ' + error.message);
       }
     });
   }

  deleteUsuario(id: string) {
     if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
       this.usuarioService.deleteUsuario(id).subscribe({
         next: () => {
           alert('Usuario eliminado exitosamente');
           this.loadUsuarios();
         },
         error: (error: any) => {
           console.error('Error eliminando usuario:', error);
           alert('Error eliminando usuario: ' + error.message);
         }
       });
     }
   }
}