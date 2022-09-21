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
  form: any;
  viewemp: any
  viewemparray: any

  constructor(private emp_service: EmployeeService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      body: new FormControl(''),
    }
    )
    this.emp_service.view_emp().subscribe((res) => {
      console.log(res)
      this.viewemp = res
      this.viewemparray = this.viewemp.getall
      console.log(this.viewemparray);
    })

  }
  display_add_emp() {//addemp
    // console.log(this.form.value);
    this.emp_service.emp_insert(this.form.value).subscribe((res) => {
      console.log(res);
    }

    )
  }

}

