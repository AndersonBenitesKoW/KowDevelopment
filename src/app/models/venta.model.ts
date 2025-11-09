import { Totales } from './pedido.model';

export interface VentaDetalle {
  id: string;
  cantidad: number;
  categoriaId: string;
  concepto: string;
  precioUnitario: number;
  descuento: number;
  impuestos: number;
  total: number;
}

export interface Venta {
  id: string;
  clienteId: string;
  createdAt: Date;
  numero: string;
  pedidoId: string;
  serie: string;
  tipoComprobante: string;
  totales: Totales;
  detalles: VentaDetalle[];
}