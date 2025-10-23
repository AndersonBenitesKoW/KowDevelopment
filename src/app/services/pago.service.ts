import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago.model';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private baseUrl = 'https://backkowdevelopment.onrender.com/api/pagos'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pago[]> {
    return this.http.get<Pago[]>(this.baseUrl);
  }

  getById(id: string): Observable<Pago> {
    return this.http.get<Pago>(`${this.baseUrl}/${id}`);
  }

  create(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(this.baseUrl, pago);
  }

  update(id: string, pago: Pago): Observable<Pago> {
    return this.http.put<Pago>(`${this.baseUrl}/${id}`, pago);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}