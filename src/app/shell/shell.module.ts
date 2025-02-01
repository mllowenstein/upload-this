import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../common/material';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShellModule {}
