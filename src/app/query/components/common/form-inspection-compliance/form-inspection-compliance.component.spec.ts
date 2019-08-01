import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionComplianceComponent } from './form-inspection-compliance.component';

describe('FormInspectionComplianceComponent', () => {
  let component: FormInspectionComplianceComponent;
  let fixture: ComponentFixture<FormInspectionComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInspectionComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInspectionComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
