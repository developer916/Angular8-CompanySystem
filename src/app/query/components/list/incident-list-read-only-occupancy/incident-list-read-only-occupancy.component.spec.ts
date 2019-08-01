import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListReadOnlyOccupancyComponent } from './incident-list-read-only-occupancy.component';

describe('IncidentListReadOnlyOccupancyComponent', () => {
  let component: IncidentListReadOnlyOccupancyComponent;
  let fixture: ComponentFixture<IncidentListReadOnlyOccupancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListReadOnlyOccupancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListReadOnlyOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
