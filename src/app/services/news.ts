// src/app/services/news.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface NewsArticle {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
}
export interface NewsResponse { articles: NewsArticle[]; }

@Injectable({ providedIn: 'root' })
export class NewsService {
  private baseUrl = '/.netlify/functions/rss';
  constructor(private http: HttpClient) {}

  private toResponse(category: string): Observable<NewsResponse> {
    return this.http.get<NewsArticle[]>(`${this.baseUrl}?category=${category}`)
      .pipe(map(list => ({ articles: list })));
  }

  getTechNews(): Observable<NewsResponse>    { return this.toResponse('tech'); }
  getBitcoinNews(): Observable<NewsResponse> { return this.toResponse('bitcoin'); }
  getBusinessNews(): Observable<NewsResponse>{ return this.toResponse('business'); }
}
