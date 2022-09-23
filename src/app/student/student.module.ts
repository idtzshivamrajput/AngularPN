import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { StudentDisplayComponent } from './student-display/student-display.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentComponent } from './view-student/view-student.component';


@NgModule({
  declarations: [
    
    StudentDisplayComponent,
         ViewStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
  ],
  exports:[
    StudentDisplayComponent,
    ViewStudentComponent
  ]
})
export class StudentModule { }
