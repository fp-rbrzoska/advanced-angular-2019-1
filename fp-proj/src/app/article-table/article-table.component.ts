import { AfterContentChecked, AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.scss']
})
export class ArticleTableComponent implements OnInit {

  @ViewChildren(ArticleComponent) articlesComponents: QueryList<ArticleComponent>;
  @Input() articles = [];


  ngOnInit() {
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.articlesComponents.first.toggle();
    })
  }

}
