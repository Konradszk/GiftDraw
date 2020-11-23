import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarUIComponent } from './topbar/topbar-ui/topbar-ui.component';
import { SidebarUIComponent } from './sidebar/sidebar-ui/sidebar-u-i.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SidebarContainer } from './sidebar/sidebar.container';
import { TopbarContainer } from './topbar/topbar.container';


@NgModule({
  declarations: [TopbarUIComponent, SidebarContainer, SidebarUIComponent, TopbarContainer],
  exports: [
    TopbarUIComponent,
    TopbarContainer,
    SidebarContainer
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule {
}
