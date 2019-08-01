import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditAgencyMaintenanceUnitHoseComponent } from './incident-edit-agency-maintenance-unit-hose.component';

describe('IncidentEditAgencyMaintenanceUnitHoseComponent', () => {
  let component: IncidentEditAgencyMaintenanceUnitHoseComponent;
  let fixture: ComponentFixture<IncidentEditAgencyMaintenanceUnitHoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditAgencyMaintenanceUnitHoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditAgencyMaintenanceUnitHoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
