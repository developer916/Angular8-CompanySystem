import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryAgencyMaintenanceUnitHoseComponent } from './incident-query-agency-maintenance-unit-hose.component';

describe('IncidentQueryAgencyMaintenanceUnitHoseComponent', () => {
  let component: IncidentQueryAgencyMaintenanceUnitHoseComponent;
  let fixture: ComponentFixture<IncidentQueryAgencyMaintenanceUnitHoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryAgencyMaintenanceUnitHoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryAgencyMaintenanceUnitHoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
