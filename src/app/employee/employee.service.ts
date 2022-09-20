import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url='https://young-spire-25464.herokuapp.com/api/pn/'

  constructor(private http:HttpClient) { }

  emp_insert(all_emp:any){
    return this.http.post(this.url+'bloginsert',all_emp)
  }

  add_emp_insert(all_add_emp:any){
    return this.http.post(this.url+'bloginsert',all_add_emp)
  }
}
