import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListControlledSubstanceAccountabilityComponent } from './incident-list-controlled-substance-accountability.component';

describe('IncidentListControlledSubstanceAccountabilityComponent', () => {
  let component: IncidentListControlledSubstanceAccountabilityComponent;
  let fixture: ComponentFixture<IncidentListControlledSubstanceAccountabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListControlledSubstanceAccountabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListControlledSubstanceAccountabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
