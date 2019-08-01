import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditAgencyUnitsComponent } from './incident-edit-agency-units.component';

describe('IncidentEditAgencyUnitsComponent', () => {
  let component: IncidentEditAgencyUnitsComponent;
  let fixture: ComponentFixture<IncidentEditAgencyUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditAgencyUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditAgencyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
