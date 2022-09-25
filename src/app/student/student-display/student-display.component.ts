import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {
  data: any;
  Form: any;


  constructor(private t: StudentService) { }

  ngOnInit(): void {



    this.t.getdata().subscribe((res) => {
      //console.log(res)
      this.data = res
    })

  }


}
