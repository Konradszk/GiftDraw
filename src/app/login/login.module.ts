import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainer } from './components/login/login-container';
import { LoginUiComponent } from './components/login/login-ui/login-ui.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterUiComponent } from './components/register/register-ui/register-ui.component';
import { RegisterContainer } from './components/register/register.container';


@NgModule({
  declarations: [LoginContainer, LoginUiComponent, RegisterUiComponent, RegisterContainer],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
})
export class LoginModule {
}
