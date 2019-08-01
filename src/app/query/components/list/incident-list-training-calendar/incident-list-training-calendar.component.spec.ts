import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListTrainingCalendarComponent } from './incident-list-training-calendar.component';

describe('IncidentListTrainingCalendarComponent', () => {
  let component: IncidentListTrainingCalendarComponent;
  let fixture: ComponentFixture<IncidentListTrainingCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListTrainingCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListTrainingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
