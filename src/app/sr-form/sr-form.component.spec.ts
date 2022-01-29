import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrFormComponent } from './sr-form.component';

describe('SrFormComponent', () => {
  let component: SrFormComponent;
  let fixture: ComponentFixture<SrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
