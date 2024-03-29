import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalizationModule } from './internationalization/internationalization.module';
import { errorIfModuleAlreadyLoaded } from './error-if-module-already-loaded';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    AuthModule,
    InternationalizationModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    errorIfModuleAlreadyLoaded(parentModule, 'Core');
  }
}
