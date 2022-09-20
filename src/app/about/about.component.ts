import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id:any

  constructor(private g:ActivatedRoute) { }

  ngOnInit(): void {
   this.id=this.g.snapshot.paramMap.get('id')
    console.log(this.id)
  }

}
