import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryPreIncidentSurveySummaryComponent } from './incident-query-pre-incident-survey-summary.component';

describe('IncidentQueryPreIncidentSurveySummaryComponent', () => {
  let component: IncidentQueryPreIncidentSurveySummaryComponent;
  let fixture: ComponentFixture<IncidentQueryPreIncidentSurveySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryPreIncidentSurveySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryPreIncidentSurveySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
