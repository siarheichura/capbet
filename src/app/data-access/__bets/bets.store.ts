import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { BetsApiService } from './bets-api.service';
import { AddBetParams } from './models/rest/add-bet-params.rest-model';
import { GetBetsParams } from './models/rest/get-bets-params.rest-model';
import { BetModel } from './models/state/bet.model';

export interface BetsState {
  bets: BetModel[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BetsState = {
  bets: [],
  isLoading: false,
  error: null,
};

export const BetsStore = signalStore(
  withState<BetsState>(initialState),

  withMethods((store, api = inject(BetsApiService)) => ({
    get: rxMethod<GetBetsParams>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((params) =>
          api.get(params).pipe(
            tapResponse({
              next: (bets) => patchState(store, { bets, error: null }),
              error: (error: HttpErrorResponse) =>
                patchState(store, { ...initialState, error: error.message }),
              finalize: () => patchState(store, { isLoading: false }),
            }),
          ),
        ),
      ),
    ),

    add: rxMethod<AddBetParams>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((params) =>
          api.add(params).pipe(
            tapResponse({
              next: (id) =>
                patchState(store, { bets: [...store.bets(), { ...params, id }], error: null }),
              error: (error: HttpErrorResponse) =>
                patchState(store, { ...initialState, error: error.message }),
              finalize: () => patchState(store, { isLoading: false }),
            }),
          ),
        ),
      ),
    ),

    remove: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((id) =>
          api.remove(id).pipe(
            tapResponse({
              next: () =>
                patchState(store, {
                  bets: [...store.bets().filter((bet) => bet.id !== id)],
                  error: null,
                }),
              error: (error: HttpErrorResponse) =>
                patchState(store, { ...initialState, error: error.message }),
              finalize: () => patchState(store, { isLoading: false }),
            }),
          ),
        ),
      ),
    ),

    update: rxMethod<{ id: string; data: Partial<AddBetParams> }>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((params) =>
          api.update(params.id, params.data).pipe(
            tapResponse({
              next: () =>
                patchState(store, {
                  bets: [
                    ...store
                      .bets()
                      .map((bet) => (bet.id === params.id ? { ...bet, ...params.data } : bet)),
                  ],
                  error: null,
                }),
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
