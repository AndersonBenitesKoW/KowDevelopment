export interface Pago {
  id: string;
  createdAt: Date;
  estado: string;
  metodo: string;
  moneda: string;
  monto: number;
  pedidoId: string;
  proveedorId: string;
  updatedAt: Date;
}