import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReviewStatusComponent } from './form-status.component';

describe('FormStatusComponent', () => {
  let component: FormReviewStatusComponent;
  let fixture: ComponentFixture<FormReviewStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReviewStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReviewStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
