import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DrawDashboardUiComponent } from './components/draw-dashboard-ui/draw-dashboard-ui.component';

const routes: Routes = [
  {path: '', component: DrawDashboardUiComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawRoutingModule {
}
