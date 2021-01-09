import { Component } from '@angular/core';
import { LoginData } from '../../dto/loginDTO';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../core/auth/store';

@Component({
  selector: 'gd-login-container',
  templateUrl: './login-container.html',
  styleUrls: ['./login-container.scss']
})

export class LoginContainer {

  public constructor(
    private readonly store: Store<fromAuth.State>) {
  }

  public signUpUser(data: LoginData): void {
    this.store.dispatch(fromAuth.actions.trySignIn({
      credentials: { login: data.login, password: data.password },
      autoLogIn: data.autoLogIn
    }));
  }
}
