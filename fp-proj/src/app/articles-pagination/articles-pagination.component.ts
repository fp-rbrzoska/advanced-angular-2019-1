import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-articles-pagination',
  templateUrl: './articles-pagination.component.html',
  styleUrls: ['./articles-pagination.component.scss']
})
export class ArticlesPaginationComponent implements OnInit {
  pageNumbers = [];
  @Input() initialPage;
  @Input()
  set totalPages(pages) {
    for(let i = 1; i<= pages; i++) {
      this.pageNumbers.push(i)
    }
  };
  @Output() pageChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
