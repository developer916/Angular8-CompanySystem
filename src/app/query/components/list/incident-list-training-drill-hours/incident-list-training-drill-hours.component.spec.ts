import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListTrainingDrillHoursComponent } from './incident-list-training-drill-hours.component';

describe('IncidentListTrainingDrillHoursComponent', () => {
  let component: IncidentListTrainingDrillHoursComponent;
  let fixture: ComponentFixture<IncidentListTrainingDrillHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListTrainingDrillHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListTrainingDrillHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
