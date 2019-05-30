import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageArticleComponent } from './image-article.component';

describe('ImageArticleComponent', () => {
  let component: ImageArticleComponent;
  let fixture: ComponentFixture<ImageArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
