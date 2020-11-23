import { AfterContentInit, Component, EventEmitter, ViewChild } from '@angular/core';
import { TopbarContainer } from './layout/topbar/topbar.container';

@Component({
  selector: 'gd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild(TopbarContainer, { static: true })
  public topbar: TopbarContainer;

  public toggleMenu: EventEmitter<void> = new EventEmitter<void>();

  public ngAfterContentInit(): void {
    this.toggleMenu = this.topbar.toggleMenu;
  }


}
