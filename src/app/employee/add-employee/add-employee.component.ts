import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form:any
  viewemp:any
  viewemparray:any

  constructor(private empaddservice : EmployeeService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title:new FormControl(''),
      description:new FormControl(''),
      body:new FormControl('')
    })
  

    this.empaddservice.add_emp_insert(this.form.value).subscribe((res)=>{
      //console.log(res)
      this.viewemp=res
      this.viewemparray=this.viewemp.getall
      console.log(this.viewemparray);
    })
  }
    add_comp_emp(){

      this.empaddservice.add_emp_insert(this.form.value).subscribe((res)=>{
        console.log(res)
      })

    }
      

}
