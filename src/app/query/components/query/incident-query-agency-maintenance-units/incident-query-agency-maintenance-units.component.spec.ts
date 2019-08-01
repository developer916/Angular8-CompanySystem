import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryAgencyMaintenanceUnitsComponent } from './incident-query-agency-maintenance-units.component';

describe('IncidentQueryAgencyMaintenanceUnitsComponent', () => {
  let component: IncidentQueryAgencyMaintenanceUnitsComponent;
  let fixture: ComponentFixture<IncidentQueryAgencyMaintenanceUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryAgencyMaintenanceUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryAgencyMaintenanceUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
