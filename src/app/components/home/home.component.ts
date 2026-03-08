/**
 * HomeComponent - Landing Page Principal JW Consulting
 * 
 * Página de ventas optimizada para conversión con:
 * - Animaciones scroll-triggered (Intersection Observer)
 * - Formulario reactivo con validación robusta
 * - Efecto de texto tipeado (typing effect)
 * - Navegación responsive con mobile menu
 * - SSR compatible (Angular Universal)
 * 
 * @author Walter Delgado
 * @version 3.0 - High Impact + Responsive + Animations
 */

import { Component, OnInit, inject, PLATFORM_ID, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// ============================================================================
// INTERFACES TIPIFICADAS PARA DATOS
// ============================================================================

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;           // Font Awesome class: 'fa-solid fa-building'
  color: string;          // Color hex para efectos glow
  features: string[];     // Lista de características
}

export interface MetricItem {
  value: string;          // Valor mostrado (ej: '+50')
  label: string;          // Descripción de la métrica
  icon: string;           // Font Awesome class
  rawValue: number;       // Valor numérico para animación count-up
  progress: number;       // Porcentaje para barra de progreso (0-100)
  suffix: string;         // Sufijo para el valor (ej: '+')
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  company: string;
}

export interface TechCategory {
  name: string;
  items: string[];
  icon: string;           // Font Awesome class para categoría
}

export interface ProcessStep {
  title: string;
  description: string;
  duration: string;
  deliverable?: string;   // Entregable opcional
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  
  // ==========================================================================
  // ESTADO DEL COMPONENTE
  // ==========================================================================
    scrollProgress = 0;
private lastScrollY = 0;

  // Formulario de contacto
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  
  // UI State
  isNavScrolled = false;
  isMobileMenuOpen = false;
  currentText = '';
  isBrowser = false;
  year = new Date().getFullYear();
  
  // Character counter para textarea
  messageCharCount = 0;
  readonly MAX_MESSAGE_LENGTH = 500;
  
  // ==========================================================================
  // DATOS PARA EL TEMPLATE
  // ==========================================================================
  
  /**
   * Servicios ofrecidos con iconos y colores dinámicos
   */
  services: ServiceItem[] = [
    {
      title: 'Desarrollo ERP a Medida',
      description: 'Sistemas de gestión empresarial personalizados que se adaptan a tus procesos, no al revés. Integración total con tus operaciones.',
      icon: 'fa-solid fa-building-columns',
      color: '#0078D4',
      features: [
        'Módulos escalables según crecimiento',
        'Integración con sistemas legacy',
        'Reportes en tiempo real',
        'Soporte multi-moneda y multi-idioma'
      ]
    },
    {
      title: 'Power BI & Analytics',
      description: 'Transforma tus datos en decisiones estratégicas. Dashboards interactivos que revelan oportunidades ocultas en tu información.',
      icon: 'fa-solid fa-chart-simple',
      color: '#F2C811',
      features: [
        'Dashboards ejecutivos automatizados',
        'Predicción de tendencias con IA',
        'Alertas proactivas de KPIs',
        'Exportación a Excel/PDF programada'
      ]
    },
    {
      title: 'Arquitectura Cloud (Azure/AWS)',
      description: 'Infraestructura escalable, segura y optimizada en costos. Migración sin downtime y arquitectura preparada para el futuro.',
      icon: 'fa-solid fa-cloud',
      color: '#00A4EF',
      features: [
        'Migración cero-downtime garantizada',
        'Auto-escalado según demanda',
        'Backup automático y disaster recovery',
        'Cumplimiento ISO 27001 y GDPR'
      ]
    },
    {
      title: 'Automatización & Chatbots IA',
      description: 'Reduce costos operativos hasta 40% automatizando procesos repetitivos. Asistentes virtuales que atienden 24/7 a tus clientes.',
      icon: 'fa-solid fa-robot',
      color: '#2FBF40',
      features: [
        'Chatbots con NLP en español nativo',
        'Automatización de workflows con Power Automate',
        'Integración con WhatsApp Business API',
        'Analytics de interacciones y conversión'
      ]
    }
  ];

