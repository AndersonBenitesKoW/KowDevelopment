import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, NewsArticle } from '../../services/news';

@Component({
  selector: 'app-news-bitcoin',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './news-bitcoin.html',
  styleUrls: ['./news-bitcoin.scss']
})
export class NewsBitcoin implements OnInit {
  articles: NewsArticle[] = [];
  loading = true;
  error = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadBitcoinNews();
  }

  loadBitcoinNews() {
    this.loading = true;
    this.newsService.getBitcoinNews().subscribe({
      next: (response) => {
        this.articles = response.articles.slice(0, 12);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las noticias. Verifica tu conexión a internet.';
        this.loading = false;
        console.error('Error loading bitcoin news:', err);
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
