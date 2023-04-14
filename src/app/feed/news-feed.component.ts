import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './news';

@Component({
  selector: 'feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class FeedComponent implements OnInit {

  news: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.loadFeed().subscribe(content => this.news = content);
  }
}
