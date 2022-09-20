
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  

  constructor(private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activated.snapshot.paramMap.get('id')
    console.log(this.id)
   
  }

}
