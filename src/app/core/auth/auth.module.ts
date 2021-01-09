import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import * as fromAuth from './store';

import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';

export function jwtOptionsFactory(store: Store) {
  return {
    tokenGetter: () => {
      return store.select(fromAuth.getToken).pipe(first()).toPromise();
    },
    allowedDomains: [environment.apiUrl]
  };
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects]),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Store]
      }
    })
  ]
})
export class AuthModule {
}
