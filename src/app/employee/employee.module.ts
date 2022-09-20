import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AddEmployeeComponent,
    DisplayEmployeeComponent,
    EditEmployeeComponent,
    EditEmployeeComponent,
    DisplayEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[
AddEmployeeComponent,
DisplayEmployeeComponent,
EditEmployeeComponent
  ]
})
export class EmployeeModule { }
