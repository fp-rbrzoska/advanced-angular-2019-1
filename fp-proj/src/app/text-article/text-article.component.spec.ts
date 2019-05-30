import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArticleComponent } from './text-article.component';

describe('TextArticleComponent', () => {
  let component: TextArticleComponent;
  let fixture: ComponentFixture<TextArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
