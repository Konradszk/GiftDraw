import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'gd-sidebar-container',
  templateUrl: './sidebar.container.html',
  styles: []
})
export class SidebarContainer {

  @Input()
  public toggleMenu: EventEmitter<void>;
}
