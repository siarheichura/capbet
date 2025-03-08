import { Routes } from '@angular/router';

export enum RoutesEnum {
  Main = 'leagues',
  League = 'league',
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.Main,
    pathMatch: 'full',
  },
  {
    path: RoutesEnum.Main,
    loadComponent: () =>
      import('./features/leagues/leagues.component').then((c) => c.LeaguesComponent),
  },
  {
    path: `${RoutesEnum.League}/:id`,
    loadComponent: () =>
      import('./features/league/league.component').then((c) => c.LeagueComponent),
  },

  // TODO: Add 404 page
  // { path: '**', component: PageNotFoundComponent }
];
