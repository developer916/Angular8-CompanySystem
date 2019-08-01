import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAgencyMaintenanceUnitHoseComponent } from './incident-list-agency-maintenance-unit-hose.component';

describe('IncidentListAgencyMaintenanceUnitHoseComponent', () => {
  let component: IncidentListAgencyMaintenanceUnitHoseComponent;
  let fixture: ComponentFixture<IncidentListAgencyMaintenanceUnitHoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAgencyMaintenanceUnitHoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAgencyMaintenanceUnitHoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
