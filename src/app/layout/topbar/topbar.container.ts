import { Component, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../core/auth/store';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gd-topbar-container',
  templateUrl: './topbar.container.html',
  styles: []
})
export class TopbarContainer {

  public toggleMenu: EventEmitter<void> = new EventEmitter<void>();
  public isLogged$: Observable<boolean> = this.store.select(fromAuth.isAuthenticated);
  public isMobile$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map(result => result.matches));

  public constructor(private readonly store: Store<fromAuth.State>,
                     private readonly breakpointObserver: BreakpointObserver
  ) {
  }
}
