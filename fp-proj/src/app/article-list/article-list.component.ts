import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles = [];
  constructor(private articleService: ArticlesService) {
    this.articleService.getArticles$().subscribe(a => this.articles = a)
  }

  ngOnInit() {
  }

}
