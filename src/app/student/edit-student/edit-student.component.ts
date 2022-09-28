import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  form:any;
  id:any;


  constructor(private student_service : StudentService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form=new FormGroup(
      title: new FormControl(''),
      body : new FormControl(''),

    })

    this.id = this.student_service.paramMap.get('id')
    //console.log(this.id)
    this.student_service.student_view(this.id).subscribe((res)=>{




    }

    
    

  }

  update(){
    this.student_service.updateblog(this.form.value,this.id).subscribe(res)=>{
    console.log(res);
    this.router.navigate(['/'])

   })
}
