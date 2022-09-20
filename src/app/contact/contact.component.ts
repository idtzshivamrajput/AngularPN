import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data:any;

  constructor( private a :TeamService) { }

  ngOnInit(): void {
    this.data=this.a.students
  }

}
