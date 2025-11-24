import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private baseUrl = 'https://backkowdevelopment.onrender.com/api/clientes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  getByDocumento(documentoIdentidad: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?documentoIdentidad=${documentoIdentidad}`);
  }

  // si tu back devuelve { id: string } al crear:
  create(cliente: Omit<Cliente, 'id' | 'createdAt'>): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.baseUrl, cliente);
  }

  update(id: string, cliente: Partial<Cliente>): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, cliente);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }



  
}