import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  NbActionsModule,
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
} from '@nebular/theme';
import { debounceTime } from 'rxjs';
import { LeagueStore } from '~features/league/data-access/store/league';
import { EventComponent } from '~features/league/ui/event/event.component';

@Component({
  selector: 'cap-league',
  imports: [
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule,
    NbButtonGroupModule,
    EventComponent,
  ],
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueComponent implements OnInit {
  #store = inject(LeagueStore);
  #route = inject(ActivatedRoute);

  roundControl = new FormControl<number>(1, { nonNullable: true });

  leagueId = '';

  events = computed(() => this.#store.events());

  ngOnInit() {
    this.leagueId = this.#route.snapshot.params['id'];

    this.#getRoundEvents(this.roundControl.value);

    this.roundControl.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.#getRoundEvents(value);
    });
  }

  handlePrevRoundButtonClick() {
    this.roundControl.setValue(this.roundControl.value - 1);
  }

  handleNextRoundButtonClick() {
    this.roundControl.setValue(this.roundControl.value + 1);
  }

  #getRoundEvents(round: number) {
    this.#store.getRoundEvents({
      leagueId: this.leagueId,
      round,
      season: '2024-2025',
    });
  }
}
