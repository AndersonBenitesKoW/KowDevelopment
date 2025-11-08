// src/app/templates/preview/preview-registry.service.ts
import { Injectable, ViewContainerRef, ComponentRef, Type } from '@angular/core';
import { TemplateMeta } from '../templates.data';

@Injectable({
  providedIn: 'root'
})
export class PreviewRegistryService {
  private loaders: Record<string, () => Promise<Type<any>>> = {
    'ecommerce': () => import('./preview-ecommerce.component').then(m => m.PreviewEcommerceComponent),
    'landing': () => import('./preview-landing.component').then(m => m.PreviewLandingComponent),
    'portfolio': () => import('./preview-portfolio.component').then(m => m.PreviewPortfolioComponent),
    'blog': () => import('./preview-blog.component').then(m => m.PreviewBlogCorporativoComponent),
    'restaurant': () => import('./preview-restaurant.component').then(m => m.PreviewRestauranteComponent),
    'agency': () => import('./preview-agency.component').then(m => m.PreviewAgencyComponent)
  };

  async createIn(host: ViewContainerRef, type: string, data: TemplateMeta): Promise<ComponentRef<any> | null> {
    const loader = this.loaders[type];
    
    if (!loader) {
      console.warn(`No loader found for type: ${type}`);
      return null;
    }

    try {
      // Clear the host
      host.clear();
      
      // Load the component dynamically
      const componentType = await loader();
      
      // Create the component
      const componentRef = host.createComponent(componentType);
      
      // Set the data input
      componentRef.instance.data = data;
      
      // Detect changes
      componentRef.changeDetectorRef.detectChanges();
      
      return componentRef;
    } catch (error) {
      console.error(`Error loading preview component for type ${type}:`, error);
      return null;
    }
  }
}
