import { Component, EventEmitter, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'gd-sidebar-ui',
  templateUrl: './sidebar-u-i.component.html',
  styleUrls: ['./sidebar-u-i.component.scss']
})
export class SidebarUIComponent implements OnChanges, OnDestroy {

  @Input()
  public toggleMenu: EventEmitter<void>;

  @Input()
  public isLogged: boolean = false;

  @ViewChild('snav')
  public nav: MatSidenav;

  private readonly ngDestroy: Subject<void> = new Subject<void>();

  public ngOnChanges(changes: SimpleChanges) {
    if (changes?.toggleMenu?.isFirstChange()) {
      this.toggleMenu.pipe(takeUntil(this.ngDestroy)).subscribe(() => {
        this.nav.toggle();
      });
    }
  }

  public ngOnDestroy(): void {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  public close(): void {
    this.nav.close();
  }
}
