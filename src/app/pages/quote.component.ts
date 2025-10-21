import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.form = this.fb.group({
      nombre:     ['', Validators.required],
      email:      ['', [Validators.required, Validators.email]],
      empresa:    [''],
      telefono:   [''],
      tipo:       ['', Validators.required],
      detalles:   ['', Validators.required],
      presupuesto: [''],
      timeline:   ['']
    });
  }

  send() {
    this.submitted = true;
    if (this.form.invalid) return;

    this.loading = true;
    const cliente: Cliente = {
      id: '',
      apellidos: this.form.value.nombre.split(' ').slice(1).join(' ') || '',
      nombres: this.form.value.nombre.split(' ')[0],
      empresa: this.form.value.empresa,
      documentoIdentidad: '',
      email: this.form.value.email,
      telefono: this.form.value.telefono,
      createdAt: new Date(),
      direccion: {
        pais: '',
        ciudad: '',
        distrito: '',
        linea: ''
      }
    };

    this.clienteService.create(cliente).subscribe({
      next: (response) => {
        alert('Cliente registrado exitosamente. ¡Gracias!');
        this.form.reset();
        this.submitted = false;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al registrar cliente:', error);
        alert('Error al enviar la solicitud. Inténtalo de nuevo.');
        this.loading = false;
      }
    });
  }
}
