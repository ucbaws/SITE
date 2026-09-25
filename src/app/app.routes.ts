import { Routes } from '@angular/router';
import { PaginaInicial } from './pages/inicio';

export const rotas: Routes = [
  { path: '', component: PaginaInicial, title: 'AWS Student Builder Group UCB | Construir em comunidade' },
  { path: 'eventos', loadComponent: () => import('./pages/eventos').then(modulo => modulo.PaginaEventos), title: 'Eventos | AWS Student Builder Group UCB' },
  { path: 'fotos', loadComponent: () => import('./pages/fotos').then(modulo => modulo.PaginaFotos), title: 'Fotos | AWS Student Builder Group UCB' },
  { path: 'sobre', loadComponent: () => import('./pages/sobre').then(modulo => modulo.PaginaSobre), title: 'Quem somos | AWS Student Builder Group UCB' },
  { path: '**', loadComponent: () => import('./pages/pagina-nao-encontrada').then(modulo => modulo.PaginaNaoEncontrada), title: 'Página não encontrada | AWS Student Builder Group UCB' }
];
