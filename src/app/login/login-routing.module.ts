import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './components/login/login-container';
import { RegisterContainer } from './components/register/register.container';


const routes: Routes = [
  { path: 'login', component: LoginContainer },
  { path: 'register', component: RegisterContainer }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
