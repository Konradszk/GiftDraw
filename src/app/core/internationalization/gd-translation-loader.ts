import { Observable, of } from 'rxjs';
import { translation } from '../../../assets/i18n/translation';
import { TranslateLoader } from '@ngx-translate/core';

export class GdTranslationLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<object> {
    return of(translation[lang]);
  }
}
