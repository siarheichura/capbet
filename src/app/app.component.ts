import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbSpinnerModule,
  NbUserModule,
} from '@nebular/theme';
import { BetsStore } from './data-access/__bets/bets.store';
import { UserApiService } from './data-access/__user/api/user-api.service';
import { LeagueStore } from '~features/league/data-access/store/league';

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
export class AppComponent implements OnInit {
  #leagueStore = inject(LeagueStore);
  #userApiService = inject(UserApiService);

  ngOnInit() {
    this.#userApiService.user$.subscribe((user) => {
      // eslint-disable-next-line no-console
      console.log('user', user);
    });
  }

  isLoading = computed(() => this.#leagueStore.isLoading());
}
