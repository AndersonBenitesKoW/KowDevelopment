import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, NewsArticle } from '../../services/news';

@Component({
  selector: 'app-news-negocios',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './news-negocios.html',
  styleUrls: ['./news-negocios.scss']
})
export class NewsNegocios implements OnInit {
  articles: NewsArticle[] = [];
  loading = true;
  error = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadBusinessNews();
  }

  loadBusinessNews() {
    this.loading = true;
    this.newsService.getBusinessNews().subscribe({
      next: (response) => {
        this.articles = response.articles.slice(0, 12);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las noticias. Verifica tu conexión a internet.';
        this.loading = false;
        console.error('Error loading business news:', err);
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
