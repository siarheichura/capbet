import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbSpinnerModule,
  NbUserModule,
} from '@nebular/theme';
import { BetsStore } from './data-access/__bets/bets.store';
import { LeagueStore } from './data-access/__league/league.store';

@Component({
  selector: 'cap-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NbLayoutModule,
    NbUserModule,
    NbCardModule,
    NbActionsModule,
    RouterOutlet,
    RouterLink,
    NbSpinnerModule,
  ],
  providers: [BetsStore, LeagueStore],
})
export class AppComponent {
  #leagueStore = inject(LeagueStore);

  isLoading = computed(() => this.#leagueStore.isLoading());
}
