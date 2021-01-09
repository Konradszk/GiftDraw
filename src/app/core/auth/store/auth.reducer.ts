import { createReducer, on } from '@ngrx/store';
import { State, } from './index';
import * as authActions from './auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';

export const TOKEN_KEY = 'TOKEN';
const jwtHelper = new JwtHelperService();
export const initialState: State = {
  token: !!localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : undefined,
  authenticated: !!localStorage.getItem(TOKEN_KEY) ? !jwtHelper.isTokenExpired(localStorage.getItem(TOKEN_KEY)) : false
};


export const reducer = createReducer(
  initialState,
  on(authActions.setAuthenticated, state => ({ ...state, authenticated: true })),
  on(authActions.setToken, (state, action) => ({ ...state, token: action.token })),
  on(authActions.signOut, state => ({ ...state, token: undefined, authenticated: false, name: undefined }))
);


