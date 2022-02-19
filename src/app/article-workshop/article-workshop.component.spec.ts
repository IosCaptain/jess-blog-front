import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWorkshopComponent } from './article-workshop.component';

describe('ArticleWorkshopComponent', () => {
  let component: ArticleWorkshopComponent;
  let fixture: ComponentFixture<ArticleWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
