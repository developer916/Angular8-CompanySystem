import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListHazmatReportsComponent } from './incident-list-hazmat-reports.component';

describe('IncidentListHazmatReportsComponent', () => {
  let component: IncidentListHazmatReportsComponent;
  let fixture: ComponentFixture<IncidentListHazmatReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListHazmatReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListHazmatReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
