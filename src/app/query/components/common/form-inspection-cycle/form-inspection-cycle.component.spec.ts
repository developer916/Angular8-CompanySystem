import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionCycleComponent } from './form-inspection-cycle.component';

describe('FormInspectionCycleComponent', () => {
  let component: FormInspectionCycleComponent;
  let fixture: ComponentFixture<FormInspectionCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInspectionCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInspectionCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
