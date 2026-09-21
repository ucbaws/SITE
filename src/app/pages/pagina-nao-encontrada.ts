import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icone } from '../icone';

@Component({
  selector: 'app-pagina-nao-encontrada',
  imports: [RouterLink, Icone],
  template: `
    <section class="container missing-page">
      <p class="eyebrow">ERRO 404 · ROTA NÃO ENCONTRADA</p>
      <h1 tabindex="-1">
        Até boas ideias<br>
        podem <span class="blue-text">mudar de caminho.</span>
      </h1>
      <p>Essa página não existe. Vamos voltar para onde as conexões acontecem?</p>
      <a routerLink="/" class="button primary">
        Voltar para o início
        <app-icon name="arrow" />
      </a>
    </section>
  `,
  styles: [`
    .missing-page { padding-block: 100px; }
    .missing-page h1 {
      max-width: 800px;
      margin: 25px 0;
      font-size: clamp(36px, 5vw, 60px);
      line-height: 1.2;
      letter-spacing: -2px;
    }
    .missing-page > p:not(.eyebrow) {
      margin-bottom: 30px;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.8;
    }
  `],
})
export class PaginaNaoEncontrada {}
