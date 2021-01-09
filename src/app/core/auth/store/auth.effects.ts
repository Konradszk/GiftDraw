import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TOKEN_KEY } from './index';

@Injectable()
export class AuthEffects {

  public trySignIn$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.trySignIn),
      switchMap(action => this.authService.login(action.credentials).pipe(
        map(token => authActions.trySignInSuccess({ token, autoLogIn: action.autoLogIn })),
        catchError((error: HttpErrorResponse) => of(authActions.trySignInFailure({ error })))
      )),
    )
  );

  public trySignInSuccess$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.trySignInSuccess),
      tap(() => this.router.navigate(['/'])), // todo add condition on login-modal
      tap(action => {
        if (action.autoLogIn) {
          localStorage.setItem(TOKEN_KEY, action.token);
        }
      }),
      mergeMap(action => [
        authActions.setToken({ token: action.token }),
        authActions.setAuthenticated(),
        authActions.fetchCurrentUser()
      ])
    )
  );

  public trySignUp$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.trySignUp),
      switchMap(action => this.authService.register(action.credentials).pipe(
        map(token => authActions.trySignUpSuccess({ token, user: { name: action.credentials.name } })),
        catchError((error: HttpErrorResponse) => of(authActions.trySignUpFailure({ error })))
      )),
    )
  );

  public trySignUpSuccess$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.trySignUpSuccess),
      tap(() => this.router.navigate(['/'])),
      mergeMap(action => [
        authActions.setToken({ token: action.token }),
        authActions.setAuthenticated(),
        authActions.setUserDetails({ name: action.user.name })
      ])
    )
  );

  public signOut$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.signOut),
      tap(() => {
        localStorage.removeItem(TOKEN_KEY);
      })
    ), { dispatch: false }
  );

  public constructor(private readonly actions$: Actions,
                     private readonly authService: AuthService,
                     private readonly router: Router) {
  }

}
