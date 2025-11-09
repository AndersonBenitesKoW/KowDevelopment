import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private baseUrl = 'https://backkowdevelopment.onrender.com/api/clientes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  getById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
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