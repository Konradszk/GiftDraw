import { Component } from '@angular/core';
import { RegisterDTO } from '../../dto/register-dto';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'gd-register-container',
  template: `
    <gd-register-ui (newUserData)="signIn($event)"></gd-register-ui>
  `,
  styleUrls: []
})
export class RegisterContainer {

  constructor(private readonly authService: AuthService,
              private readonly router: Router) {
  }

  public signIn(dto: RegisterDTO) {
    this.authService.register(dto).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
}
