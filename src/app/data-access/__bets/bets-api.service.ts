import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { AddBetParams } from './models/rest/add-bet-params.rest-model';
import { GetBetsParams } from './models/rest/get-bets-params.rest-model';
import { BetModel } from './models/state/bet.model';

@Injectable({ providedIn: 'root' })
export class BetsApiService {
  readonly #API_KEY = 'bets';

  #firestore = inject(Firestore);

  #betsCollection = collection(this.#firestore, this.#API_KEY);

  get(params: GetBetsParams): Observable<BetModel[]> {
    const betsQuery = query(
      this.#betsCollection,
      where('leagueId', '==', params.leagueId),
      where('round', '==', params.round),
    );

    return collectionData(betsQuery, { idField: 'id' }) as Observable<BetModel[]>;
  }

  add(params: AddBetParams): Observable<string> {
    const promise = addDoc(this.#betsCollection, params).then((res) => res.id);

    return from(promise);
  }

  remove(id: string): Observable<void> {
    const docRef = doc(this.#betsCollection, `${this.#API_KEY}/${id}`);

    const promise = deleteDoc(docRef);

    return from(promise);
  }

  update(id: string, data: Partial<AddBetParams>): Observable<void> {
    const docRef = doc(this.#betsCollection, `${this.#API_KEY}/${id}`);
    const promise = setDoc(docRef, { ...data });

    return from(promise);
  }
}
