import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryControlledSubstanceDailyUsageComponent } from './incident-query-controlled-substance-daily-usage.component';

describe('IncidentQueryControlledSubstanceDailyUsageComponent', () => {
  let component: IncidentQueryControlledSubstanceDailyUsageComponent;
  let fixture: ComponentFixture<IncidentQueryControlledSubstanceDailyUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryControlledSubstanceDailyUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryControlledSubstanceDailyUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
