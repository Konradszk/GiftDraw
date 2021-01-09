import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../core/auth/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'gd-logout-container',
  template: `
    <gd-logout-ui></gd-logout-ui>`,
  styleUrls: []
})
export class LogoutContainer implements OnInit {

  public constructor(
    private readonly store: Store<fromAuth.State>) {
  }

  public ngOnInit(): void {
    const delayDispatch = new Observable(
      e => e.next())
      .pipe(delay(500))
      .subscribe(() => {
        this.store.dispatch(fromAuth.actions.signOut());
        delayDispatch.unsubscribe();
      });
  }
}
