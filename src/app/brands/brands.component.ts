import { Component, OnInit } from '@angular/core';
import { ItmService } from '../itm.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  data:any
  naam:any
 

  constructor(private a:ItmService  ) { }

  ngOnInit(): void {
    this.naam=this.a.mydata;
    this.data=this.a.students
    
  }

}
