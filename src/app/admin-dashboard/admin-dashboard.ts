import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { VentaService } from '../services/venta.service';
import { Usuario } from '../models/usuario.model';
import { Venta, VentaDetalle } from '../models/venta.model';

interface ProductoStats {
  concepto: string;
  totalVendido: number;
  ingresosTotales: number;
  cantidadVentas: number;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboardComponent implements OnInit {
  usuarios: Usuario[] = [];
  ventas: Venta[] = [];
  totalUsuarios = 0;
  totalVentas = 0;
  totalIngresos = 0;
  filterForm: FormGroup;
  filteredUsuarios: Usuario[] = [];
  filteredVentas: Venta[] = [];
  topProductos: ProductoStats[] = [];
  isLoading = true;



  constructor(
    private usuarioService: UsuarioService,
    private ventaService: VentaService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      fechaInicio: [''],
      fechaFin: [''],
      rol: ['']
    });
  }

  ngOnInit() {
    this.loadData();
    this.filterForm.valueChanges.subscribe(() => this.applyFilters());
  }

  loadData() {
    this.isLoading = true;

    // Use Promise.all or similar to wait for both requests
    Promise.all([
      this.usuarioService.getUsuarios().toPromise(),
      this.ventaService.getAll().toPromise()
    ]).then(([usuarios, ventas]) => {
      // Handle usuarios
      this.usuarios = usuarios || [];
      this.totalUsuarios = this.usuarios.length;
      this.filteredUsuarios = [...this.usuarios];

      // Handle ventas
      this.ventas = ventas || [];
      this.totalVentas = this.ventas.length;
      this.totalIngresos = this.ventas.reduce((sum, venta) => sum + (venta.totales?.total || 0), 0);
      this.filteredVentas = [...this.ventas];
      this.calcularTopProductos();

      // Apply initial filters
      this.applyFilters();

      this.isLoading = false;
    }).catch((error) => {
      console.error('Error cargando datos:', error);
      this.usuarios = [];
      this.ventas = [];
      this.totalUsuarios = 0;
      this.totalVentas = 0;
      this.totalIngresos = 0;
      this.filteredUsuarios = [];
      this.filteredVentas = [];
      this.topProductos = [];
      this.isLoading = false;
    });
  }

  applyFilters() {
    const { fechaInicio, fechaFin, rol } = this.filterForm.value;
    console.log('Applying filters:', { fechaInicio, fechaFin, rol });

    this.filteredUsuarios = this.usuarios.filter(user => {
      const matchesRol = !rol || user.rol === rol;
      console.log(`User ${user.nombres} ${user.apellidos}: rol=${user.rol}, matchesRol=${matchesRol}`);
      return matchesRol;
    });

    console.log(`Filtered users: ${this.filteredUsuarios.length} of ${this.usuarios.length}`);

    this.filteredVentas = this.ventas.filter(venta => {
      const fecha = new Date(venta.createdAt);
      const matchesFechaInicio = !fechaInicio || fecha >= new Date(fechaInicio);
      const matchesFechaFin = !fechaFin || fecha <= new Date(fechaFin);
      return matchesFechaInicio && matchesFechaFin;
    });
  }

  resetFilters() {
    this.filterForm.reset();
  }

  calcularTopProductos() {
    const productoMap = new Map<string, ProductoStats>();

    this.ventas.forEach(venta => {
      if (venta.detalles && Array.isArray(venta.detalles)) {
        venta.detalles.forEach(detalle => {
          if (detalle && detalle.concepto) {
            const existing = productoMap.get(detalle.concepto);
            if (existing) {
              existing.totalVendido += detalle.cantidad || 0;
              existing.ingresosTotales += detalle.total || 0;
              existing.cantidadVentas += 1;
            } else {
              productoMap.set(detalle.concepto, {
                concepto: detalle.concepto,
                totalVendido: detalle.cantidad || 0,
                ingresosTotales: detalle.total || 0,
                cantidadVentas: 1
              });
            }
          }
        });
      }
    });

    this.topProductos = Array.from(productoMap.values())
      .sort((a, b) => b.ingresosTotales - a.ingresosTotales)
      .slice(0, 10); // Top 10 productos

  }

  getBarHeight(ingresos: number): number {
    if (this.topProductos.length === 0) return 10;
    const maxIngresos = Math.max(...this.topProductos.slice(0, 5).map(p => p.ingresosTotales));
    return maxIngresos > 0 ? (ingresos / maxIngresos) * 100 : 10;
  }

  viewProductDetails(producto: ProductoStats) {
    alert(`Detalles del producto: ${producto.concepto}\nIngresos Totales: S/ ${producto.ingresosTotales}\nCantidad Vendida: ${producto.totalVendido}\nNúmero de Ventas: ${producto.cantidadVentas}`);
  }

  viewAllProducts() {
    // Could open a modal or navigate to a detailed products page
    alert(`Total de productos únicos: ${this.topProductos.length}\nTop producto: ${this.topProductos[0]?.concepto || 'N/A'} con S/ ${this.topProductos[0]?.ingresosTotales || 0}`);
  }

  viewUserDetails(usuario: Usuario) {
    // Implementar modal o navegación a detalles
    alert(`Detalles de usuario: ${usuario.nombres} ${usuario.apellidos}\nEmail: ${usuario.email}\nRol: ${usuario.rol}`);
  }

  viewSaleDetails(venta: Venta) {
    // Implementar modal o navegación a detalles
    alert(`Detalles de venta: ${venta.numero}\nTotal: S/ ${venta.totales.total}\nFecha: ${venta.createdAt}`);
  }
}