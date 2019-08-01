import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSummaryIncludesComponent } from './form-summary-includes.component';

describe('FormSummaryIncludesComponent', () => {
  let component: FormSummaryIncludesComponent;
  let fixture: ComponentFixture<FormSummaryIncludesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSummaryIncludesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSummaryIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
