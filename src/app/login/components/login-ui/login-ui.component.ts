import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import { FormGroup } from '@angular/forms';
import { LoginDTO } from '../../dto/loginDTO';

@Component({
  selector: 'gd-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss'],
  providers: [LoginPresenter]
})
export class LoginUiComponent implements OnInit {

  @Output()
  public loginData: EventEmitter<LoginDTO> = new EventEmitter<LoginDTO>();

  constructor(private readonly loginPresenter: LoginPresenter) {
  }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    return this.loginPresenter.form;
  }

  public submitData(): void {
    this.loginData.emit(this.loginPresenter.form.value);
  }
}
