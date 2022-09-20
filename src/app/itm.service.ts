import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItmService {
  mydata='shivam bhoi';//service use


  constructor() { }
  students:any[]=[
    {id:1,name:'shibbu',age:30,email:'asdf'},
    {id:2,name:'pundu',age:88,email:'zxcv'},
    {id:3,name:'abba',age:77,email:'qwert'},
    {id:4,name:'jabba',age:11,email:'squirt'},
    {id:4,name:'dabba',age:71,email:'ggt'},

  ]
}
