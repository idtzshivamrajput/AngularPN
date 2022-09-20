import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  myname:string='how to developer'
  mydate=new Date(2001,11,7);
  mynumber:number=67.44;
  mycurrency:number=6744;


  mydata:any[]=[
    {id:1,name:'vikas',city:'gwalior'},
    {id:2,name:'radha',city:'mmm'},
    {id:3,name:'chautna',city:'nnn'},
    {id:4,name:'ram',city:'lll'},
    {id:5,name:'ravan',city:'ppp'},
    ]

  ngOnInit(): void {
  }

}
