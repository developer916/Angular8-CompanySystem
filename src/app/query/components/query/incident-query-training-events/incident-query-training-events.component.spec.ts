import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryTrainingEventsComponent } from './incident-query-training-events.component';

describe('IncidentQueryTrainingEventsComponent', () => {
  let component: IncidentQueryTrainingEventsComponent;
  let fixture: ComponentFixture<IncidentQueryTrainingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryTrainingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryTrainingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
