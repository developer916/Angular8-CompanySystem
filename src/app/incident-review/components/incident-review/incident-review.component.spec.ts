import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReviewComponent } from './incident-review.component';

describe('IncidentReviewComponent', () => {
  let component: IncidentReviewComponent;
  let fixture: ComponentFixture<IncidentReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
