import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDTO } from '../../dto/loginDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'gd-login-container',
  templateUrl: './login-container.html',
  styleUrls: ['./login-container.scss']
})

export class LoginContainer {

  public constructor(
    private readonly loginService: AuthService,
    private readonly router: Router) {
  }

  public signUpUser($event: LoginDTO): void {
    this.loginService.login({ ...$event }).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      }
    );
  }
}