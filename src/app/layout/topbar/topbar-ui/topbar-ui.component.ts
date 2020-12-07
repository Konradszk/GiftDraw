import { Component, EventEmitter, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gd-topbar-ui',
  templateUrl: './topbar-ui.component.html',
  styleUrls: ['./topbar-ui.component.scss']
})
export class TopbarUIComponent {

  public isMobile$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map(result => result.matches));

  public constructor(
    private readonly breakpointObserver: BreakpointObserver
  ) {
  }

  @Input()
  public toggleMenuEmitter: EventEmitter<void>;

  public toggleMenu(): void {
    this.toggleMenuEmitter.emit();
  }
}
