import { Component, ContentChild, OnInit } from '@angular/core';
import { ImageArticleComponent } from '../image-article/image-article.component';
import { BaseArticle } from '../base-article';

@Component({
  selector: 'app-article-frame',
  templateUrl: './article-frame.component.html',
  styleUrls: ['./article-frame.component.scss']
})
export class ArticleFrameComponent implements OnInit {

  @ContentChild(BaseArticle) child;

  ngOnInit(): void {
  }

}
