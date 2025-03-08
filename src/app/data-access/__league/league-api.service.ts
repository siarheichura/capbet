import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventRestModel } from './models/rest/event.rest-model';
import { RoundEventsRestModel } from './models/rest/round-events.rest-model';

export interface RoundEventsParams {
  leagueId: string;
  round: number;
  season: string;
}

@Injectable({ providedIn: 'root' })
export class LeagueApiService {
  readonly #API_URL = 'https://www.thesportsdb.com/';

  #http = inject(HttpClient);

  getRoundEvents(params: RoundEventsParams): Observable<EventRestModel[]> {
    return this.#http
      .get<RoundEventsRestModel>(
        `${this.#API_URL}/api/v1/json/3/eventsround.php?id=${params.leagueId}&r=${params.round}&s=${params.season}`,
      )
      .pipe(map((res) => res.events));
  }
}
