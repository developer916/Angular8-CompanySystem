import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryMasterOccupancyInventoryComponent } from './incident-query-master-occupancy-inventory.component';

describe('IncidentQueryMasterOccupancyInventoryComponent', () => {
  let component: IncidentQueryMasterOccupancyInventoryComponent;
  let fixture: ComponentFixture<IncidentQueryMasterOccupancyInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryMasterOccupancyInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryMasterOccupancyInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
