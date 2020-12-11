import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './components/password/password.component';


@NgModule({
  declarations: [InputComponent, PasswordComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    InputComponent,
    PasswordComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
