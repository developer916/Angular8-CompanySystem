import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryHydrantInspectionSummaryComponent } from './incident-query-hydrant-inspection-summary.component';

describe('IncidentQueryHydrantInspectionSummaryComponent', () => {
  let component: IncidentQueryHydrantInspectionSummaryComponent;
  let fixture: ComponentFixture<IncidentQueryHydrantInspectionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryHydrantInspectionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryHydrantInspectionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
