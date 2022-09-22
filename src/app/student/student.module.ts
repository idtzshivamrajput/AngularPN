import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { StudentDisplayComponent } from './student-display/student-display.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
    StudentDisplayComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
  ],
  exports:[
    StudentDisplayComponent
  ]
})
export class StudentModule { }
