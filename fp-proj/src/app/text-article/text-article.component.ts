import { Component, OnInit } from '@angular/core';
import { BaseArticle } from '../base-article';

@Component({
  selector: 'app-text-article',
  templateUrl: './text-article.component.html',
  styleUrls: ['./text-article.component.scss'],
  providers:[{ provide: BaseArticle, useExisting: TextArticleComponent}]

})
export class TextArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  like() {
    console.log('I like text')
  }

}
