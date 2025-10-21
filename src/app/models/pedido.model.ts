export interface Totales {
  descuento: number;
  impuestos: number;
  subtotal: number;
  total: number;
}

export interface PedidoItem {
  id: string;
  cantidad: number;
  categoriaId: string;
  concepto: string;
  precioUnitario: number;
  descuento: number;
  impuestos: number;
  total: number;
}

export interface Pedido {
  id: string;
  clienteId: string;
  createdAt: Date;
  createdBy: string;
  estado: string;
  moneda: string;
  totales: Totales;
  updatedAt: Date;
  items: PedidoItem[];
}