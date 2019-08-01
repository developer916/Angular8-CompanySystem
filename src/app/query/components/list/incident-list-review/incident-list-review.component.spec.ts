import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListReviewComponent } from './incident-list-review.component';

describe('IncidentListReviewComponent', () => {
  let component: IncidentListReviewComponent;
  let fixture: ComponentFixture<IncidentListReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
