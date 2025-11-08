import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TEMPLATES, TemplateMeta } from '../templates/templates.data';
import { PreviewRegistryService } from '../templates/preview/preview-registry.service';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements AfterViewInit {
  @ViewChild('previewHost', { read: ViewContainerRef }) previewHost!: ViewContainerRef;
  
  q = '';
  selectedCategory = 'Todas';
  showPreview = false;
  selectedTemplate: TemplateMeta | null = null;
  
  // Usar el array centralizado de templates
  templates: TemplateMeta[] = TEMPLATES;

  constructor(private previewRegistry: PreviewRegistryService) {}

  ngAfterViewInit() {
    // ViewContainerRef estará listo después de la vista
  }

  get filtered(): TemplateMeta[] {
    let filtered = this.templates;
    
    // Filtrar por categoría
    if (this.selectedCategory !== 'Todas') {
      filtered = filtered.filter(t => t.category === this.selectedCategory);
    }
    
    // Filtrar por búsqueda
    const q = this.q.toLowerCase().trim();
    if (q) {
      filtered = filtered.filter(t =>
        (t.name + ' ' + t.desc + ' ' + t.features.join(' ')).toLowerCase().includes(q)
      );
    }
    
    return filtered;
  }

  trackById = (_: number, t: TemplateMeta) => t.id;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  async openPreview(template: TemplateMeta) {
    this.selectedTemplate = template;
    this.showPreview = true;
    
    // Esperar al siguiente ciclo para que el ViewContainerRef esté disponible
    setTimeout(async () => {
      if (this.previewHost && template.type) {
        await this.previewRegistry.createIn(this.previewHost, template.type, template);
      }
    }, 0);
  }

  closePreview() {
    this.showPreview = false;
    this.selectedTemplate = null;
    if (this.previewHost) {
      this.previewHost.clear();
    }
  }

  useTemplate(template: TemplateMeta) {
    // Aquí puedes implementar la lógica para usar la plantilla
    console.log('Usando plantilla:', template.name);
    // Por ejemplo, redirigir a un formulario de configuración
    // o abrir un modal de configuración
  }
}
