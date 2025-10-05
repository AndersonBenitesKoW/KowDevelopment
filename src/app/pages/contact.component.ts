import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form!: FormGroup;            // ← declaras la propiedad
  sent = false;

  constructor(private fb: FormBuilder) {
    // ← inicializas dentro del constructor
    this.form = this.fb.group({
      nombre:   ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      asunto:   [''],
      mensaje:  ['', Validators.required]
    });
  }

  submit() {
    this.sent = true;
    if (this.form.invalid) return;

    alert('Mensaje enviado. ¡Gracias!');
    this.form.reset();
    this.sent = false;
  }
}

