import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryInspectionViolationSummaryComponent } from './incident-query-inspection-violation-summary.component';

describe('IncidentQueryInspectionViolationSummaryComponent', () => {
  let component: IncidentQueryInspectionViolationSummaryComponent;
  let fixture: ComponentFixture<IncidentQueryInspectionViolationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryInspectionViolationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryInspectionViolationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
