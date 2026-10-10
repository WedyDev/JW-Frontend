import { SiteContent } from './content';

export const EN: SiteContent = {
  meta: {
    title: 'JW Consultora | Process improvement, custom software and cloud',
    description:
      'JW Consultora (JW TECH CONSULTORA S.A.C., Tax ID 20616046072): consulting in Peru on process improvement and automation, custom ERP, apps and landing pages, Power BI, Google Workspace and cloud on Azure, AWS and Google Cloud.',
  },

  nav: {
    links: [
      { id: 'servicios', label: 'Services' },
      { id: 'metodologia', label: 'Approach' },
      { id: 'proyectos', label: 'Projects' },
      { id: 'tecnologia', label: 'Technology' },
    ],
    cta: 'Request a proposal',
    skip: 'Skip to main content',
    home: 'JW Consultora, go to home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    language: 'Language',
  },

  hero: {
    eyebrow: 'Process and technology consulting',
    title: 'We improve and automate your processes with',
    titleAccent: 'custom technology.',
    subtitle:
      'We analyze how your company works, redesign its processes and turn them into systems, automations and dashboards on Azure, AWS, Google Cloud and Google Workspace.',
    ctaPrimary: 'Request a proposal',
    ctaSecondary: 'See success stories',
    panel: {
      title: 'How we help your company',
      items: [
        { icon: 'workflow', title: 'Process improvement', text: 'Assessment, redesign and automation with Power Platform and AI.' },
        { icon: 'building', title: 'Custom software', text: 'ERP, web and mobile apps, and landing pages.' },
        { icon: 'chart', title: 'Data and AI', text: 'Power BI, Databricks, BigQuery, OCR and AI models.' },
        { icon: 'cloud', title: 'Cloud and productivity', text: 'Azure, AWS, Google Cloud and Google Workspace.' },
      ],
      clients: 'They have trusted us',
    },
    facts: { ruc: 'RUC', locationValue: 'Lima, Peru' },
    ecosystems: {
      label: 'Ecosystems we work with',
      items: ['Microsoft Power Platform', 'Microsoft Azure', 'Google Cloud', 'Google Workspace', 'AWS', 'Databricks'],
    },
  },

  clients: { label: 'Companies that trust us' },

  services: {
    label: 'Services',
    title: 'More efficient processes, and the systems that sustain them',
    lead: 'We start by understanding and improving how your company works; then we build the technology that makes it possible.',
    cta: 'Request a proposal',
    items: [
      {
        id: 'process',
        title: 'Process improvement and automation',
        description: 'We map your current processes, remove steps that add no value and automate repetitive tasks.',
        features: ['AS-IS / TO-BE assessment and mapping', 'Flows with Power Automate and Apps Script', 'OCR and AI to read and classify documents', 'KPIs to measure the improvement'],
      },
      {
        id: 'erp',
        title: 'Custom ERP and software',
        description: 'Management systems built on your real processes: projects, clients, operations, finance and reporting on a single platform.',
        features: ['Modules tailored to your operations', 'User roles and permissions', 'Integration with existing systems', 'Reports and Excel export'],
      },
      {
        id: 'web',
        title: 'Websites, landing pages and apps',
        description: 'Corporate websites, landing pages and web or mobile apps that strengthen your brand and operations on any device.',
        features: ['Landing pages for brand positioning', 'Responsive design for every device', 'Search engine optimization', 'Field apps with full traceability'],
      },
      {
        id: 'bi',
        title: 'Data and analytics',
        description: 'Management dashboards that turn operational data into clear indicators so you can decide on time.',
        features: ['Power BI and Looker Studio', 'Databricks, BigQuery and Microsoft Fabric', 'SLA and compliance indicators', 'Predictive AI models'],
      },
      {
        id: 'cloud',
        title: 'Cloud infrastructure',
        description: 'Deployment, migration and operation of applications on Azure, AWS and Google Cloud, focused on availability, security and cost.',
        features: ['Azure, AWS and Google Cloud (GCP)', 'Containers and CI/CD', 'Backups', 'Monitoring and cost control'],
      },
      {
        id: 'workspace',
        title: 'Google Workspace and productivity',
        description: 'We implement and get the most out of the Google suite so your team collaborates better and automates daily work.',
        features: ['Workspace setup and migration', 'Automations with Apps Script', 'Apps built with AppSheet', 'Integrated Gmail, Drive, Sheets and Forms'],
      },
    ],
  },

  projects: {
    label: 'Projects',
    title: 'Success stories with real companies',
    lead: 'Projects we designed, built and put into operation together with our clients.',
    client: 'Client',
    sector: 'Industry',
    type: 'Type',
    challenge: 'Challenge',
    solution: 'Solution',
    scope: 'Delivered scope',
    results: 'Results',
    featured: 'Featured case',
    cases: [
      {
        title: 'ERP Nexus',
        client: 'SEMI Perú',
        sector: 'Telecommunications',
        type: 'Custom web ERP',
        challenge: 'Coordinating dozens of simultaneous projects for telecom operators, each with several stages, owners and deadlines to meet.',
        solution: 'We mapped the project management process end to end and turned it into a web platform with per-stage SLA control and management indicators.',
        scope: [
          'Project and macro-project management',
          'Client management and organizational structure',
          'Teams, users and per-module permissions',
          'Schedules and SLAs by stage',
          'Surveys',
          'Reports and Excel export',
          'Management dashboard',
          'Notification and alert center',
        ],
        results: [
          'Key processes centralized on a single platform',
          'SLA control across design, permits, implementation, deliverables and settlements',
          'Management indicators for compliance and lost days',
        ],
        highlights: [
          { value: '+30', label: 'projects managed' },
          { value: '8', label: 'modules in production' },
          { value: '5', label: 'stages under SLA control' },
        ],
      },
      {
        title: 'Bitácora Mobile',
        client: 'SEMI Perú',
        sector: 'Telecommunications',
        type: 'Mobile application',
        challenge: 'Keeping orderly track of the activities the technical team performs in the field.',
        solution: 'Mobile app to log field activities, synchronized with central operations.',
        scope: ['Field activity logging', 'Sync with central operations', 'Per-project tracking'],
        results: ['Real-time traceability of field work', 'Better coordination between field and office'],
      },
      {
        title: 'Corporate landing page',
        client: 'ITB Perú',
        type: 'Landing page update',
        challenge: 'Refreshing the brand’s digital presence to strengthen its positioning and better communicate its value proposition.',
        solution: 'We took part in updating its landing page: content structure, visual design and adaptation to every device.',
        scope: ['Content structure', 'Visual design', 'Responsive adaptation'],
        results: ['Refreshed, consistent brand image', 'A stronger foundation for search engine positioning'],
      },
    ],
  },

  process: {
    label: 'Approach',
    title: 'First we improve the process, then we automate it',
    lead: 'Our process improvement experience keeps us from automating what does not work: every stage has a clear deliverable.',
    deliverable: 'Deliverable',
    steps: [
      { title: 'AS-IS assessment', description: 'We document how the process works today: times, owners and bottlenecks.', deliverable: 'Current process map and opportunities' },
      { title: 'TO-BE redesign', description: 'We simplify the flow, define rules and prioritize what to automate by impact.', deliverable: 'Redesigned process and roadmap' },
      { title: 'Automation', description: 'We build the system or automation in short iterations, with regular demos.', deliverable: 'Solution running in your operations' },
      { title: 'Measurement and continuous improvement', description: 'We track the agreed KPIs, train your team and fine-tune as needed.', deliverable: 'KPI dashboard and support' },
    ],
    whyTitle: 'Why work with JW Consultora',
    why: [
      { title: 'Direct access', text: 'You work with the team that designs and builds your solution, with no intermediaries.' },
      { title: 'Formal company', text: 'A company incorporated in Peru, with formal contracts and electronic invoicing.' },
      { title: 'Results-driven', text: 'Every delivery is tied to a concrete business process and indicator.' },
      { title: 'Ongoing support', text: 'Support after go-live and continuous evolution of your solution.' },
    ],
  },

  tech: {
    label: 'Technology',
    title: 'Ecosystems we master',
    lead: 'We work across Microsoft, Google and open platforms, and apply artificial intelligence where it creates real value for your operations.',
    area: 'Area',
    columns: ['Microsoft', 'Google', 'Open source and others'],
    rows: [
      {
        area: 'Automation and low-code',
        cells: [['Power Automate', 'Power Apps', 'Copilot Studio', 'Logic Apps'], ['Apps Script', 'AppSheet'], ['REST APIs', 'WhatsApp Business API']],
      },
      {
        area: 'Data and analytics',
        cells: [['Power BI', 'Microsoft Fabric', 'Data Factory', 'Azure SQL'], ['BigQuery', 'Looker Studio', 'Cloud SQL'], ['Databricks', 'Apache Spark', 'PostgreSQL']],
      },
      {
        area: 'Artificial intelligence',
        cells: [['Azure OpenAI', 'AI Document Intelligence (OCR)'], ['Gemini', 'Vertex AI', 'Document AI'], ['ML models with Python', 'RAG assistants']],
      },
      {
        area: 'Cloud and infrastructure',
        cells: [['Azure App Service', 'Azure Functions'], ['Cloud Run', 'Cloud Functions'], ['AWS (EC2, Lambda, S3)', 'Docker', 'Terraform']],
      },
      {
        area: 'Collaboration and productivity',
        cells: [['Microsoft 365', 'SharePoint', 'Dataverse'], ['Google Workspace', 'Gmail', 'Drive', 'Sheets', 'Forms'], []],
      },
      {
        area: 'Development and DevOps',
        cells: [['.NET', 'Azure DevOps'], [], ['Angular', 'Node.js', 'Python', 'TypeScript', 'GitHub Actions']],
      },
    ],
  },

  contact: {
    label: 'Contact',
    title: 'Let’s talk about your project',
    lead: 'We schedule a free assessment meeting and send you a proposal with scope, timeline and investment.',
    channels: {
      whatsapp: 'WhatsApp',
      email: 'Email',
      schedule: 'Business hours',
      scheduleValue: 'Monday to Friday, 9:00 to 18:00 (Lima time)',
      legal: 'Legal name',
      direct: 'Message us on WhatsApp',
    },
    formTitle: 'Proposal request',
    fields: {
      name: 'Full name',
      company: 'Company',
      email: 'Work email',
      phone: 'Phone',
      service: 'Service of interest',
      servicePlaceholder: 'Select an option',
      message: 'Project description',
      messagePlaceholder: 'Goals, processes involved, current systems…',
    },
    errors: {
      name: 'Enter your full name.',
      email: 'Enter a valid email.',
      phone: 'Enter a valid phone number.',
      service: 'Select a service.',
      message: 'Write at least 20 characters.',
      consent: 'We need your authorization to contact you.',
    },
    serviceOptions: [
      { id: 'process', label: 'Process improvement and automation' },
      { id: 'erp', label: 'ERP system / custom software' },
      { id: 'web', label: 'Website, landing page or app' },
      { id: 'bi', label: 'Data and analytics (Power BI / Looker Studio)' },
      { id: 'cloud', label: 'Cloud infrastructure (Azure / AWS / GCP)' },
      { id: 'workspace', label: 'Google Workspace and productivity' },
      { id: 'other', label: 'Other / general consulting' },
    ],
    consent: (legalName) => `I authorize ${legalName} to use this data solely to respond to my inquiry.`,
    submit: 'Send request via WhatsApp',
    emailAlt: 'Or email us',
    success: {
      title: 'Thank you, your request is ready',
      before: 'We opened WhatsApp with your message already written; just press',
      send: 'Send',
      after: 'If it did not open, email us at',
      again: 'Send another inquiry',
    },
    whatsappGreeting: 'Hello JW Consultora, I would like information about your services.',
    whatsappIntro: 'Hello JW Consultora, I would like to request a proposal.',
    whatsappLabels: { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', service: 'Service' },
  },

  footer: {
    cta: 'Have a project in mind? Let’s talk.',
    ctaButton: 'Request a proposal',
    tagline: 'Consulting in process improvement and automation, custom software, data analytics, Google Workspace and cloud.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
};
