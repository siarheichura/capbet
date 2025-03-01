import { Observable } from 'rxjs';
import { RoundEventsParams } from './api';
import { EventRestModel } from './models/event.rest-model';

export interface IApi {
  getRoundEvents(params: RoundEventsParams): Observable<EventRestModel>;
}
