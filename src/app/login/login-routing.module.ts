import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './components/login/login-container';
import { RegisterContainer } from './components/register/register.container';
import { LogoutContainer } from './components/logout/logout.container';


const routes: Routes = [
  { path: 'login', component: LoginContainer },
  { path: 'register', component: RegisterContainer },
  { path: 'logout', component: LogoutContainer }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
