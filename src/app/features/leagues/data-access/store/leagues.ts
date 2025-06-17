import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { LeagueIdEnum } from '../enums/league-id';
import { LeagueModel } from '../models/league';

export interface LeaguesState {
  leagues: LeagueModel[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LeaguesState = {
  leagues: [],
  isLoading: false,
  error: null,
};

export const LeaguesStore = signalStore(
  { providedIn: 'root' },

  withState<LeaguesState>(initialState),

  withMethods((store) => ({
    getLeagues() {
      const leagues = [
        {
          idLeague: LeagueIdEnum.EnglishPremierLeague,
          strLeague: 'Premier League',
          strLeagueBadge:
            'https://www.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png',
          rounds: 38,
        },

        // TODO: in next step...
        // {
        //   idLeague: LeagueIdEnum.SpanishLaLiga,
        //   strLeague: 'La Liga',
        //   strLeagueBadge: 'https://www.thesportsdb.com/images/media/league/badge/ja4it51687628717.png',
        //   rounds: 38,
        // },
        // {
        //   idLeague: LeagueIdEnum.UefaChampionsLeague,
        //   strLeague: 'UEFA Champions League',
        //   strLeagueBadge: 'https://www.thesportsdb.com/images/media/league/badge/5y7gsj1678720262.png',
        // },
      ];

      patchState(store, { leagues });
    },
  })),

  withHooks({
    onInit(store) {
      store.getLeagues();
    },
  }),
);
