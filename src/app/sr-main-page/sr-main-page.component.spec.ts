import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrMainPageComponent } from './sr-main-page.component';

describe('SrMainPageComponent', () => {
  let component: SrMainPageComponent;
  let fixture: ComponentFixture<SrMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
