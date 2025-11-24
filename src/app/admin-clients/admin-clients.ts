import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Cliente, Direccion } from '../models/cliente.model';

@Component({
  selector: 'app-admin-clients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-clients.html',
  styleUrl: './admin-clients.scss'
})
export class AdminClientsComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteForm: FormGroup;
  editingCliente: Cliente | null = null;
  showForm = false;
  notificationMessage: string = '';
  notificationType: 'success' | 'error' | '' = '';
  searchTerm: string = '';

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder
  ) {
    this.clienteForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      apellidos: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      empresa: [''],
      documentoIdentidad: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern(/^\d{9}$/)],
      pais: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      ciudad: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      distrito: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]],
      linea: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadClientes();
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.notificationMessage = message;
    this.notificationType = type;
    setTimeout(() => {
      this.notificationMessage = '';
      this.notificationType = '';
    }, 5000); // Hide after 5 seconds
  }

  searchCliente() {
    console.log('Searching for:', this.searchTerm);
    if (this.searchTerm.trim()) {
      this.clienteService.getByDocumento(this.searchTerm.trim()).subscribe({
        next: (response: any) => {
          console.log('Search response:', response);
          if (Array.isArray(response)) {
            this.clientes = response;
          } else if (response.content && Array.isArray(response.content)) {
            this.clientes = response.content;
          } else if (response.data && Array.isArray(response.data)) {
            this.clientes = response.data;
          } else if (response && typeof response === 'object' && response.id) {
            // Single cliente object
            this.clientes = [response];
          } else {
            this.clientes = [];
            console.warn('Unexpected search response format:', response);
          }
          console.log('Search results set to:', this.clientes);
        },
        error: (error) => {
          console.error('Error buscando cliente:', error);
          this.showNotification('Error buscando cliente: ' + error.message, 'error');
        }
      });
    } else {
      this.loadClientes();
    }
  }

  loadClientes() {
    console.log('Loading clientes...');
    this.clienteService.getAll().subscribe({
      next: (response: any) => {
        console.log('Response received:', response);
        if (Array.isArray(response)) {
          this.clientes = response;
        } else if (response.content && Array.isArray(response.content)) {
          this.clientes = response.content;
        } else if (response.data && Array.isArray(response.data)) {
          this.clientes = response.data;
        } else {
          this.clientes = [];
          console.warn('Unexpected response format:', response);
        }
        console.log('Clientes set to:', this.clientes);
      },
      error: (error) => {
        console.error('Error cargando clientes:', error);
        this.showNotification('Error cargando clientes: ' + error.message, 'error');
      }
    });
  }

  toggleForm(cliente?: Cliente) {
    this.showForm = !this.showForm;
    if (cliente) {
      this.editingCliente = cliente;
      this.clienteForm.patchValue({
        ...cliente,
        ...cliente.direccion
      });
    } else {
      this.editingCliente = null;
      this.clienteForm.reset();
    }
  }

  onSubmit() {
    console.log('Form valid:', this.clienteForm.valid);
    console.log('Form value:', this.clienteForm.value);
    console.log('Form errors:', this.clienteForm.errors);
    if (this.clienteForm.valid) {
      const clienteData: Cliente = {
        nombres: this.clienteForm.value.nombres,
        apellidos: this.clienteForm.value.apellidos,
        empresa: this.clienteForm.value.empresa,
        documentoIdentidad: this.clienteForm.value.documentoIdentidad,
        email: this.clienteForm.value.email,
        telefono: this.clienteForm.value.telefono,
        createdAt: new Date(),
        direccion: {
          pais: this.clienteForm.value.pais,
          ciudad: this.clienteForm.value.ciudad,
          distrito: this.clienteForm.value.distrito,
          linea: this.clienteForm.value.linea
        }
      };
      console.log('Cliente data to send:', clienteData);

      if (this.editingCliente) {
        const updateData = {
          ...clienteData,
          updatedAt: new Date()
        };
        this.clienteService.update(this.editingCliente.id!, updateData).subscribe({
          next: () => {
            this.showNotification('Cliente actualizado exitosamente', 'success');
            this.loadClientes();
            this.toggleForm();
          },
          error: (error) => {
            console.error('Error actualizando cliente:', error);
            this.showNotification('Error actualizando cliente: ' + error.message, 'error');
          }
        });
      } else {
        this.clienteService.create(clienteData).subscribe({
          next: (response) => {
            this.showNotification('Cliente creado exitosamente', 'success');
            this.loadClientes();
            this.toggleForm();
          },
          error: (error) => {
            console.error('Error creando cliente:', error);
            this.showNotification('Error creando cliente: ' + error.message, 'error');
          }
        });
      }
    }
  }

  deleteCliente(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
      this.clienteService.delete(id).subscribe({
        next: () => {
          this.showNotification('Cliente eliminado exitosamente', 'success');
          this.loadClientes();
        },
        error: (error) => {
          console.error('Error eliminando cliente:', error);
          this.showNotification('Error eliminando cliente: ' + error.message, 'error');
        }
      });
    }
  }
}