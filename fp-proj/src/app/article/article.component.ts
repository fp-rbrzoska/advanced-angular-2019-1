import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  showFullArticle = false;
  @Input() article;
  constructor() {
  }

  ngOnInit() {
  }
  toggle() {
    this.showFullArticle = !this.showFullArticle;
  }

}