  /**
   * Métricas de impacto con valores para animación count-up
   */
  metrics: MetricItem[] = [
    { 
      value: '+50', 
      label: 'Proyectos entregados', 
      icon: 'fa-solid fa-folder-open',
      rawValue: 50,
      progress: 95,
      suffix: '+'

    },
    { 
      value: '98%', 
      label: 'Satisfacción de clientes', 
      icon: 'fa-solid fa-heart',
      rawValue: 98,
      progress: 98,
      suffix: '+'
    },
    { 
      value: '-35%', 
      label: 'Reducción promedio de costos', 
      icon: 'fa-solid fa-piggy-bank',
      rawValue: 35,
      progress: 85,
      suffix: '+'
    },
    { 
      value: '24/7', 
      label: 'Soporte técnico disponible', 
      icon: 'fa-solid fa-headset',
      rawValue: 24,
      progress: 100,
      suffix: '+'
    }
  ];

  /**
   * Testimonios de clientes para social proof
   */
  testimonials: TestimonialItem[] = [
    {
      text: 'La implementación del ERP redujo nuestros tiempos de procesamiento en 60%. El equipo de JW entendió nuestras necesidades desde el día uno.',
      name: 'Carlos Mendoza',
      role: 'Gerente de Operaciones',
      company: 'Distribuidora Andina S.A.'
    },
    {
      text: 'Los dashboards de Power BI nos permitieron identificar oportunidades de ahorro que no veíamos. ROI positivo en menos de 3 meses.',
      name: 'María Fernández',
      role: 'Directora Financiera',
      company: 'Grupo Comercial del Pacífico'
    }
  ];

  /**
   * Categorías de tecnologías con iconos específicos
   */
  techCategories: TechCategory[] = [
    {
      name: 'Cloud & Infraestructura',
      icon: 'fa-solid fa-cloud',
      items: ['Microsoft Azure', 'AWS', 'Azure DevOps', 'Terraform', 'Docker', 'Kubernetes']
    },
    {
      name: 'Desarrollo & Backend',
      icon: 'fa-solid fa-code',
      items: ['.NET Core', 'Node.js', 'Python', 'PostgreSQL', 'SQL Server', 'Redis']
    },
    {
      name: 'Frontend & UX',
      icon: 'fa-solid fa-palette',
      items: ['Angular 17+', 'TypeScript', 'RxJS', 'SCSS', 'Figma', 'Storybook']
    },
    {
      name: 'Data & IA',
      icon: 'fa-solid fa-brain',
      items: ['Power BI', 'Azure Synapse', 'Python ML', 'Azure OpenAI', 'Power Automate']
    }
  ];

  /**
   * Pasos de la metodología de trabajo
   */
  processSteps: ProcessStep[] = [
    {
      title: 'Diagnóstico Estratégico',
      description: 'Análisis profundo de tus procesos, desafíos y objetivos de negocio. Entregable: Roadmap técnico priorizado.',
      duration: '1-2 semanas',
      deliverable: 'Roadmap técnico'
    },
    {
      title: 'Diseño & Prototipado',
      description: 'Arquitectura de solución, wireframes y validación con stakeholders. Entregable: Especificaciones técnicas aprobadas.',
      duration: '2-3 semanas',
      deliverable: 'Specs técnicas'
    },
    {
      title: 'Desarrollo Ágil',
      description: 'Sprints con demos semanales. Transparencia total y ajustes continuos según feedback.',
      duration: '8-16 semanas',
      deliverable: 'MVP funcional'
    },
    {
      title: 'Despliegue & Soporte',
      description: 'Lanzamiento controlado, capacitación a tu equipo y soporte post-implementación incluido.',
      duration: '2-4 semanas',
      deliverable: 'Go-live + soporte'
    }
  ];

  // ==========================================================================
  // INYECCIÓN DE DEPENDENCIAS
  // ==========================================================================
  
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly viewportScroller = inject(ViewportScroller);
  
  // ==========================================================================
  // TIMERS Y OBSERVERS PARA CLEANUP
  // ==========================================================================
  
  private typingTimer: any;
  private scrollHandler: any;
  private scrollObserver: IntersectionObserver | null = null;
  private metricsAnimated = false;

  // ==========================================================================
  // CICLO DE VIDA DE ANGULAR
  // ==========================================================================

