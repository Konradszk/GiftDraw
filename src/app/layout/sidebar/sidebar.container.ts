import { Component, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../login/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'gd-sidebar-container',
  templateUrl: './sidebar.container.html',
  styles: []
})
export class SidebarContainer {

  @Input()
  public toggleMenu: EventEmitter<void>;

  public isAuth$: Observable<boolean>;
  public constructor(
    private readonly store: Store<fromAuth.State>
  ) {
    this.isAuth$ = this.store.select(fromAuth.isAuthenticated);
  }
}
