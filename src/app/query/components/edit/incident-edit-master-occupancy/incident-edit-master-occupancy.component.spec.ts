import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditMasterOccupancyComponent } from './incident-edit-master-occupancy.component';

describe('IncidentEditMasterOccupancyComponent', () => {
  let component: IncidentEditMasterOccupancyComponent;
  let fixture: ComponentFixture<IncidentEditMasterOccupancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditMasterOccupancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditMasterOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
