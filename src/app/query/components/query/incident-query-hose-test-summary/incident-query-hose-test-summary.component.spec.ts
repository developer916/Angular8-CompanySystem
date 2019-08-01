import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryHoseTestSummaryComponent } from './incident-query-hose-test-summary.component';

describe('IncidentQueryHoseTestSummaryComponent', () => {
  let component: IncidentQueryHoseTestSummaryComponent;
  let fixture: ComponentFixture<IncidentQueryHoseTestSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryHoseTestSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryHoseTestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
