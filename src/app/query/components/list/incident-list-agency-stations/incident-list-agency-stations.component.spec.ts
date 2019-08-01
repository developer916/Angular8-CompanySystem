import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAgencyStationsComponent } from './incident-list-agency-stations.component';

describe('IncidentListAgencyStationsComponent', () => {
  let component: IncidentListAgencyStationsComponent;
  let fixture: ComponentFixture<IncidentListAgencyStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAgencyStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAgencyStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
