import { ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import * as authReducer from './auth.reducer';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import * as fromAuthActions from './auth.actions';

export const authFeatureKey = 'auth';
export const TOKEN_KEY = authReducer.TOKEN_KEY;

export interface State {
  token?: string;
  name?: string;
  authenticated: boolean;
}

export const reducers: ActionReducer<State> = authReducer.reducer;

export const actions = fromAuthActions;

export const getAuthStore: MemoizedSelector<object, State> = createFeatureSelector<State>(authFeatureKey);
export const getToken: MemoizedSelector<State, string> = createSelector(getAuthStore, (state: State) => state.token);
export const isAuthenticated: MemoizedSelector<State, boolean> = createSelector(getAuthStore, (state: State) => state.authenticated);
