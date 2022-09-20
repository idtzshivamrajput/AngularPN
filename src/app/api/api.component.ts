import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data:any;
  news_array:any;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.alldata().subscribe((res)=>{
    
    this.data=res
    
    console.log(this.data);
  })
  
  }

}
