import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NbCardModule } from '@nebular/theme';
import { RoutesEnum } from '../../../app.routes';
import { LeaguesStore } from '../data-access/store/leagues';

@Component({
  selector: 'cap-leagues',
  imports: [NbCardModule, NgOptimizedImage, RouterLink],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesComponent {
  readonly RoutesEnum = RoutesEnum;

  #store = inject(LeaguesStore);

  leagues = this.#store.leagues;
}
