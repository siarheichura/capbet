import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule } from '@nebular/theme';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyAVnyqAsb9RJ2U41rmK18rNcVg4ObNBt_w',
  authDomain: 'cap-bet.firebaseapp.com',
  projectId: 'cap-bet',
  storageBucket: 'cap-bet.firebasestorage.app',
  messagingSenderId: '318126262494',
  appId: '1:318126262494:web:20fefa67721fc4dee19a4f',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    importProvidersFrom([NbThemeModule.forRoot(), NbEvaIconsModule]),
  ],
};
