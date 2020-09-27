import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('confirmedPassword').value;
    if (password !== confirmPassword) {
      AC.get('confirmedPassword').setErrors({ MismatchedPassword: true });
    } else {
      return null;
    }
  }
}
