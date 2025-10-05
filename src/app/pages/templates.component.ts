import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


type TemplateItem = { id:number; name:string; descr:string; img:string; tags:string[] };

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  q = '';
  templates: TemplateItem[] = [
    { id:1, name:'Restaurante', descr:'Menús y reservas', img:'assets/tpl/restaurant.jpg', tags:['restaurante','food'] },
    { id:2, name:'Hotel', descr:'Habitaciones y booking', img:'assets/tpl/hotel.jpg', tags:['hotel','booking'] },
    // ...
  ];

  get filtered(): TemplateItem[] {
    const q = this.q.toLowerCase().trim();
    if (!q) return this.templates;
    return this.templates.filter(t =>
      (t.name + ' ' + t.descr + ' ' + t.tags.join(' ')).toLowerCase().includes(q)
    );
  }

  trackById = (_: number, t: TemplateItem) => t.id;
}
