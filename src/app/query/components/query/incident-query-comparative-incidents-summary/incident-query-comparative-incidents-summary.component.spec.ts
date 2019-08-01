import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryComparativeIncidentsSummaryComponent } from './incident-query-comparative-incidents-summary.component';

describe('IncidentQueryComparativeIncidentsSummaryComponent', () => {
  let component: IncidentQueryComparativeIncidentsSummaryComponent;
  let fixture: ComponentFixture<IncidentQueryComparativeIncidentsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryComparativeIncidentsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryComparativeIncidentsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
