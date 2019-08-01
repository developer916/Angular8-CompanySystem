import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryOccupancyStructureSystemComponent } from './incident-query-occupancy-structure-system.component';

describe('IncidentQueryOccupancyStructureSystemComponent', () => {
  let component: IncidentQueryOccupancyStructureSystemComponent;
  let fixture: ComponentFixture<IncidentQueryOccupancyStructureSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryOccupancyStructureSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryOccupancyStructureSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
