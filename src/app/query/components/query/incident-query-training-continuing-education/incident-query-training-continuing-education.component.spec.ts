import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryTrainingContinuingEducationComponent } from './incident-query-training-continuing-education.component';

describe('IncidentQueryTrainingContinuingEducationComponent', () => {
  let component: IncidentQueryTrainingContinuingEducationComponent;
  let fixture: ComponentFixture<IncidentQueryTrainingContinuingEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryTrainingContinuingEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryTrainingContinuingEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
