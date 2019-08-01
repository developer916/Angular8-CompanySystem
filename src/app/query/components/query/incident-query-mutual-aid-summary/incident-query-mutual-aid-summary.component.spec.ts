import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryMutualAidSummaryComponent } from './incident-query-mutual-aid-summary.component';

describe('IncidentQueryMutualAidSummaryComponent', () => {
  let component: IncidentQueryMutualAidSummaryComponent;
  let fixture: ComponentFixture<IncidentQueryMutualAidSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryMutualAidSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryMutualAidSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
