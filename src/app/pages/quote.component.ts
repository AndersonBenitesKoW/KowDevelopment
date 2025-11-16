import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente, Direccion } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { UsuarioService } from '../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombres:     ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      apellidos:   ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      empresa:     [''],
      documentoIdentidad: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email:       ['', [Validators.required, Validators.email]],
      telefono:    ['', Validators.pattern(/^\d{9}$/)],
      pais:        ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      ciudad:      ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      distrito:    ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      linea:       ['', Validators.required]
    });
  }

  ngOnInit() {
    // Verificar si viene de registro exitoso y pre-llenar email
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.form.patchValue({
          email: params['email']
        });
      }
    });
  }

  send() {
    this.submitted = true;
    if (this.form.invalid) return;

    const email = this.form.value.email;

    // Verificar si el email existe en usuarios
    this.usuarioService.verificarEmail(email).subscribe({
      next: (existe) => {
        if (existe) {
          // Proceder con el registro de cliente
          const cliente: Cliente = {
            nombres: this.form.value.nombres,
            apellidos: this.form.value.apellidos,
            empresa: this.form.value.empresa,
            documentoIdentidad: this.form.value.documentoIdentidad,
            email: this.form.value.email,
            telefono: this.form.value.telefono,
            createdAt: new Date(),
            direccion: {
              pais: this.form.value.pais,
              ciudad: this.form.value.ciudad,
              distrito: this.form.value.distrito,
              linea: this.form.value.linea
            }
          };

          this.clienteService.create(cliente).subscribe({
            next: (response) => {
              alert('Cliente registrado exitosamente');
              console.log('Cliente registrado:', response);
              this.router.navigate(['/pedido'], { queryParams: { clienteId: response.id } });
            },
            error: (error) => {
              console.error('Error al registrar cliente:', error);
              alert('Error al registrar cliente. Inténtelo de nuevo.');
            }
          });
        } else {
          // Redirigir al register con estado de retorno
          alert('Debes registrarte como usuario primero.');
          this.router.navigate(['/register'], {
            queryParams: {
              returnUrl: '/quote',
              email: email
            }
          });
        }
      },
      error: (error) => {
        console.error('Error al verificar email:', error);
        alert('Error al verificar email. Inténtelo de nuevo.');
      }
    });
  }
}
