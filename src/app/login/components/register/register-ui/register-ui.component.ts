import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterPresenter } from './register.presenter';
import { FormGroup } from '@angular/forms';
import { RegisterDTO } from '../../../dto/register-dto';

@Component({
  selector: 'gd-register-ui',
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.scss'],
  providers: [RegisterPresenter]
})
export class RegisterUiComponent {

  @Output()
  public newUserData: EventEmitter<RegisterDTO> = new EventEmitter<RegisterDTO>();

  constructor(private readonly registerPresenter: RegisterPresenter) {
  }

  public get form(): FormGroup {
    return this.registerPresenter.form;
  }

  public submitData(): void {
    this.newUserData.emit({...this.form.value});
  }
}
