import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { LeagueApiService, RoundEventsParams } from './league-api.service';
import { EventModel } from './models/state/event.model';

export interface LeagueState {
  events: EventModel[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LeagueState = {
  events: [],
  isLoading: false,
  error: null,
};

export const LeagueStore = signalStore(
  withState<LeagueState>(initialState),

  withMethods((store, api = inject(LeagueApiService)) => ({
    getRoundEvents: rxMethod<RoundEventsParams>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((params) =>
          api.getRoundEvents(params).pipe(
            tapResponse({
              next: (events) => patchState(store, { events, error: null }),
              error: (error: HttpErrorResponse) =>
                patchState(store, { ...initialState, error: error.message }),
              finalize: () => patchState(store, { isLoading: false }),
            }),
          ),
        ),
      ),
    ),
  })),
);
