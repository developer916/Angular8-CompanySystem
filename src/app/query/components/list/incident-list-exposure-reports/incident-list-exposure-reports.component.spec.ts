import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListExposureReportsComponent } from './incident-list-exposure-reports.component';

describe('IncidentListExposureReportsComponent', () => {
  let component: IncidentListExposureReportsComponent;
  let fixture: ComponentFixture<IncidentListExposureReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListExposureReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListExposureReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
