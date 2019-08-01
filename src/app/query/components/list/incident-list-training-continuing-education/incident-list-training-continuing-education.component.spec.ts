import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListTrainingContinuingEducationComponent } from './incident-list-training-continuing-education.component';

describe('IncidentListTrainingContinuingEducationComponent', () => {
  let component: IncidentListTrainingContinuingEducationComponent;
  let fixture: ComponentFixture<IncidentListTrainingContinuingEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListTrainingContinuingEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListTrainingContinuingEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
