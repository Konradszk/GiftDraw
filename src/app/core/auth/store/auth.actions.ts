import { createAction, props } from '@ngrx/store';
import { LoginDTO } from '../../../login/dto/loginDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterDTO } from '../../../login/dto/register-dto';

export const trySignIn = createAction('[Auth/API] Try sign in by xhr', props<{ credentials: LoginDTO, autoLogIn: boolean }>());
export const trySignInSuccess = createAction('[Auth/API] Try sign in, succeeded', props<{ token: string, autoLogIn: boolean }>());
export const trySignInFailure = createAction('[Auth/API] Try sign in, failed', props<{ error: HttpErrorResponse }>());
export const setToken = createAction('[Auth]', props<{ token: string }>());
export const setAuthenticated = createAction('[Auth] Set authenticated');

export const trySignUp = createAction('[Auth/API] Try sign up by xhr', props<{ credentials: RegisterDTO }>());
export const trySignUpSuccess = createAction('[Auth/API] Try sign up, succeeded', props<{ token: string, user: { name: string } }>());
export const trySignUpFailure = createAction('[Auth/API] Try sign up, failed', props<{ error: HttpErrorResponse }>());

export const fetchCurrentUser = createAction('[Auth/API] Fetch current user data');
export const fetchCurrentUserSuccess = createAction('[Auth/API] Fetch current user data was successful');
export const fetchCurrentUserFailure = createAction('[Auth/API] Fetch current user data was failed', props<{ error: HttpErrorResponse }>());
export const setUserDetails = createAction('[Auth] Set information about user', props<{ name: string }>()); // todo add dto when backend do

export const signOut = createAction('[Auth] sign out');
