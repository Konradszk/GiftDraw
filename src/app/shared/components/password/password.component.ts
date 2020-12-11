import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gd-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  @Input()
  public control: FormControl;

  @Input()
  public placeholder: string;

  @Input()
  public hint: string;

  public hide: boolean = true;


}
