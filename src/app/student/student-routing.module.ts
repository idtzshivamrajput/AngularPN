import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEmployeeComponent } from '../employee/display-employee/display-employee.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  
  {
    path:"",
    component:StudentDisplayComponent
    },
    {
      path:"student_view/:id",
      component:ViewStudentComponent
      }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
