import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../login/store';

import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';

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