  ngOnInit(): void {
    // Detectar entorno browser para SSR compatibility
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.initForm();
      this.startTypingEffect();
      this.setupScrollListener();
      this.setupSmoothScroll();
    }
  }

  ngAfterViewInit(): void {
    // Intersection Observer para animaciones on-scroll (solo en browser)
    if (this.isBrowser) {
      this.initScrollAnimations();
      this.animateMetricsOnView();
    }
  }



  // ==========================================================================
  // INICIALIZACIÓN DE FORMULARIO REACTIVO
  // ==========================================================================

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      company: ['', [Validators.maxLength(150)]],
      phone: ['', [Validators.pattern(/^\+?[0-9\s\-\(\)]{7,20}$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(this.MAX_MESSAGE_LENGTH)]],
      consent: [false, Validators.requiredTrue]
    });

    // Suscribirse al textarea para character counter
    this.contactForm.get('message')?.valueChanges.subscribe(value => {
      this.messageCharCount = value?.length || 0;
    });
  }

  // ==========================================================================
  // MANEJO DE SCROLL Y NAVEGACIÓN
  // ==========================================================================

private setupScrollListener(): void {
  this.scrollHandler = this.handleScroll.bind(this);
  window.addEventListener('scroll', this.scrollHandler, { passive: true });
  // Calcular scroll inicial
  this.handleScroll();
}

private handleScroll(): void {
  if (!this.isBrowser) return;
  
  // Efecto de navbar al hacer scroll
  this.isNavScrolled = window.scrollY > 50;
  
  // Calcular scroll progress más preciso
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;
  
  // Evitar divisiones por cero o valores negativos
  if (documentHeight > 0) {
    this.scrollProgress = Math.min(100, Math.max(0, (scrolled / documentHeight) * 100));
  } else {
    this.scrollProgress = 0;
  }
}


  /**
   * Configura smooth scroll para anchor links
   */
  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const targetId = href.replace('#', '');
          this.scrollToSection(targetId);
        }
      });
    });
  }

/**
 * Scroll suave a sección específica
 */
