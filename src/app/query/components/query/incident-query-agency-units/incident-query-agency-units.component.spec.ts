import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryAgencyUnitsComponent } from './incident-query-agency-units.component';

describe('IncidentQueryAgencyUnitsComponent', () => {
  let component: IncidentQueryAgencyUnitsComponent;
  let fixture: ComponentFixture<IncidentQueryAgencyUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryAgencyUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryAgencyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
