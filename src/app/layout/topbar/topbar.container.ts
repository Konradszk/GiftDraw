import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'gd-topbar-container',
  templateUrl: './topbar.container.html',
  styles: []
})
export class TopbarContainer {

  public toggleMenu: EventEmitter<void> = new EventEmitter<void>();
}
