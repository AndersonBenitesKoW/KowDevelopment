import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteForm: FormGroup;
  editingCliente: Cliente | null = null;
  loading = false;
  showForm = false;

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder
  ) {
    this.clienteForm = this.fb.group({
      apellidos: ['', Validators.required],
      nombres: ['', Validators.required],
      empresa: [''],
      documentoIdentidad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      pais: [''],
      ciudad: [''],
      distrito: [''],
      linea: ['']
    });
  }

  ngOnInit() {
    this.loadClientes();
  }

  loadClientes() {
    this.loading = true;
    this.clienteService.getAll().subscribe({
      next: (data) => {
        this.clientes = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.clienteForm.invalid) return;

    this.loading = true;
    const formValue = this.clienteForm.value;

    const clienteBase = {
      apellidos: formValue.apellidos,
      nombres: formValue.nombres,
      empresa: formValue.empresa,
      documentoIdentidad: formValue.documentoIdentidad,
      email: formValue.email,
      telefono: formValue.telefono,
      direccion: {
        pais: formValue.pais,
        ciudad: formValue.ciudad,
        distrito: formValue.distrito,
        linea: formValue.linea
      }
    };

    if (this.editingCliente) {
      const cliente: Cliente = { ...clienteBase, id: this.editingCliente.id, createdAt: this.editingCliente.createdAt };
      this.clienteService.update(cliente.id!, cliente).subscribe({
        next: () => {
          this.loadClientes();
          this.resetForm();
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Error al guardar cliente:', error);
          this.loading = false;
        }
      });
    } else {
      this.clienteService.create(clienteBase).subscribe({
        next: (response: { id: string }) => {
          this.loadClientes();
          this.resetForm();
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Error al guardar cliente:', error);
          this.loading = false;
        }
      });
    }
  }

  editCliente(cliente: Cliente) {
    this.editingCliente = cliente;
    this.clienteForm.patchValue({
      apellidos: cliente.apellidos,
      nombres: cliente.nombres,
      empresa: cliente.empresa,
      documentoIdentidad: cliente.documentoIdentidad,
      email: cliente.email,
      telefono: cliente.telefono,
      pais: cliente.direccion.pais,
      ciudad: cliente.direccion.ciudad,
      distrito: cliente.direccion.distrito,
      linea: cliente.direccion.linea
    });
    this.showForm = true;
  }

  deleteCliente(id: string) {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.loading = true;
      this.clienteService.delete(id).subscribe({
        next: () => {
          this.loadClientes();
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al eliminar cliente:', error);
          this.loading = false;
        }
      });
    }
  }

  resetForm() {
    this.clienteForm.reset();
    this.editingCliente = null;
    this.showForm = false;
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }
}