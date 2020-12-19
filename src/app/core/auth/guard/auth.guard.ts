import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../../login/store';
import { first, map } from 'rxjs/operators';
import { GUARD_MODE } from '../index';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(
    private readonly store: Store<fromAuth.State>,
    private readonly router: Router,
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const currentMode: GUARD_MODE = route.data.mode || 'AUTH';
    const loggedRedirect: string = route.data.loggedRedirect;

    return this.store.select(fromAuth.isAuthenticated).pipe(
      first(),
      map(value => currentMode === 'AUTH' ? this.auth(value) : this.notLogged(value, loggedRedirect))
    );

  }

  private notLogged(value: boolean, loggedRedirect: string): boolean {
    if (value) {
      const route = loggedRedirect || '/';
      this.router.navigate([route]);
    }

    return !value;
  }

  private auth(value: boolean): boolean {
    if (!value) {
      this.router.navigate(['/login']);
      // todo add toast ?
    }

    return value;
  }
}
