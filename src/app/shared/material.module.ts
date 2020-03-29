import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules,
    CommonModule
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
