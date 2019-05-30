import { Component, OnInit, Optional } from '@angular/core';
import { BaseArticle } from '../base-article';
import { ArticleFrameComponent } from '../article-frame/article-frame.component';

@Component({
  selector: 'app-image-article',
  templateUrl: './image-article.component.html',
  styleUrls: ['./image-article.component.scss'],
  providers:[{ provide: BaseArticle, useExisting: ImageArticleComponent}]
})
export class ImageArticleComponent implements OnInit, BaseArticle {

  constructor( @Optional() private parent: ArticleFrameComponent  ) {
    if (!parent){
      console.error('Use this component only in article frame')
    }
  }

  ngOnInit() {
  }

  like() {
    console.log('i like image')
  }
}
