import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalizationModule } from './internationalization/internationalization.module';
import { errorIfModuleAlreadyLoaded } from './error-if-module-already-loaded';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InternationalizationModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    errorIfModuleAlreadyLoaded(parentModule, 'Core');
  }
}
