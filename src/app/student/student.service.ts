import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url="https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.url+'posts')
  }

  view_student(){
    return this.http.get(this.url+'posts/'+id)
  }
  updateblog(data:any,id:any){
    return this.http
  }


}
