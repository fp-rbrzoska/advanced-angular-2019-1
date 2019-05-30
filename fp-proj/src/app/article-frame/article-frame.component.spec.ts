import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFrameComponent } from './article-frame.component';

describe('ArticleFrameComponent', () => {
  let component: ArticleFrameComponent;
  let fixture: ComponentFixture<ArticleFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
