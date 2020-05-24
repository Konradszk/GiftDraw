import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './login/components/login-container';


const routes: Routes = [
  { path: '', redirectTo: 'draw', pathMatch: 'full' },
  { path: 'draw', loadChildren: () => import('./draw/draw.module').then(m => m.DrawModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