scrollToSection(sectionId: string): void {
  if (!this.isBrowser) return;
  
  const element = document.getElementById(sectionId);
  if (element) {
    // Calcular offset para el header fijo (80px)
    const headerOffset = 59;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
  /**
   * Scroll al top de la página
   */
scrollToTop(): void {
  if (!this.isBrowser) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  // ==========================================================================
  // MENÚ MOBILE RESPONSIVE
  // ==========================================================================



closeMobileMenu(): void {
    if (!this.isBrowser) return;
    
    this.isMobileMenuOpen = false;
    
    // Restaurar estilos del body
    document.body.style.cssText = '';
    
    // Restaurar posición de scroll SIN animación para evitar jump
    window.scrollTo({ top: this.lastScrollY, behavior: 'auto' });
    
    // Resetear variable
    this.lastScrollY = 0;
}

  // ==========================================================================
  // EFECTO DE TEXTO TIPEADO (Typing Effect)
  // ==========================================================================

  private startTypingEffect(): void {
    const phrases = [
      'Arquitectura Cloud',
      'Automatización Inteligente', 
      'Analytics Predictivo',
      'ERP Escalable'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = (): void => {
      if (!this.isBrowser) return;
      
      const currentPhrase = phrases[phraseIndex];
      
      // Actualizar texto visible
      this.currentText = isDeleting 
        ? currentPhrase.substring(0, charIndex - 1) 
        : currentPhrase.substring(0, charIndex + 1);
      
      charIndex += isDeleting ? -1 : 1;
      
      // Lógica de cambio de frase
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pausa al completar frase
        this.typingTimer = setTimeout(() => { isDeleting = true; type(); }, 2500);
      } else if (isDeleting && charIndex === 0) {
        // Siguiente frase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        this.typingTimer = setTimeout(type, 500);
      } else {
        // Velocidad de tipeo
        const speed = isDeleting ? 40 : 80;
        this.typingTimer = setTimeout(type, speed);
      }
    };
    
    // Iniciar efecto
    type();
  }

  // ==========================================================================
  // ANIMACIONES SCROLL-TRIGGERED (Intersection Observer)
  // ==========================================================================

  /**
   * Inicializa Intersection Observer para animar elementos al entrar en viewport
   */
  private initScrollAnimations(): void {
    this.scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Dejar de observar una vez animado para optimizar performance
            this.scrollObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,        // Trigger cuando 15% del elemento es visible
        rootMargin: '0px 0px -50px 0px'  // Trigger ligeramente antes de entrar
      }
    );
    
    // Observar todos los elementos con clase animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      this.scrollObserver?.observe(el);
    });
  }

  /**
   * Anima las métricas con count-up cuando entran en viewport
   */
  private animateMetricsOnView(): void {
    const metricsSection = document.querySelector('#results');
    if (!metricsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.metricsAnimated) {
          this.metricsAnimated = true;
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(metricsSection);
  }

  /**
   * Anima los contadores de métricas (count-up effect)
   */
 /**
 * Anima los contadores de métricas (count-up effect)
 */
private animateCounters(): void {
  const counters = document.querySelectorAll<HTMLSpanElement>('.count-up');
  
  console.log('📊 Animando contadores:', counters.length); // Debug
  
  counters.forEach((counter, index) => {
    const metricValueEl = counter.parentElement;
    if (!metricValueEl) return;
    
    // Obtener valor objetivo desde data-count attribute
    const target = parseInt(metricValueEl.getAttribute('data-count') || '0', 10);
    const suffix = this.metrics[index]?.suffix || '+';
    
    console.log(`Metric ${index}: target=${target}, suffix=${suffix}`); // Debug
    
    // Configuración de animación
    const duration = 2000; // 2 segundos
    const startTime = performance.now();
    
    // Función de easing para animación suave (easeOutQuad)
    const easeOutQuad = (t: number): number => t * (2 - t);
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      // Calcular valor actual con interpolación
      const currentValue = Math.round(target * easedProgress);
      
      // Actualizar texto del contador
      counter.textContent = currentValue.toString();
      
      // Continuar animación si no ha terminado
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Asegurar valor final exacto
        counter.textContent = target.toString();
      }
    };
    
    // Iniciar animación con delay escalonado por índice
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 200);
  });
}

  // ==========================================================================
  // HELPERS PARA ICONOS DE TECNOLOGÍAS
  // ==========================================================================

  /**
   * Retorna el icono de Font Awesome para una tecnología específica
   * @param tech Nombre de la tecnología
   * @returns Clase CSS de Font Awesome
   */
  getTechIcon(tech: string): string {
    const iconMap: Record<string, string> = {
      'Microsoft Azure': 'fa-brands fa-microsoft',
      'AWS': 'fa-brands fa-aws',
      'Azure DevOps': 'fa-solid fa-code-branch',
      'Terraform': 'fa-solid fa-cube',
      'Docker': 'fa-brands fa-docker',
      'Kubernetes': 'fa-solid fa-dharmachakra',
      '.NET Core': 'fa-solid fa-code',
      'Node.js': 'fa-brands fa-node-js',
      'Python': 'fa-brands fa-python',
      'PostgreSQL': 'fa-solid fa-database',
      'SQL Server': 'fa-solid fa-server',
      'Redis': 'fa-solid fa-bolt',
      'Angular 17+': 'fa-brands fa-angular',
      'TypeScript': 'fa-solid fa-font',
      'RxJS': 'fa-solid fa-sync',
      'SCSS': 'fa-brands fa-sass',
      'Figma': 'fa-brands fa-figma',
      'Storybook': 'fa-solid fa-book',
      'Power BI': 'fa-solid fa-chart-pie',
      'Azure Synapse': 'fa-solid fa-network-wired',
      'Python ML': 'fa-solid fa-brain',
      'Azure OpenAI': 'fa-solid fa-robot',
      'Power Automate': 'fa-solid fa-rotate'
    };
    return iconMap[tech] || 'fa-solid fa-code';
  }

  // ==========================================================================
  // GETTERS PARA VALIDACIÓN LIMPIA EN TEMPLATE
  // ==========================================================================

  get name() { return this.contactForm?.get('name'); }
  get email() { return this.contactForm?.get('email'); }
  get message() { return this.contactForm?.get('message'); }
  get company() { return this.contactForm?.get('company'); }
  get phone() { return this.contactForm?.get('phone'); }
  get service() { return this.contactForm?.get('service'); }
  get consent() { return this.contactForm?.get('consent'); }

  // ==========================================================================
  // MANEJO DEL FORMULARIO DE CONTACTO
  // ==========================================================================

  /**
   * Pre-selecciona servicio desde tarjeta y hace scroll al formulario
   */
  selectService(serviceTitle: string): void {
    const serviceMap: Record<string, string> = {
      'Desarrollo ERP a Medida': 'ERP',
      'Power BI & Analytics': 'BI',
      'Arquitectura Cloud (Azure/AWS)': 'Cloud',
      'Automatización & Chatbots IA': 'Automation'
    };
    
    const serviceValue = serviceMap[serviceTitle] || 'Other';
    
    if (this.isBrowser && this.contactForm) {
      this.contactForm.patchValue({ service: serviceValue }, { emitEvent: false });
      // Scroll suave al formulario con offset para navbar fija
      this.scrollToSection('contact');
    }
  }

  /**
   * Maneja el submit del formulario con validación y feedback visual
   */
  onSubmit(): void {
    // Marcar todos los campos como touched para mostrar errores de validación
    if (this.contactForm?.invalid) {
      this.contactForm.markAllAsTouched();
      
      // Scroll al primer campo con error para mejor UX
      if (this.isBrowser) {
        const firstError = document.querySelector('.form-group .error');
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Estado de loading
    this.isSubmitting = true;

    // Simular llamada a API (REEMPLAZAR con servicio real en producción)
    setTimeout(() => {
      console.log('✅ Formulario enviado:', {
        ...this.contactForm.value,
        timestamp: new Date().toISOString()
      });
      
      // Feedback de éxito al usuario
      this.submitSuccess = true;
      this.isSubmitting = false;
      
      // Resetear formulario manteniendo estructura
      this.contactForm.reset({ service: '', consent: false });
      this.messageCharCount = 0;
      
      // Scroll al mensaje de éxito
      if (this.isBrowser) {
        document.querySelector('.success-message')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
      
    }, 1500);
  }

  /**
   * Resetear estado de éxito para permitir nuevo envío
   */
  resetForm(): void {
    this.submitSuccess = false;
    this.contactForm.reset({ service: '', consent: false });
    this.messageCharCount = 0;
  }

  // ==========================================================================
  // UTILIDADES ADICIONALES
  // ==========================================================================

  /**
   * Formatea número para display (ej: 1000 → 1K)
   */
  formatNumber(value: number): string {
    if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return value.toString();
  }

  /**
   * Verifica si un campo tiene error específico
   */
  hasError(controlName: string, errorCode: string): boolean {
    const control = this.contactForm?.get(controlName);
    return !!(control?.hasError(errorCode) && (control.touched || control.dirty));
  }

  /**
   * Obtiene mensaje de error amigable para un campo
   */
  getErrorMessage(controlName: string): string {
    const control = this.contactForm?.get(controlName);
    if (!control?.errors || !control.touched) return '';
    
    const errors = control.errors;
    
    if (errors['required']) return 'Este campo es requerido';
    if (errors['email']) return 'Ingresa un email válido';
    if (errors['minlength']) return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
    if (errors['maxlength']) return `Máximo ${errors['maxlength'].requiredLength} caracteres`;
    if (errors['pattern']) return 'Formato inválido';
    
    return 'Campo inválido';
  }


toggleMobileMenu(): void {
    if (!this.isBrowser) return;
    
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    if (this.isMobileMenuOpen) {
        // GUARDAR posición actual antes de bloquear
        this.lastScrollY = window.scrollY;
        
        // Bloquear scroll de forma compatible con iOS/Android
        document.body.style.cssText = `
            position: fixed;
            top: -${this.lastScrollY}px;
            width: 100%;
            overflow: hidden;
            inset: 0;
        `;
    } else {
        this.closeMobileMenu();
    }
}



ngOnDestroy(): void {
    if (this.isBrowser) {
        window.removeEventListener('scroll', this.scrollHandler);
        this.scrollObserver?.disconnect();
        
        // Limpieza crítica: si el componente se destruye con menú abierto
        if (this.isMobileMenuOpen) {
            document.body.style.cssText = '';
            window.scrollTo({ top: this.lastScrollY, behavior: 'auto' });
        }
    }
    if (this.typingTimer) clearTimeout(this.typingTimer);
}

}


