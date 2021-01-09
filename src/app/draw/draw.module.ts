import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawRoutingModule } from './draw-routing.module';
import { DrawDashboardUiComponent } from './components/draw-dashboard/draw-dashboard-ui/draw-dashboard-ui.component';
import { DrawDashboardContainer } from './components/draw-dashboard/draw-dashboard.container';
import { DrawHomeUiComponent } from './components/draw-home/draw-home-ui.component';
import { DrawCreateUiComponent } from './components/draw-create/draw-create-ui/draw-create-ui.component';
import { DrawCreateContainer } from './components/draw-create/draw-create.container';
import { DrawDetailsUiComponent } from './components/draw-details/draw-details-ui/draw-details-ui.component';
import { DrawDetailsContainer } from './components/draw-details/draw-details.container';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DrawDashboardUiComponent,
    DrawDashboardContainer,
    DrawHomeUiComponent,
    DrawCreateUiComponent,
    DrawCreateContainer,
    DrawDetailsUiComponent,
    DrawDetailsContainer
  ],
  imports: [
    CommonModule, DrawRoutingModule, SharedModule
  ],
  providers: []
})
export class DrawModule {
}
