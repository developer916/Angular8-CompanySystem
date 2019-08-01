import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditAgencyMaintenanceUnitsComponent } from './incident-edit-agency-maintenance-units.component';

describe('IncidentEditAgencyMaintenanceUnitsComponent', () => {
  let component: IncidentEditAgencyMaintenanceUnitsComponent;
  let fixture: ComponentFixture<IncidentEditAgencyMaintenanceUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditAgencyMaintenanceUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditAgencyMaintenanceUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
