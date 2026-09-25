import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    @switch (name()) {
      @case ('arrow') { <path d="M5 12h14m-6-6 6 6-6 6"/> }
      @case ('diagonal') { <path d="M6 18 18 6M6 6h12v12"/> }
      @case ('close') { <path d="m6 6 12 12M6 18 18 6"/> }
      @case ('menu') { <path d="M4 6h16M4 12h16M4 18h16"/> }
      @case ('calendar') { <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18m-13 5h2m4 0h2"/> }
      @case ('pin') { <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/> }
      @case ('clock') { <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/> }
      @case ('linkedin') { <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/> }
      @case ('instagram') { <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/> }
      @case ('github') { <path d="M9 19c-4.4 1.4-4.4-2.5-6-3m12 6v-3.6a3.1 3.1 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.5S17.6 1.8 15 4a11 11 0 0 0-6 0C6.4 1.8 5.3 2.2 5.3 2.2a4.8 4.8 0 0 0-.1 3.5A5.2 5.2 0 0 0 3.8 9.3c0 5.2 3.1 6.4 6.1 6.7A3.1 3.1 0 0 0 9 18.4V22"/> }
    }
  </svg>`,
  styles: [':host{display:inline-flex;width:1.25rem;height:1.25rem;flex-shrink:0;vertical-align:middle}svg{width:100%;height:100%}']
})
export class Icone {
  readonly name = input('arrow');
}
