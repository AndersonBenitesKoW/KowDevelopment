import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';
import { VentaService } from '../../services/venta.service';
import { Pedido } from '../../models/pedido.model';
import { Venta, VentaDetalle } from '../../models/venta.model';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale.html',
  styleUrl: './sale.scss'
})
export class SaleComponent implements OnInit {
  pedidoId: string | null = null;
  pedido: Pedido | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pedidoService: PedidoService,
    private ventaService: VentaService,
    
  ) {}

  ngOnInit() {
    this.pedidoId = this.route.snapshot.queryParamMap.get('pedidoId');
    if (this.pedidoId) {
      this.loadPedido();
    }
  }

  loadPedido() {
    if (!this.pedidoId) return;
    this.pedidoService.getById(this.pedidoId).subscribe({
      next: (pedido) => {
        this.pedido = pedido;
      },
      error: (error) => {
        console.error('Error cargando pedido:', error);
        alert('Error cargando pedido');
      }
    });
  }

  procesarPago() {
    if (!this.pedido) return;

    // Crear la venta basada en el pedido
    const venta: Venta = {
      id: '', // El backend debería generar el ID
      clienteId: this.pedido.clienteId,
      createdAt: new Date(),
      numero: '', // El backend debería generar el número
      pedidoId: this.pedido.id,
      serie: '001', // Valor por defecto, ajustar según necesidad
      tipoComprobante: 'Factura', // Valor por defecto, ajustar según necesidad
      totales: this.pedido.totales,
      detalles: this.pedido.items.map(item => ({
        id: item.id,
        cantidad: item.cantidad,
        categoriaId: item.categoriaId,
        concepto: item.concepto,
        precioUnitario: item.precioUnitario,
        descuento: item.descuento,
        impuestos: item.impuestos,
        total: item.total
      }))
    };

    this.ventaService.create(venta).subscribe({
      next: (ventaCreada) => {
        alert('Venta creada exitosamente');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creando venta:', error);
        alert('Error creando venta');
      }
    });
  }
}
