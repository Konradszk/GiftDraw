import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainer } from './components/login-container';
import { LoginUiComponent } from './components/login-ui/login-ui.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginContainer, LoginUiComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
})
export class LoginModule {
}
