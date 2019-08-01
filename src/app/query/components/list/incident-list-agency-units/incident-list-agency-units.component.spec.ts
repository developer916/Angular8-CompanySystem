import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAgencyUnitsComponent } from './incident-list-agency-units.component';

describe('IncidentListAgencyUnitsComponent', () => {
  let component: IncidentListAgencyUnitsComponent;
  let fixture: ComponentFixture<IncidentListAgencyUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAgencyUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAgencyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
