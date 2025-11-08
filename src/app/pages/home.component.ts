import { Component, ViewChild, ElementRef, AfterViewInit, ViewContainerRef, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { TEMPLATES, TemplateMeta } from '../templates/templates.data';
import { PreviewRegistryService } from '../templates/preview/preview-registry.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('presentationVideo') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoElement', { static: true }) videoElementRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('previewHost', { read: ViewContainerRef }) previewHost!: ViewContainerRef;
  
  // Video state
  isPlaying = false;
  isMuted = false;
  currentTime = 0;
  duration = 0;
  progress = 0;
  volume = 100;
  
  // Modal state
  isModalOpen = false;
  selectedTemplate: TemplateMeta | null = null;
  currentView: 'desktop' | 'mobile' = 'desktop';

  // Carousel state
  currentSlide = 0;
  isTransitioning = false;

  constructor(
    private router: Router,
    private previewRegistry: PreviewRegistryService
  ) {}

  benefits = [
    { 
      title: 'Sitios Web Inteligentes', 
      desc: 'Páginas web profesionales con IA integrada que aprenden de tus visitantes y optimizan la conversión automáticamente.', 
      icon: '🌐' 
    },
    { 
      title: 'Chatbots IA 24/7', 
      desc: 'Asistentes virtuales que atienden clientes, responden preguntas y cierran ventas mientras duermes.', 
      icon: '🤖' 
    },
    { 
      title: 'CRM Automatizado', 
      desc: 'Sistema completo que gestiona clientes, automatiza seguimientos y aumenta tu productividad hasta 10x.', 
      icon: '📊' 
    },
    { 
      title: 'Marketing con IA', 
      desc: 'Campañas inteligentes que se optimizan solas, segmentan audiencias y maximizan cada peso invertido.', 
      icon: '�' 
    },
    { 
      title: 'Analytics Predictivo', 
      desc: 'Dashboards en tiempo real que predicen tendencias y te ayudan a tomar decisiones basadas en datos.', 
      icon: '📈' 
    },
    { 
      title: 'Soporte Experto', 
      desc: 'Equipo dedicado que te acompaña en cada paso, desde el diseño hasta el crecimiento de tu negocio.', 
      icon: '�' 
    }
  ];

  howItWorksSteps = [
    {
      icon: '📋',
      title: 'Consulta Inicial',
      description: 'Conversamos contigo para entender tu visión, objetivos y necesidades específicas de tu negocio.'
    },
    {
      icon: '🤖',
      title: 'IA en Acción',
      description: 'Nuestra inteligencia artificial diseña una solución personalizada basada en tus requisitos y preferencias.'
    },
    {
      icon: '✨',
      title: 'Personalización',
      description: 'Refinamos cada detalle según tu feedback hasta lograr exactamente lo que necesitas.'
    },
    {
      icon: '🚀',
      title: 'Lanzamiento',
      description: 'Implementamos tu solución digital y te acompañamos en cada paso del camino. ¡Listos para despegar!'
    }
  ];

  processSteps = [
    { 
      title: 'Páginas Web Inteligentes', 
      desc: 'Sitios web profesionales con diseño responsive, optimización SEO y rendimiento superior.', 
      icon: '�',
      color: 'blue'
    },
    { 
      title: 'Chatbots con IA', 
      desc: 'Asistentes automáticos que atienden clientes 24/7, responden preguntas y generan ventas.', 
      icon: '�',
      color: 'green'
    },
    { 
      title: 'Asistentes Virtuales', 
      desc: 'Agentes inteligentes que procesan consultas, gestionan citas y automatizan tareas.', 
      icon: '🤖',
      color: 'purple'
    },
    { 
      title: 'Integración Total', 
      desc: 'Conectamos tu sitio web con chatbots, CRM, WhatsApp y todas tus herramientas.', 
      icon: '🔗',
      color: 'yellow'
    }
  ];

  stats = [
    { 
      number: '10+', 
      label: 'Plantillas profesionales listas',
      type: 'templates',
      targetValue: 10,
      displayNumber: '0',
      suffix: '+'
    },
    { 
      number: '100%', 
      label: 'Personalización total',
      type: 'custom',
      targetValue: 100,
      displayNumber: '0',
      suffix: '%'
    },
    { 
      number: '24h', 
      label: 'Tu sitio web en línea',
      type: 'delivery',
      targetValue: 24,
      displayNumber: '0',
      suffix: 'h'
    }
  ];

  private statsAnimated = false;

  templates = TEMPLATES;

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
    // Priorizar el video hero
    if (this.videoElementRef) {
      const video = this.videoElementRef.nativeElement;

      // Configurar video inmediatamente
      video.muted = true;
      video.preload = 'auto';

      // Evento cuando el video puede empezar a reproducir
      video.addEventListener('canplay', () => {
        console.log('Video listo para reproducir');
        // Intentar reproducir inmediatamente cuando esté listo
        video.play().then(() => {
          console.log('Video hero reproduciendo correctamente');
        }).catch(error => {
          console.log('Autoplay bloqueado, esperando interacción:', error);
          // Fallback para interacción del usuario
          const playFallback = () => {
            video.play().catch(e => console.log('Error en fallback:', e));
            document.removeEventListener('click', playFallback);
            document.removeEventListener('touchstart', playFallback);
          };

          document.addEventListener('click', playFallback, { once: true });
          document.addEventListener('touchstart', playFallback, { once: true });
        });
      });

      // Forzar carga inmediata
      video.load();

      video.addEventListener('loadedmetadata', () => {
        this.duration = video.duration;
        console.log('Metadata cargada, duración:', this.duration);
      });

      // Mostrar poster mientras carga
      video.addEventListener('loadstart', () => {
        console.log('Comenzando carga del video');
      });

      video.addEventListener('loadeddata', () => {
        console.log('Datos del video cargados');
      });
    }

    // Configurar video de presentación si existe
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      video.addEventListener('loadedmetadata', () => {
        this.duration = video.duration;
      });
    }

    // Lazy load de videos de fondo (excepto el hero)
    this.lazyLoadVideos();

    // Observar la sección de stats para animar cuando sea visible
    this.observeStatsSection();
  }

  // Lazy loading optimizado de videos
  lazyLoadVideos() {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          const source = video.querySelector('source[data-src]') as HTMLSourceElement;

          if (source && source.dataset['src']) {
            source.src = source.dataset['src'];
            video.load();
            video.muted = true;

            // Intentar reproducir inmediatamente
            video.play().then(() => {
              console.log('Video reproduciendo correctamente');
            }).catch(error => {
              console.log('Autoplay bloqueado, intentando fallback:', error);
              // Fallback: intentar reproducir después de interacción del usuario
              const playFallback = () => {
                video.play().catch(e => console.log('Error en fallback:', e));
                document.removeEventListener('click', playFallback);
                document.removeEventListener('touchstart', playFallback);
              };

              document.addEventListener('click', playFallback, { once: true });
              document.addEventListener('touchstart', playFallback, { once: true });
            });

            videoObserver.unobserve(video);
          }
        }
      });
    }, {
      rootMargin: '50px', // Cargar 50px antes para mejor experiencia
      threshold: 0.1
    });

    // Observar todos los videos background inmediatamente
    const bgVideos = document.querySelectorAll('.bg-video') as NodeListOf<HTMLVideoElement>;
    bgVideos.forEach(video => videoObserver.observe(video));
  }

  onVideoPlay() {
    this.isPlaying = true;
  }

  onVideoPause() {
    this.isPlaying = false;
  }

  onVideoLoaded() {
    if (this.videoRef) {
      this.duration = this.videoRef.nativeElement.duration;
    }
  }

  ngOnInit() {
    this.startAutoPlay();
    this.observeTimelineItems();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  // Carousel methods
  get totalSlides(): number {
    return this.templates.length;
  }

  get extendedTemplates(): TemplateMeta[] {
    // Triplicar templates para efecto infinito suave
    return [...this.templates, ...this.templates, ...this.templates];
  }

  get transformValue(): string {
    // Calcular el desplazamiento considerando el offset inicial
    const offset = this.templates.length; // Empezamos en el set del medio
    const totalIndex = offset + this.currentSlide;
    return `translateX(calc(-${totalIndex} * (33.333% + 10px)))`;
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentSlide++;
    
    setTimeout(() => {
      // Si llegamos al final del primer set, reseteamos al inicio sin animación
      if (this.currentSlide >= this.templates.length) {
        // Desactivar transición temporalmente
        const grid = document.querySelector('.templates-grid') as HTMLElement;
        if (grid) {
          grid.style.transition = 'none';
        }
        
        this.currentSlide = 0;
        
        // Reactivar transición después de un frame
        setTimeout(() => {
          if (grid) {
            grid.style.transition = '';
          }
        }, 50);
      }
      this.isTransitioning = false;
    }, 500);
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    
    if (this.currentSlide === 0) {
      // Desactivar transición
      const grid = document.querySelector('.templates-grid') as HTMLElement;
      if (grid) {
        grid.style.transition = 'none';
      }
      
      this.currentSlide = this.templates.length - 1;
      
      // Reactivar transición
      setTimeout(() => {
        if (grid) {
          grid.style.transition = '';
        }
        this.currentSlide--;
        setTimeout(() => {
          this.isTransitioning = false;
        }, 500);
      }, 50);
    } else {
      this.currentSlide--;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }

  goToSlide(index: number) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentSlide = index;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  startAutoPlay() {
    setInterval(() => {
      if (!this.isTransitioning) {
        this.nextSlide();
      }
    }, 4000);
  }

  stopAutoPlay() {
    // Auto-play continuo
  }

  onMouseEnter() {
    // Mantener vacío si quieres que continúe
  }

  onMouseLeave() {
    // Mantener vacío
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

  // Modal methods
  async openTemplatePreview(template: TemplateMeta) {
    this.selectedTemplate = template;
    this.isModalOpen = true;
    this.currentView = 'desktop';
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Load preview component dynamically
    if (this.previewHost) {
      await this.previewRegistry.createIn(this.previewHost, template.type, template);
    }
  }

  closeModal(event?: Event) {
    if (event && event.target !== event.currentTarget) return;
    
    this.isModalOpen = false;
    this.selectedTemplate = null;
    // Clear preview host
    if (this.previewHost) {
      this.previewHost.clear();
    }
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  setView(view: 'desktop' | 'mobile') {
    this.currentView = view;
  }

  getTemplateUrl(template: TemplateMeta | null): string {
    if (!template) return '';
    return template.slug + '.com';
  }

  viewFullDemo() {
    if (this.selectedTemplate) {
      this.router.navigate(['/plantilla', this.selectedTemplate.slug]);
      this.closeModal();
    }
  }

  // Timeline Animation on Scroll
  @HostListener('window:scroll')
  onWindowScroll() {
    this.animateTimeline();
  }

  observeTimelineItems() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Ajustar threshold según el tamaño de pantalla
      const isMobile = window.innerWidth <= 768;
      const options = {
        threshold: isMobile ? 0.1 : 0.3,
        rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, options);

      // Observe timeline items after a short delay to ensure DOM is ready
      setTimeout(() => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => observer.observe(item));
      }, 100);
    }
  }

  animateTimeline() {
    const timelineSection = document.querySelector('.how-it-works');
    const timelineProgress = document.querySelector('.timeline-progress') as HTMLElement;
    
    if (!timelineSection || !timelineProgress) return;

    const sectionTop = timelineSection.getBoundingClientRect().top;
    const sectionHeight = timelineSection.getBoundingClientRect().height;
    const windowHeight = window.innerHeight;
    
    // Calculate progress percentage
    const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight * 0.8)));
    
    // Update timeline progress line
    timelineProgress.style.height = `${scrollProgress * 100}%`;
  }

  // Stats Counter Animation
  observeStatsSection() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const options = {
        threshold: 0.5,
        rootMargin: '0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true;
            this.animateCounters();
          }
        });
      }, options);

      setTimeout(() => {
        const statsSection = document.querySelector('.stats-premium');
        if (statsSection) {
          observer.observe(statsSection);
        }
      }, 100);
    }
  }

  animateCounters() {
    this.stats.forEach((stat, index) => {
      setTimeout(() => {
        this.animateCounter(stat);
      }, index * 300); // 300ms de delay entre cada contador
    });
  }

  animateCounter(stat: any) {
    const duration = 2500; // 2.5 segundos
    const frameRate = 16; // ~60fps
    const totalFrames = duration / frameRate;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      
      // Ease-out cubic para desaceleración suave
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * stat.targetValue;
      
      // Formatear según el tipo - incremento gradual
      if (stat.type === 'templates') {
        stat.displayNumber = Math.floor(current).toString();
      } else if (stat.type === 'custom') {
        stat.displayNumber = Math.floor(current).toString();
      } else if (stat.type === 'delivery') {
        stat.displayNumber = Math.floor(current).toString();
      }

      if (frame >= totalFrames) {
        clearInterval(timer);
        // Valor final exacto
        if (stat.type === 'templates') {
          stat.displayNumber = '10';
        } else if (stat.type === 'custom') {
          stat.displayNumber = '100';
        } else if (stat.type === 'delivery') {
          stat.displayNumber = '24';
        }
      }
    }, frameRate);
  }

  // Scroll suave a la sección de contacto
  scrollToContact() {
    this.router.navigate(['/cotizar']);
  }
}
