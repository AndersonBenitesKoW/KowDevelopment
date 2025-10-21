import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private baseUrl = 'http://localhost:8080/api/ventas'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) { }

  getAll(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.baseUrl);
  }

  getById(id: string): Observable<Venta> {
    return this.http.get<Venta>(`${this.baseUrl}/${id}`);
  }

  create(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.baseUrl, venta);
  }

  update(id: string, venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.baseUrl}/${id}`, venta);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}