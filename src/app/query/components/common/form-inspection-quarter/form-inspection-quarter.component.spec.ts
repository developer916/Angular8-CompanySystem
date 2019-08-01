import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionQuarterComponent } from './form-inspection-quarter.component';

describe('FormInspectionQuarterComponent', () => {
  let component: FormInspectionQuarterComponent;
  let fixture: ComponentFixture<FormInspectionQuarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInspectionQuarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInspectionQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
