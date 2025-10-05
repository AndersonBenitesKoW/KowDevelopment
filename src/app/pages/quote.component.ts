import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private fb: FormBuilder) {
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

    alert('Solicitud enviada. ¡Gracias!');
    this.form.reset();
    this.submitted = false;
  }
}
