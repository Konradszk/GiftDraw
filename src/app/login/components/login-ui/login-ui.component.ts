import { Component, OnInit } from '@angular/core';
import { LoginPresenter } from './login.presenter';

@Component({
  selector: 'gd-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss'],
  providers: [LoginPresenter]
})
export class LoginUiComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
