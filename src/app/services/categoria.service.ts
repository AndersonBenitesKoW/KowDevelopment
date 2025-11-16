import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseUrl = 'https://backkowdevelopment.onrender.com/api/categorias'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl);
  }

  getById(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${id}`);
  }

  create(categoria: Omit<Categoria, 'id' | 'createdAt'>): Observable<string> {
    return this.http.post(this.baseUrl, categoria, { responseType: 'text' });
  }

  update(id: string, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.baseUrl}/${id}`, categoria);
  }

  updatePartial(id: string, updates: Partial<Categoria>): Observable<Categoria> {
    return this.http.patch<Categoria>(`${this.baseUrl}/${id}`, updates);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}