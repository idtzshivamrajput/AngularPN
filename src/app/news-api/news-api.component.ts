import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css']
})
export class NewsApiComponent implements OnInit {
  news:any;
  news_array:any;

  constructor(private  news_u:ApiService ) { }

  ngOnInit(): void {
    this.news_u.newsdata().subscribe((res)=>{
    
      this.news=res
      this.news_array=this.news.articles
      console.log(this.news_array);
    })
  }

}
