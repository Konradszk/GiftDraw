import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginPresenter {
  constructor(private readonly formBuilder: FormBuilder) {
  }

  public form: FormGroup = this.formBuilder.group({
    login: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required),
    autoLogIn: new FormControl()
  });
}
