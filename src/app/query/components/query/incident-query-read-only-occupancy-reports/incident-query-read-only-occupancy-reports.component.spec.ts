import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryReadOnlyOccupancyReportsComponent } from './incident-query-read-only-occupancy-reports.component';

describe('IncidentQueryReadOnlyOccupancyReportsComponent', () => {
  let component: IncidentQueryReadOnlyOccupancyReportsComponent;
  let fixture: ComponentFixture<IncidentQueryReadOnlyOccupancyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryReadOnlyOccupancyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryReadOnlyOccupancyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
