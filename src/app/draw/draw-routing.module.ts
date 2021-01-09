import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DrawDashboardContainer } from './components/draw-dashboard/draw-dashboard.container';
import { DrawHomeUiComponent } from './components/draw-home/draw-home-ui.component';
import { AuthGuard } from '../core/auth/guard/auth.guard';
import { guardMode } from '../core/auth';
import { DrawCreateContainer } from './components/draw-create/draw-create.container';
import { DrawDetailsContainer } from './components/draw-details/draw-details.container';

const routes: Routes = [
  {
    path: '', component: DrawHomeUiComponent,
    canActivate: [AuthGuard],
    data: {
      mode: guardMode.notLogged,
      loggedRedirect: '/draw/own'
    }
  },
  { path: 'own', component: DrawDashboardContainer, canActivate: [AuthGuard] },
  { path: 'create', component: DrawCreateContainer, canActivate: [AuthGuard] },
  { path: 'details', component: DrawDetailsContainer }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawRoutingModule {
}
