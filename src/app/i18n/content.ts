import { ServiceId } from '../data/landing.data';
import type { IconName } from '../shared/icon.component';

/** Estructura de todos los textos de la landing; cada idioma la implementa completa. */

export interface SectionCopy {
  label: string;
  title: string;
  lead: string;
}

export interface ServiceCopy {
  id: ServiceId;
  title: string;
  description: string;
  features: string[];
}

export interface CaseCopy {
  title: string;
  client: string;
  sector?: string;
  type: string;
  challenge: string;
  solution: string;
  /** Lo que se entregó (módulos, componentes). */
  scope: string[];
  results: string[];
  /** Cifras clave; solo en el caso destacado. */
  highlights?: { value: string; label: string }[];
}

export interface SiteContent {
  meta: { title: string; description: string };

  nav: {
    links: { id: string; label: string }[];
    cta: string;
    skip: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
    language: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    panel: { title: string; items: { icon: IconName; title: string; text: string }[]; clients: string };
    facts: { ruc: string; locationValue: string };
    ecosystems: { label: string; items: string[] };
  };

  clients: { label: string };

  services: SectionCopy & { cta: string; items: ServiceCopy[] };

  projects: SectionCopy & {
    client: string;
    sector: string;
    type: string;
    challenge: string;
    solution: string;
    scope: string;
    results: string;
    featured: string;
    cases: CaseCopy[];
  };

  process: SectionCopy & {
    deliverable: string;
    steps: { title: string; description: string; deliverable: string }[];
    whyTitle: string;
    why: { title: string; text: string }[];
  };

  /** Matriz: filas por área, columnas por ecosistema (Microsoft, Google, otros). */
  tech: SectionCopy & {
    area: string;
    columns: [string, string, string];
    rows: { area: string; cells: [string[], string[], string[]] }[];
  };

  contact: SectionCopy & {
    channels: { whatsapp: string; email: string; schedule: string; scheduleValue: string; legal: string; direct: string };
    formTitle: string;
    fields: { name: string; company: string; email: string; phone: string; service: string; servicePlaceholder: string; message: string; messagePlaceholder: string };
    errors: { name: string; email: string; phone: string; service: string; message: string; consent: string };
    serviceOptions: { id: ServiceId; label: string }[];
    consent: (legalName: string) => string;
    submit: string;
    emailAlt: string;
    success: { title: string; before: string; send: string; after: string; again: string };
    whatsappGreeting: string;
    whatsappIntro: string;
    whatsappLabels: { name: string; company: string; email: string; phone: string; service: string };
  };

  footer: {
    cta: string;
    ctaButton: string;
    tagline: string;
    services: string;
    company: string;
    contact: string;
    rights: string;
  };
}
