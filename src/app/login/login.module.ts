import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainer } from './components/login/login-container';
import { LoginUiComponent } from './components/login/login-ui/login-ui.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterUiComponent } from './components/register/register-ui/register-ui.component';
import { RegisterContainer } from './components/register/register.container';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { LogoutUiComponent } from './components/logout/logout-ui/logout-ui.component';
import { LogoutContainer } from './components/logout/logout.container';


@NgModule({
  declarations: [LoginContainer, LoginUiComponent, RegisterUiComponent, RegisterContainer, LogoutUiComponent, LogoutContainer],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects]),
    SharedModule
  ],
})
export class LoginModule {
}
