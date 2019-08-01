import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListMasterOccupancyComponent } from './incident-list-master-occupancy.component';

describe('IncidentListMasterOccupancyComponent', () => {
  let component: IncidentListMasterOccupancyComponent;
  let fixture: ComponentFixture<IncidentListMasterOccupancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListMasterOccupancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListMasterOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
