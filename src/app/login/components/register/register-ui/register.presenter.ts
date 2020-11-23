import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../../../validators/password-validator';

@Injectable()
export class RegisterPresenter {
  constructor(private readonly formBuilder: FormBuilder) {
  }

  public form: FormGroup = this.formBuilder.group({
    login: new FormControl(undefined, [Validators.required, Validators.minLength(5)]),
    password: new FormControl(undefined, [Validators.required, Validators.minLength(4)]),
    confirmedPassword: new FormControl(undefined, Validators.required),
    name: new FormControl(undefined, [Validators.required, Validators.minLength(3)])
  }, {validator: PasswordValidation.MatchPassword});
}
