import { Injectable, signal } from '@angular/core';
import { ServiceId } from '../data/landing.data';

/** Permite que las tarjetas de servicio preseleccionen el servicio del formulario. */
@Injectable({ providedIn: 'root' })
export class ContactIntentService {
  readonly selectedService = signal<ServiceId | null>(null);
}
