import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPaginationComponent } from './articles-pagination.component';

describe('ArticlesPaginationComponent', () => {
  let component: ArticlesPaginationComponent;
  let fixture: ComponentFixture<ArticlesPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
