import { Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';
import { SumadoraPage } from './pages/sumadora/sumadora.page';
import { TraductorPage } from './pages/traductor/traductor.page';
import { TablaPage } from './pages/tabla/tabla.page';
import { ExperienciaPage } from './pages/experiencia/experiencia.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioPage,
  },
  {
    path: 'sumadora',
    component: SumadoraPage,
  },
  {
    path: 'traductor',
    component: TraductorPage,
  },
  {
    path: 'tabla',
    component: TablaPage,
  },
  {
    path: 'experiencia',
    component: ExperienciaPage,
  },
];