import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryAgencyStationsComponent } from './incident-query-agency-stations.component';

describe('IncidentQueryAgencyStationsComponent', () => {
  let component: IncidentQueryAgencyStationsComponent;
  let fixture: ComponentFixture<IncidentQueryAgencyStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryAgencyStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryAgencyStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
