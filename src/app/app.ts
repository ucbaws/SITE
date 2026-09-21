import { Component, ElementRef, HostListener, ViewChild, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { COMUNIDADE } from './dados';
import { Icone } from './icone';

type PreferenciasAcessibilidade = {
  textoMaior: boolean;
  altoContraste: boolean;
  reduzirAnimacoes: boolean;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Icone],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class Aplicacao {
  @ViewChild('dialogoAcessibilidade')
  dialogoAcessibilidade!: ElementRef<HTMLDialogElement>;

  readonly comunidade = COMUNIDADE;
  readonly menuAberto = signal(false);
  readonly introducaoVisivel = signal(false);
  readonly preferencias = signal<PreferenciasAcessibilidade>({
    textoMaior: false,
    altoContraste: false,
    reduzirAnimacoes: false,
  });

  private readonly roteador = inject(Router);
  private ultimaRota = '';
  private elementoAcionador?: HTMLElement;

  constructor() {
    if (typeof window !== 'undefined') {
      this.carregarPreferencias();
      const usuarioPrefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!usuarioPrefereMenosMovimento && !this.preferencias().reduzirAnimacoes) {
        this.introducaoVisivel.set(true);
        window.setTimeout(() => this.introducaoVisivel.set(false), 1900);
      }
    }

    this.roteador.events.pipe(takeUntilDestroyed()).subscribe((evento) => {
      if (!(evento instanceof NavigationEnd)) return;

      this.menuAberto.set(false);
      if (this.dialogoAcessibilidade?.nativeElement.open) {
        this.dialogoAcessibilidade.nativeElement.close();
      }

      const rotaAtual = evento.urlAfterRedirects.split(/[?#]/)[0];
      if (this.ultimaRota && rotaAtual !== this.ultimaRota) {
        requestAnimationFrame(() =>
          document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true }),
        );
      }
      this.ultimaRota = rotaAtual;
    });
  }

  private carregarPreferencias(): void {
    try {
      const dadosSalvos = JSON.parse(localStorage.getItem('aws-ucb-preferences') || '{}');
      this.preferencias.set({
        textoMaior: !!(dadosSalvos.textoMaior ?? dadosSalvos.largeText),
        altoContraste: !!(dadosSalvos.altoContraste ?? dadosSalvos.highContrast),
        reduzirAnimacoes: !!(dadosSalvos.reduzirAnimacoes ?? dadosSalvos.reduceMotion),
      });
    } catch {
      // Dados inválidos são ignorados e as preferências padrão permanecem ativas.
    }
    this.aplicarPreferencias();
  }

  private aplicarPreferencias(): void {
    const raiz = document.documentElement;
    raiz.dataset['largeText'] = String(this.preferencias().textoMaior);
    raiz.dataset['highContrast'] = String(this.preferencias().altoContraste);
    raiz.dataset['reduceMotion'] = String(this.preferencias().reduzirAnimacoes);
  }

  definirPreferencia(nome: keyof PreferenciasAcessibilidade, valor: boolean): void {
    this.preferencias.update((atuais) => ({ ...atuais, [nome]: valor }));
    localStorage.setItem('aws-ucb-preferences', JSON.stringify(this.preferencias()));
    this.aplicarPreferencias();
  }

  abrirAcessibilidade(acionador?: HTMLElement): void {
    this.elementoAcionador = acionador || (document.activeElement as HTMLElement);
    this.dialogoAcessibilidade.nativeElement.showModal();
    document.body.style.overflow = 'hidden';
  }

  fecharDialogo(dialogo: HTMLDialogElement): void {
    dialogo.close();
  }

  fecharAoClicarFora(evento: MouseEvent, dialogo: HTMLDialogElement): void {
    if (evento.target === dialogo) dialogo.close();
  }

  restaurarRolagem(): void {
    document.body.style.overflow = '';
    this.elementoAcionador?.focus();
  }

  @HostListener('document:keydown.escape')
  aoPressionarEscape(): void {
    this.menuAberto.set(false);
  }
}
