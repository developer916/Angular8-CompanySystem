import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListReviewControlledSubstanceInventoryComponent } from './incident-list-review-controlled-substance-inventory.component';

describe('IncidentListReviewControlledSubstanceInventoryComponent', () => {
  let component: IncidentListReviewControlledSubstanceInventoryComponent;
  let fixture: ComponentFixture<IncidentListReviewControlledSubstanceInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListReviewControlledSubstanceInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListReviewControlledSubstanceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
