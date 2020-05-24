import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawRoutingModule } from './draw-routing.module';
import { DrawDashboardUiComponent } from './components/draw-dashboard-ui/draw-dashboard-ui.component';


@NgModule({
  declarations: [DrawDashboardUiComponent],
  imports: [
    CommonModule, DrawRoutingModule
  ],
  providers: []
})
export class DrawModule {
}
