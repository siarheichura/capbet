import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApi } from './api.interface';
import { EventRestModel } from './models/event.rest-model';

export interface RoundEventsParams {
  leagueId: string;
  round: number;
  season: string;
}

@Injectable({ providedIn: 'root' })
export class Api implements IApi {
  readonly #API_URL = 'https://www.thesportsdb.com/';

  #http = inject(HttpClient);

  getRoundEvents(params: RoundEventsParams): Observable<EventRestModel> {
    return this.#http.get<EventRestModel>(
      `${this.#API_URL}/api/v1/json/3/eventsround.php?id=${params.leagueId}&r=${params.round}&s=${params.season}`,
    );
  }
}
