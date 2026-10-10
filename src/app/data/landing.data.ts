/**
 * Datos que no dependen del idioma. Los textos traducibles viven en src/app/i18n.
 */
import type { IconName } from '../shared/icon.component';

export const COMPANY = {
  brand: 'JW Consultora',
  legalName: 'JW TECH CONSULTORA S.A.C.',
  ruc: '20616046072',
  email: 'jwconsultoraconsultora@gmail.com',
  whatsappNumber: '51907683585',
  whatsappDisplay: '+51 907 683 585',
} as const;

export const whatsappUrl = (text?: string): string =>
  `https://wa.me/${COMPANY.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export type ServiceId = 'process' | 'erp' | 'web' | 'bi' | 'cloud' | 'workspace' | 'other';

export const SERVICE_ICONS: Record<ServiceId, IconName> = {
  process: 'workflow',
  erp: 'building',
  web: 'device',
  bi: 'chart',
  cloud: 'cloud',
  workspace: 'grid',
  other: 'compass',
};

/** Empresas con las que hemos trabajado (se muestran como marcas tipográficas). */
export const CLIENTS = [
  { name: 'SEMI', suffix: 'Perú' },
  { name: 'ITB', suffix: 'Perú' },
];
