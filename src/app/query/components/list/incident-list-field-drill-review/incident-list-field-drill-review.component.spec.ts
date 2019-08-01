import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListFieldDrillReviewComponent } from './incident-list-field-drill-review.component';

describe('IncidentListFieldDrillReviewComponent', () => {
  let component: IncidentListFieldDrillReviewComponent;
  let fixture: ComponentFixture<IncidentListFieldDrillReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListFieldDrillReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListFieldDrillReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
