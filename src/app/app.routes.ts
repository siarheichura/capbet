import { Routes } from '@angular/router';

export enum RoutesEnum {
  SignUp = 'sign-up',
  SignIn = 'sign-in',
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
    path: RoutesEnum.SignUp,
    loadComponent: () =>
      import('./features/sign-up/sign-up.component').then((c) => c.SignUpComponent),
  },
  {
    path: RoutesEnum.SignIn,
    loadComponent: () =>
      import('./features/sign-in/sign-in.component').then((c) => c.SignInComponent),
  },
  {
    path: RoutesEnum.Main,
    loadComponent: () =>
      import('./features/leagues/shell/leagues.component').then((c) => c.LeaguesComponent),
  },
  {
    path: `${RoutesEnum.League}/:id`,
    loadComponent: () =>
      import('~features/league/shell/league.component').then((c) => c.LeagueComponent),
  },

  // TODO: Add 404 page
  // { path: '**', component: PageNotFoundComponent }
];
