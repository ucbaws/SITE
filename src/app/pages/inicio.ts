import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EQUIPE } from '../dados';
import { Icone } from '../icone';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icone],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class PaginaInicial {
  readonly equipe = EQUIPE;
}
