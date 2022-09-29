import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { DisplayEmployeeComponent } from '../employee/display-employee/display-employee.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const r: Routes = [
  

  {
    path:"",
    component:StudentDisplayComponent
    },
    {
      path:"student_view/:id",
      component:ViewStudentComponent
    },
    {
     path: "edit_student/:id",      
     component:EditStudentComponent
    }

  


];

@NgModule({
  imports: [RouterModule.forChild(r)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
