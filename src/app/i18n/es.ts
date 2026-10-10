import { SiteContent } from './content';

export const ES: SiteContent = {
  meta: {
    title: 'JW Consultora | Mejora de procesos, software a medida y cloud',
    description:
      'JW Consultora (JW TECH CONSULTORA S.A.C., RUC 20616046072): consultoría en Perú en mejora y automatización de procesos, ERP a medida, aplicaciones y landing pages, Power BI, Google Workspace y cloud en Azure, AWS y Google Cloud.',
  },

  nav: {
    links: [
      { id: 'servicios', label: 'Servicios' },
      { id: 'metodologia', label: 'Metodología' },
      { id: 'proyectos', label: 'Proyectos' },
      { id: 'tecnologia', label: 'Tecnología' },
    ],
    cta: 'Solicitar propuesta',
    skip: 'Saltar al contenido principal',
    home: 'JW Consultora, ir al inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    backToTop: 'Volver arriba',
    language: 'Idioma',
  },

  hero: {
    eyebrow: 'Consultoría en procesos y tecnología',
    title: 'Mejoramos y automatizamos tus procesos con',
    titleAccent: 'tecnología a medida.',
    subtitle:
      'Analizamos cómo trabaja tu empresa, rediseñamos los procesos y los llevamos a sistemas, automatizaciones y tableros sobre Azure, AWS, Google Cloud y Google Workspace.',
    ctaPrimary: 'Solicitar una propuesta',
    ctaSecondary: 'Ver casos de éxito',
    panel: {
      title: 'Cómo ayudamos a tu empresa',
      items: [
        { icon: 'workflow', title: 'Mejora de procesos', text: 'Diagnóstico, rediseño y automatización con Power Platform e IA.' },
        { icon: 'building', title: 'Software a medida', text: 'ERP, aplicaciones web, móviles y landing pages.' },
        { icon: 'chart', title: 'Datos e IA', text: 'Power BI, Databricks, BigQuery, OCR y modelos de IA.' },
        { icon: 'cloud', title: 'Cloud y productividad', text: 'Azure, AWS, Google Cloud y Google Workspace.' },
      ],
      clients: 'Han confiado en nosotros',
    },
    facts: { ruc: 'RUC', locationValue: 'Lima, Perú' },
    ecosystems: {
      label: 'Ecosistemas con los que trabajamos',
      items: ['Microsoft Power Platform', 'Microsoft Azure', 'Google Cloud', 'Google Workspace', 'AWS', 'Databricks'],
    },
  },

  clients: { label: 'Empresas que confían en nosotros' },

  services: {
    label: 'Servicios',
    title: 'Procesos más eficientes, sistemas que los sostienen',
    lead: 'Empezamos por entender y mejorar cómo trabaja tu empresa; luego construimos la tecnología que lo hace posible.',
    cta: 'Solicitar propuesta',
    items: [
      {
        id: 'process',
        title: 'Mejora y automatización de procesos',
        description: 'Mapeamos tus procesos actuales, eliminamos pasos que no agregan valor y automatizamos las tareas repetitivas.',
        features: ['Diagnóstico y mapeo AS-IS / TO-BE', 'Flujos con Power Automate y Apps Script', 'OCR e IA para leer y clasificar documentos', 'Indicadores para medir la mejora'],
      },
      {
        id: 'erp',
        title: 'ERP y software a medida',
        description: 'Sistemas de gestión construidos sobre tus procesos reales: proyectos, clientes, operaciones, finanzas y reportes en una sola plataforma.',
        features: ['Módulos según tu operación', 'Roles y permisos por usuario', 'Integración con sistemas existentes', 'Reportes y exportación a Excel'],
      },
      {
        id: 'web',
        title: 'Web, landing pages y apps',
        description: 'Sitios corporativos, landing pages y aplicaciones web o móviles que fortalecen tu marca y tu operación en cualquier dispositivo.',
        features: ['Landing pages para posicionamiento', 'Diseño adaptable a todo dispositivo', 'Optimización para buscadores', 'Apps de campo con trazabilidad'],
      },
      {
        id: 'bi',
        title: 'Datos y analítica',
        description: 'Tableros gerenciales que convierten la información operativa en indicadores claros para decidir a tiempo.',
        features: ['Power BI y Looker Studio', 'Databricks, BigQuery y Microsoft Fabric', 'Indicadores de SLA y cumplimiento', 'Modelos predictivos con IA'],
      },
      {
        id: 'cloud',
        title: 'Infraestructura cloud',
        description: 'Despliegue, migración y operación de aplicaciones en Azure, AWS y Google Cloud, con foco en disponibilidad, seguridad y costos.',
        features: ['Azure, AWS y Google Cloud (GCP)', 'Contenedores y CI/CD', 'Copias de seguridad', 'Monitoreo y control de costos'],
      },
      {
        id: 'workspace',
        title: 'Google Workspace y productividad',
        description: 'Implementamos y aprovechamos la suite de Google para que tu equipo colabore mejor y automatice su trabajo diario.',
        features: ['Implementación y migración de Workspace', 'Automatizaciones con Apps Script', 'Aplicaciones con AppSheet', 'Gmail, Drive, Sheets y Forms integrados'],
      },
    ],
  },

  projects: {
    label: 'Proyectos',
    title: 'Casos de éxito con empresas reales',
    lead: 'Proyectos que diseñamos, construimos y pusimos en operación junto a nuestros clientes.',
    client: 'Cliente',
    sector: 'Sector',
    type: 'Tipo',
    challenge: 'Reto',
    solution: 'Solución',
    scope: 'Alcance entregado',
    results: 'Resultados',
    featured: 'Caso destacado',
    cases: [
      {
        title: 'ERP Nexus',
        client: 'SEMI Perú',
        sector: 'Telecomunicaciones',
        type: 'ERP web a medida',
        challenge: 'Coordinar decenas de proyectos simultáneos para operadores de telecomunicaciones, cada uno con varias etapas, responsables y plazos que cumplir.',
        solution: 'Levantamos el proceso de gestión de proyectos de punta a punta y lo llevamos a una plataforma web con control de SLA por etapa e indicadores gerenciales.',
        scope: [
          'Gestión de proyectos y macroproyectos',
          'Gestión de clientes y estructura organizativa',
          'Equipos, usuarios y permisos por módulo',
          'Cronogramas y SLA por etapa',
          'Encuestas',
          'Reportes y exportación a Excel',
          'Dashboard gerencial',
          'Centro de notificaciones y alertas',
        ],
        results: [
          'Procesos clave centralizados en una sola plataforma',
          'Control de SLA en diseño, permisos, implementación, entregables y liquidaciones',
          'Indicadores gerenciales de cumplimiento y días perdidos',
        ],
        highlights: [
          { value: '+30', label: 'proyectos gestionados' },
          { value: '8', label: 'módulos en producción' },
          { value: '5', label: 'etapas con control de SLA' },
        ],
      },
      {
        title: 'Bitácora Mobile',
        client: 'SEMI Perú',
        sector: 'Telecomunicaciones',
        type: 'Aplicación móvil',
        challenge: 'Dar seguimiento ordenado a las actividades que el equipo técnico realiza en campo.',
        solution: 'Aplicación móvil para registrar actividades en campo, sincronizada con la operación central.',
        scope: ['Registro de actividades en campo', 'Sincronización con la operación central', 'Seguimiento por proyecto'],
        results: ['Trazabilidad en tiempo real de los trabajos en campo', 'Mejor coordinación entre campo y oficina'],
      },
      {
        title: 'Landing corporativa',
        client: 'ITB Perú',
        type: 'Actualización de landing page',
        challenge: 'Renovar la presencia digital de la marca para fortalecer su posicionamiento y comunicar mejor su propuesta de valor.',
        solution: 'Participamos en la actualización de su landing page: estructura de contenidos, diseño visual y adaptación a todos los dispositivos.',
        scope: ['Estructura de contenidos', 'Diseño visual', 'Adaptación a todo dispositivo'],
        results: ['Imagen de marca renovada y coherente', 'Mejor base para el posicionamiento en buscadores'],
      },
    ],
  },

  process: {
    label: 'Metodología',
    title: 'Primero mejoramos el proceso, después lo automatizamos',
    lead: 'Nuestra experiencia en mejora de procesos evita automatizar lo que no funciona: cada etapa tiene un entregable claro.',
    deliverable: 'Entregable',
    steps: [
      { title: 'Diagnóstico AS-IS', description: 'Levantamos cómo funciona hoy el proceso: tiempos, responsables y cuellos de botella.', deliverable: 'Mapa del proceso actual y oportunidades' },
      { title: 'Rediseño TO-BE', description: 'Simplificamos el flujo, definimos reglas y priorizamos qué automatizar por impacto.', deliverable: 'Proceso rediseñado y hoja de ruta' },
      { title: 'Automatización', description: 'Construimos el sistema o la automatización por entregas cortas, con demostraciones periódicas.', deliverable: 'Solución funcionando en tu operación' },
      { title: 'Medición y mejora continua', description: 'Medimos los indicadores acordados, capacitamos a tu equipo y ajustamos lo necesario.', deliverable: 'Tablero de indicadores y soporte' },
    ],
    whyTitle: 'Por qué trabajar con JW Consultora',
    why: [
      { title: 'Trato directo', text: 'Trabajas con el equipo que diseña y construye tu solución, sin intermediarios.' },
      { title: 'Empresa formal', text: 'Sociedad constituida en Perú, con contratos formales y comprobantes electrónicos.' },
      { title: 'Enfoque en resultados', text: 'Cada entrega responde a un proceso e indicador concreto de tu negocio.' },
      { title: 'Soporte continuo', text: 'Acompañamiento después de la puesta en marcha y evolución de la solución.' },
    ],
  },

  tech: {
    label: 'Tecnología',
    title: 'Ecosistemas que dominamos',
    lead: 'Trabajamos sobre Microsoft, Google y plataformas abiertas, y aplicamos inteligencia artificial donde genera valor real para tu operación.',
    area: 'Área',
    columns: ['Microsoft', 'Google', 'Open source y otros'],
    rows: [
      {
        area: 'Automatización y low-code',
        cells: [['Power Automate', 'Power Apps', 'Copilot Studio', 'Logic Apps'], ['Apps Script', 'AppSheet'], ['APIs REST', 'WhatsApp Business API']],
      },
      {
        area: 'Datos y analítica',
        cells: [['Power BI', 'Microsoft Fabric', 'Data Factory', 'Azure SQL'], ['BigQuery', 'Looker Studio', 'Cloud SQL'], ['Databricks', 'Apache Spark', 'PostgreSQL']],
      },
      {
        area: 'Inteligencia artificial',
        cells: [['Azure OpenAI', 'AI Document Intelligence (OCR)'], ['Gemini', 'Vertex AI', 'Document AI'], ['Modelos de ML con Python', 'Asistentes con RAG']],
      },
      {
        area: 'Cloud e infraestructura',
        cells: [['Azure App Service', 'Azure Functions'], ['Cloud Run', 'Cloud Functions'], ['AWS (EC2, Lambda, S3)', 'Docker', 'Terraform']],
      },
      {
        area: 'Colaboración y productividad',
        cells: [['Microsoft 365', 'SharePoint', 'Dataverse'], ['Google Workspace', 'Gmail', 'Drive', 'Sheets', 'Forms'], []],
      },
      {
        area: 'Desarrollo y DevOps',
        cells: [['.NET', 'Azure DevOps'], [], ['Angular', 'Node.js', 'Python', 'TypeScript', 'GitHub Actions']],
      },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Conversemos sobre tu proyecto',
    lead: 'Agendamos una reunión de diagnóstico sin costo y te enviamos una propuesta con alcance, plazos e inversión.',
    channels: {
      whatsapp: 'WhatsApp',
      email: 'Correo',
      schedule: 'Horario de atención',
      scheduleValue: 'Lunes a viernes, 9:00 a 18:00',
      legal: 'Razón social',
      direct: 'Escríbenos directo por WhatsApp',
    },
    formTitle: 'Solicitud de propuesta',
    fields: {
      name: 'Nombre completo',
      company: 'Empresa',
      email: 'Correo corporativo',
      phone: 'Teléfono',
      service: 'Servicio de interés',
      servicePlaceholder: 'Selecciona una opción',
      message: 'Descripción del proyecto',
      messagePlaceholder: 'Objetivos, procesos involucrados, sistemas actuales…',
    },
    errors: {
      name: 'Ingresa tu nombre completo.',
      email: 'Ingresa un correo válido.',
      phone: 'Ingresa un teléfono válido.',
      service: 'Selecciona un servicio.',
      message: 'Escribe al menos 20 caracteres.',
      consent: 'Necesitamos tu autorización para contactarte.',
    },
    serviceOptions: [
      { id: 'process', label: 'Mejora y automatización de procesos' },
      { id: 'erp', label: 'Sistema ERP / software a medida' },
      { id: 'web', label: 'Sitio web, landing page o app' },
      { id: 'bi', label: 'Datos y analítica (Power BI / Looker Studio)' },
      { id: 'cloud', label: 'Infraestructura cloud (Azure / AWS / GCP)' },
      { id: 'workspace', label: 'Google Workspace y productividad' },
      { id: 'other', label: 'Otro / consultoría general' },
    ],
    consent: (legalName) => `Autorizo a ${legalName} a usar estos datos únicamente para responder mi consulta.`,
    submit: 'Enviar solicitud por WhatsApp',
    emailAlt: 'O escríbenos por correo',
    success: {
      title: 'Gracias, tu solicitud está lista',
      before: 'Abrimos WhatsApp con tu mensaje redactado; solo presiona',
      send: 'Enviar',
      after: 'Si no se abrió, escríbenos a',
      again: 'Enviar otra consulta',
    },
    whatsappGreeting: 'Hola JW Consultora, quisiera información sobre sus servicios.',
    whatsappIntro: 'Hola JW Consultora, quisiera solicitar una propuesta.',
    whatsappLabels: { name: 'Nombre', company: 'Empresa', email: 'Correo', phone: 'Teléfono', service: 'Servicio' },
  },

  footer: {
    cta: '¿Tienes un proyecto en mente? Conversemos.',
    ctaButton: 'Solicitar propuesta',
    tagline: 'Consultoría en mejora y automatización de procesos, software a medida, analítica de datos, Google Workspace y cloud.',
    services: 'Servicios',
    company: 'Empresa',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
};
