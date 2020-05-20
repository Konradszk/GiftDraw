import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID } from '@angular/core';

const LOCALE = 'pl';
registerLocaleData(localePl, LOCALE);

export const jitLocaleProvider = {
  provide: LOCALE_ID,
  useValue: LOCALE
};


