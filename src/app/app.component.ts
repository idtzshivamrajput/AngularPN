import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPN';
  students:any[]=[
    {id:1,name:'shibbu',age:30,email:'asdf'},
    {id:2,name:'pundu',age:88,email:'zxcv'},
    {id:3,name:'abba',age:77,email:'qwert'},
    {id:4,name:'jabba',age:11,email:'squirt'},
    {id:4,name:'dabba',age:71,email:'ggt'},

  ]
}
