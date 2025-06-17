import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventRestModel } from '~features/league/data-access/api/models/event';
import { RoundEventsRestModel } from '~features/league/data-access/api/models/round-events';

export interface RoundEventsParams {
  leagueId: string;
  round: number;
  season: string;
}

@Injectable({ providedIn: 'root' })
export class LeagueApiService {
  readonly #API_URL = 'https://www.thesportsdb.com/';

  #http = inject(HttpClient);

  // Next and past event for Premier League (4328)
  // [free limit is 1]
  //
  // 'https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4328'
  // 'https://www.thesportsdb.com/api/v1/json/123/eventspastleague.php?id=4328'

  getRoundEvents(params: RoundEventsParams): Observable<EventRestModel[]> {
    return this.#http
      .get<RoundEventsRestModel>(
        `${this.#API_URL}/api/v1/json/3/eventsround.php?id=${params.leagueId}&r=${params.round}&s=${params.season}`,
      )
      .pipe(map((res) => res.events));
  }
}
