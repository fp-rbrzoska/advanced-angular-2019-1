import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-articles-pagination',
  templateUrl: './articles-pagination.component.html',
  styleUrls: ['./articles-pagination.component.scss']
})
export class ArticlesPaginationComponent implements OnInit {

  @Input() initialPage;
  @Input() totalPages;
  @Output() pageChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
