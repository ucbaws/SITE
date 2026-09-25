import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALBUNS } from '../dados';
import { Icone } from '../icone';

@Component({
  selector: 'app-photos-page',
  imports: [RouterLink, Icone],
  templateUrl: './fotos.html',
  styleUrl: './fotos.css',
})
export class PaginaFotos {
  readonly albuns = ALBUNS;
}
