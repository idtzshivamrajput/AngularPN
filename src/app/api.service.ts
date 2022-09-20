import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="https://jsonplaceholder.typicode.com/posts"
  url1="https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=3426bff64f12431c9637ea475338e088"

  constructor(private http: HttpClient) { }
  alldata(){
    return this.http.get(this.url)

  }
  newsdata(){
    return this.http.get(this.url1)

  }
 
}
