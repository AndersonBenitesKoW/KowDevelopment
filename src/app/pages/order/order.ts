import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';
import { Pedido, PedidoItem, Totales } from '../../models/pedido.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class OrderComponent implements OnInit {
  clienteId: string | null = null;
  servicios = [
    { id: '1', nombre: 'Sitios web inteligentes', descripcion: 'Sitios web con IA integrada', precio: 500 },
    { id: '2', nombre: 'Chatbots', descripcion: 'Asistentes virtuales para atención al cliente', precio: 300 },
    { id: '3', nombre: 'CRM automatizado', descripcion: 'Sistema de gestión de relaciones con clientes', precio: 400 },
    { id: '4', nombre: 'Marketing con IA', descripcion: 'Campañas de marketing potenciadas por IA', precio: 250 },
    { id: '5', nombre: 'Analytics predictivo', descripcion: 'Análisis de datos para predicciones', precio: 350 },
    { id: '6', nombre: 'Soporte experto', descripcion: 'Consultoría y soporte técnico especializado', precio: 200 }
  ];
  carrito: PedidoItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.clienteId = this.route.snapshot.queryParamMap.get('clienteId');
  }

  agregarAlCarrito(servicio: any) {
    const item: PedidoItem = {
      id: servicio.id,
      cantidad: 1,
      categoriaId: 'servicios',
      concepto: servicio.nombre,
      precioUnitario: servicio.precio,
      descuento: 0,
      impuestos: 0,
      total: servicio.precio
    };
    this.carrito.push(item);
  }

  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  get totalCarrito() {
    return this.carrito.reduce((sum, item) => sum + item.total, 0);
  }

  procederAlPago() {
    if (!this.clienteId || this.carrito.length === 0) return;

    const totales: Totales = {
      descuento: 0,
      impuestos: 0,
      subtotal: this.totalCarrito,
      total: this.totalCarrito
    };

    const pedido: any = {
      clienteId: this.clienteId!,
      createdAt: new Date(),
      createdBy: 'cliente',
      estado: 'pendiente',
      moneda: 'USD',
      totales,
      updatedAt: new Date(),
      items: this.carrito
    };

    this.pedidoService.create(pedido).subscribe({
      next: (pedidoCreado) => {
        alert('Pedido creado exitosamente');
        this.router.navigate(['/venta'], { queryParams: { pedidoId: pedidoCreado.id } });
      },
      error: (error) => {
        console.error('Error creando pedido:', error);
        alert('Error creando pedido');
      }
    });
  }
}
