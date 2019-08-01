import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReviewToolbarComponent } from './incident-review-toolbar.component';

describe('IncidentReviewToolbarComponent', () => {
  let component: IncidentReviewToolbarComponent;
  let fixture: ComponentFixture<IncidentReviewToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentReviewToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentReviewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
