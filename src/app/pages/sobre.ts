import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { COMUNIDADE, EQUIPE } from '../dados';
import { Icone } from '../icone';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink, Icone],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class PaginaSobre {
  readonly comunidade = COMUNIDADE;
  readonly equipe = EQUIPE;

  constructor() {
    inject(Title).setTitle('Quem somos · AWS Student Group at UCB');
  }
}
