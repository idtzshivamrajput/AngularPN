import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  form:any;

  constructor(private emp_service:EmployeeService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl(''),
      description:new FormControl(''),
      body:new FormControl(''),

    }

    )
  }


    addemp(){
      // console.log(this.form.value);
      this.emp_service.emp_insert(this.form.value).subscribe((res)=>{
        console.log(res);
      }

      )
    }

}

