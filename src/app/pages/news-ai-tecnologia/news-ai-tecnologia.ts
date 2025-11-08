import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, NewsArticle } from '../../services/news';

@Component({
  selector: 'app-news-ai-tecnologia',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './news-ai-tecnologia.html',
  styleUrls: ['./news-ai-tecnologia.scss']
})
export class NewsAiTecnologia implements OnInit {
  articles: NewsArticle[] = [];
  loading = true;
  error = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadTechNews();
  }

  loadTechNews() {
    this.loading = true;
    this.newsService.getTechNews().subscribe({
      next: (response) => {
        this.articles = response.articles.slice(0, 12); // Limitar a 12 artículos
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las noticias. Verifica tu conexión a internet.';
        this.loading = false;
        console.error('Error loading tech news:', err);
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
