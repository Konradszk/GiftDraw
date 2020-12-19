import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './components/login/login-container';
import { RegisterContainer } from './components/register/register.container';
import { LogoutContainer } from './components/logout/logout.container';
import { AuthGuard } from '../core/auth/guard/auth.guard';
import { guardMode } from '../core/auth';


const routes: Routes = [
  {
    path: 'login', component: LoginContainer,
    canActivate: [AuthGuard],
    data: {
      mode: guardMode.notLogged,
      loggedRedirect: '/'
    }
  },
  { path: 'register', component: RegisterContainer,
    canActivate: [AuthGuard],
    data: {
      mode: guardMode.notLogged,
      loggedRedirect: '/'
    }},
  { path: 'logout', component: LogoutContainer }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
