import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { EVENTOS, EventoComunidade } from '../dados';
import { Icone } from '../icone';

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [RouterLink, Icone],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class PaginaEventos {
  readonly eventos = EVENTOS;
  readonly eventoExpandido = signal<string | null>(null);

  constructor() {
    inject(Title).setTitle('Eventos · AWS Student Group at UCB');
  }

  alternarDetalhes(id: string): void {
    this.eventoExpandido.update((atual) => (atual === id ? null : id));
  }

  formatarData(evento: EventoComunidade): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(`${evento.data}T12:00:00`));
  }
}
