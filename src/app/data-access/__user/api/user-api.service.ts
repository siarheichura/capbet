import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { UserModel } from '../models/state/user';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  #firebaseAuth = inject(Auth);

  user$ = user(this.#firebaseAuth);

  user = signal<UserModel | null>(null);

  signUp(data: { email: string; username: string; password: string }): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.#firebaseAuth,
      data.email,
      data.password,
    ).then((res) => {
      void updateProfile(res.user, { displayName: data.username });
    });

    return from(promise);
  }

  signIn(data: { email: string; password: string }): Observable<void> {
    const promise = signInWithEmailAndPassword(this.#firebaseAuth, data.email, data.password).then(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
    );

    return from(promise);
  }

  signOut(): Observable<void> {
    const promise = signOut(this.#firebaseAuth);

    return from(promise);
  }
}
