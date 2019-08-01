import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQuerySummaryDetailComponent } from './incident-query-summary-detail.component';

describe('IncidentQuerySummaryDetailComponent', () => {
  let component: IncidentQuerySummaryDetailComponent;
  let fixture: ComponentFixture<IncidentQuerySummaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQuerySummaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQuerySummaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
