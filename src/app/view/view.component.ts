import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any;

  constructor( private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activated.snapshot.paramMap.get('id')
   console.log(this.id);
    
  }

}
