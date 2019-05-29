import { Component, OnInit } from '@angular/core';
import { ArticlesService, Page } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles:Page<any> = {
    totalPages: 0,
    data: []
  };
  constructor(private articleService: ArticlesService) {
    this.articleService.getArticles$().subscribe(a => this.articles = a)
  }

  ngOnInit() {
  }

  getNewPage(page) {
    this.articleService.getArticles$(page).subscribe(a => this.articles = a)
  }

}
