import { Component } from '@angular/core';
import { RegisterDTO } from '../../dto/register-dto';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../../core/auth/store';

@Component({
  selector: 'gd-register-container',
  template: `
    <gd-register-ui (newUserData)="signIn($event)"></gd-register-ui>
  `,
  styleUrls: []
})
export class RegisterContainer {

  constructor(private readonly store: Store<fromAuth.State>) {
  }

  public signIn(dto: RegisterDTO) {
    this.store.dispatch(fromAuth.actions.trySignUp({ credentials: dto }));
  }
}
