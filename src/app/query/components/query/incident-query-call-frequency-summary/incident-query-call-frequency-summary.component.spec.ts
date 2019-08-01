import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryCallFrequencySummaryComponent } from './incident-query-call-frequency-summary.component';

describe('IncidentQueryCallFrequencySummaryComponent', () => {
  let component: IncidentQueryCallFrequencySummaryComponent;
  let fixture: ComponentFixture<IncidentQueryCallFrequencySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryCallFrequencySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryCallFrequencySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
