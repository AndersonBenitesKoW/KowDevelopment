// src/app/demo/demo.component.ts
import { Component, OnInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TEMPLATES, TemplateMeta } from '../templates/templates.data';
import { PreviewRegistryService } from '../templates/preview/preview-registry.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="demo-container">
      <header class="demo-header">
        <button class="back-btn" (click)="goBack()">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Volver
        </button>
        <h1>{{ template?.name }}</h1>
        <div class="demo-info">
          <span class="category">{{ template?.category }}</span>
        </div>
      </header>

      <div class="demo-content">
        <!-- Iframe if previewUrl exists -->
        <iframe 
          *ngIf="safePreviewUrl" 
          [src]="safePreviewUrl" 
          class="demo-iframe"
          frameborder="0"
          allowfullscreen>
        </iframe>

        <!-- Dynamic component if no previewUrl -->
        <div *ngIf="!safePreviewUrl" class="demo-dynamic">
          <ng-template #demoHost></ng-template>
        </div>
      </div>

      <footer class="demo-footer">
        <div class="footer-content">
          <div class="template-details">
            <h3>{{ template?.name }}</h3>
            <p>{{ template?.desc }}</p>
            <div class="features-list">
              <span class="feature-badge" *ngFor="let feature of template?.features">
                {{ feature }}
              </span>
            </div>
          </div>
          <div class="footer-actions">
            <button class="btn-action primary" (click)="useTemplate()">
              Usar esta plantilla
            </button>
            <button class="btn-action secondary" (click)="goBack()">
              Explorar más plantillas
            </button>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {
  @ViewChild('demoHost', { read: ViewContainerRef }) demoHost!: ViewContainerRef;

  template: TemplateMeta | null = null;
  safePreviewUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private previewRegistry: PreviewRegistryService
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    
    if (slug) {
      this.template = TEMPLATES.find(t => t.slug === slug) || null;
      
      if (this.template) {
        if (this.template.previewUrl) {
          // Use iframe for external preview
          this.safePreviewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.template.previewUrl);
        } else {
          // Load component dynamically
          setTimeout(async () => {
            if (this.demoHost && this.template) {
              await this.previewRegistry.createIn(this.demoHost, this.template.type, this.template);
            }
          }, 0);
        }
      } else {
        // Template not found, redirect to home
        this.router.navigate(['/']);
      }
    }
  }

  ngOnDestroy() {
    if (this.demoHost) {
      this.demoHost.clear();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  useTemplate() {
    this.router.navigate(['/cotizar']);
  }
}
