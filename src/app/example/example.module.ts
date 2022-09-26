import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { EgComponent } from './eg/eg.component';
import { ExComponent } from './ex/ex.component';


@NgModule({
  declarations: [
    EgComponent,
    ExComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
