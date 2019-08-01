import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAgencyMaintenanceUnitsComponent } from './incident-list-agency-maintenance-units.component';

describe('IncidentListAgencyMaintenanceUnitsComponent', () => {
  let component: IncidentListAgencyMaintenanceUnitsComponent;
  let fixture: ComponentFixture<IncidentListAgencyMaintenanceUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAgencyMaintenanceUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAgencyMaintenanceUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
