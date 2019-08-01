import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditAgencyStationsComponent } from './incident-edit-agency-stations.component';

describe('IncidentEditAgencyStationsComponent', () => {
  let component: IncidentEditAgencyStationsComponent;
  let fixture: ComponentFixture<IncidentEditAgencyStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditAgencyStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditAgencyStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
