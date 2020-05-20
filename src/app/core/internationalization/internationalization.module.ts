import { Inject, LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { GdTranslationLoader } from './gd-translation-loader';
import { errorIfModuleAlreadyLoaded } from '../error-if-module-already-loaded';
import { jitLocaleProvider } from './jit-locale.provider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: GdTranslationLoader
      },
    })
  ],
  providers: [
    jitLocaleProvider
  ]
})
export class InternationalizationModule {
  constructor(
    @Optional() @SkipSelf() parentModule: InternationalizationModule,
    @Inject(LOCALE_ID) locale: string,
    translate: TranslateService) {
    errorIfModuleAlreadyLoaded(parentModule, 'Internationalization');
    translate.use(locale);
  }
}
