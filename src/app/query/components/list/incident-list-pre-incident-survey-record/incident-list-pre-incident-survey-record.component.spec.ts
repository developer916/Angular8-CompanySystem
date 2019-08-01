import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListPreIncidentSurveyRecordComponent } from './incident-list-pre-incident-survey-record.component';

describe('IncidentListPreIncidentSurveyRecordComponent', () => {
  let component: IncidentListPreIncidentSurveyRecordComponent;
  let fixture: ComponentFixture<IncidentListPreIncidentSurveyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListPreIncidentSurveyRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListPreIncidentSurveyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
