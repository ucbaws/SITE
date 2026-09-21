import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { Aplicacao } from './app/app';
import { rotas } from './app/app.routes';

bootstrapApplication(Aplicacao, {
  providers: [provideRouter(rotas, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }))]
}).catch(erro => console.error(erro));
