import { Component, OnInit } from '@angular/core';
import { FirstfiddleService } from '../firstfiddle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any

  constructor(private f:FirstfiddleService) { }

  ngOnInit(): void {
    this.name=this.f.name
    console.log(this.name)
    
  }

}
