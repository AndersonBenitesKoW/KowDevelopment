import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-categories.html',
  styleUrl: './admin-categories.scss'
})
export class AdminCategoriesComponent implements OnInit {
  categorias: Categoria[] = [];
  categoriaForm: FormGroup;
  editingCategoria: Categoria | null = null;
  showForm = false;

  constructor(
    private categoriaService: CategoriaService,
    private fb: FormBuilder
  ) {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      slug: ['', Validators.required],
      activo: [true]
    });
  }

  ngOnInit() {
    this.loadCategorias();
  }

  loadCategorias() {
    this.categoriaService.getAll().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (error) => {
        console.error('Error cargando categorías:', error);
        alert('Error cargando categorías');
      }
    });
  }

  toggleForm(categoria?: Categoria) {
    this.showForm = !this.showForm;
    if (categoria) {
      this.editingCategoria = categoria;
      this.categoriaForm.patchValue(categoria);
    } else {
      this.editingCategoria = null;
      this.categoriaForm.reset({ activo: true });
    }
  }

  onSubmit() {
    if (this.categoriaForm.valid) {
      const categoriaData = {
        ...this.categoriaForm.value,
        createdAt: new Date()
      };

      if (this.editingCategoria) {
        this.categoriaService.update(this.editingCategoria.id, categoriaData).subscribe({
          next: () => {
            alert('Categoría actualizada exitosamente');
            this.loadCategorias();
            this.toggleForm();
          },
          error: (error) => {
            console.error('Error actualizando categoría:', error);
            alert('Error actualizando categoría');
          }
        });
      } else {
        this.categoriaService.create(categoriaData).subscribe({
          next: () => {
            alert('Categoría creada exitosamente');
            this.loadCategorias();
            this.toggleForm();
          },
          error: (error) => {
            console.error('Error creando categoría:', error);
            alert('Error creando categoría');
          }
        });
      }
    }
  }

  deleteCategoria(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
      this.categoriaService.delete(id).subscribe({
        next: () => {
          alert('Categoría eliminada exitosamente');
          this.loadCategorias();
        },
        error: (error) => {
          console.error('Error eliminando categoría:', error);
          alert('Error eliminando categoría');
        }
      });
    }
  }

  generateSlug() {
    const nombre = this.categoriaForm.get('nombre')?.value;
    if (nombre) {
      const slug = nombre.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      this.categoriaForm.patchValue({ slug });
    }
  }
}