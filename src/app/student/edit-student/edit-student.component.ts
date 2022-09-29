import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  form: any;
  id: any;
  editdata: any;


  constructor(private student_service: StudentService, private route: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),

    })

    this.id = this.route.snapshot.paramMap.get('id')
    //console.log(this.id)
    this.student_service.view_student(this.id).subscribe((res) => {
      this.editdata = res
      // console.log(this.editdata)

      this.form.patchValue({
        title: this.editdata.title,
        body: this.editdata.body
      })
    })



  }

  update() {
    this.student_service.updateblog(this.form.value, this.id).subscribe(res => {
      console.log(res);
      this.r.navigate(['/'])

    })
  }
  }
