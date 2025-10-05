import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('presentationVideo') videoRef!: ElementRef<HTMLVideoElement>;
  
  // Video state
  isPlaying = false;
  isMuted = false;
  currentTime = 0;
  duration = 0;
  progress = 0;
  volume = 100;
  benefits = [
    { title: 'Rápido', desc: 'Lanza tu sitio web en tiempo récord con nuestra interfaz amigable.', icon: '⚡' },
    { title: 'Personalizable', desc: 'Adapta cada detalle a tu gusto con opciones flexibles y sencillas.', icon: '🎨' },
    { title: 'Sin Código', desc: 'Crea sin necesidad de conocimientos técnicos, solo tu creatividad.', icon: '�' }
  ];

  processSteps = [
    { 
      title: 'Elige tu plantilla', 
      desc: 'Selecciona entre nuestros diseños profesionales o comienza desde cero.', 
      icon: '💬' 
    },
    { 
      title: 'Personaliza tu diseño', 
      desc: 'Ajusta colores, fuentes, imágenes y contenido con nuestro editor visual.', 
      icon: '⚡' 
    },
    { 
      title: 'Añade tu contenido', 
      desc: 'Agrega textos, imágenes, videos y todo lo que necesites para tu sitio.', 
      icon: '🌐' 
    },
    { 
      title: 'Publica tu web', 
      desc: 'Con un clic, tu sitio estará en línea y listo para el mundo.', 
      icon: '🚀' 
    }
  ];

  stats = [
    { number: '< 2min', label: 'Tiempo promedio de creación' },
    { number: '99.9%', label: 'Uptime garantizado' },
    { number: '500+', label: 'Sitios web generados' },
    { number: '4.9/5', label: 'Satisfacción del cliente' }
  ];

  templates = [
    {
      name: 'Landing Page',
      desc: 'Atrae a tus visitantes con una primera impresión que convierte.',
      image: 'landing-preview.jpg'
    },
    {
      name: 'Portfolio',
      desc: 'Muestra tu trabajo profesional de manera elegante.',
      image: 'portfolio-preview.jpg'
    }
  ];

  testimonials = [
    {
      text: 'POLYLINE me permitió crear mi sitio web en una tarde, sin complicaciones.',
      author: 'Sofia Martinez, Emprendedora'
    },
    {
      text: 'La personalización es increíble, pude adaptar todo a mi marca.',
      author: 'Carlos López, Diseñador'
    }
  ];

  ngAfterViewInit() {
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      video.addEventListener('loadedmetadata', () => {
        this.duration = video.duration;
      });
    }
  }

  // Video control methods
  playVideo() {
    if (this.videoRef) {
      this.videoRef.nativeElement.play();
      this.isPlaying = true;
    }
  }

  togglePlayPause() {
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    }
  }

  onVideoEnded() {
    this.isPlaying = false;
    this.progress = 0;
    this.currentTime = 0;
  }

  onTimeUpdate() {
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      this.currentTime = video.currentTime;
      this.progress = (video.currentTime / video.duration) * 100;
    }
  }

  seekTo(event: MouseEvent) {
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      const progressBar = event.currentTarget as HTMLElement;
      const rect = progressBar.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * video.duration;
      
      video.currentTime = newTime;
      this.currentTime = newTime;
      this.progress = percentage * 100;
    }
  }

  toggleMute() {
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      video.muted = !video.muted;
      this.isMuted = video.muted;
    }
  }

  setVolume(event: Event) {
    if (this.videoRef) {
      const target = event.target as HTMLInputElement;
      const volumeValue = parseInt(target.value);
      const video = this.videoRef.nativeElement;
      
      video.volume = volumeValue / 100;
      this.volume = volumeValue;
      this.isMuted = volumeValue === 0;
    }
  }

  toggleFullscreen() {
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }
    }
  }

  formatTime(seconds: number): string {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
