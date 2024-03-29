import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'gd-topbar-ui',
  templateUrl: './topbar-ui.component.html',
  styleUrls: ['./topbar-ui.component.scss']
})
export class TopbarUIComponent {


  @Input()
  public toggleMenuEmitter: EventEmitter<void>;

  @Input()
  public isLogged: boolean = false;

  @Input()
  public isMobile: boolean = false;

  public toggleMenu(): void {
    this.toggleMenuEmitter.emit();
  }
}
