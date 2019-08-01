import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryControlledSubstanceAccountabilityComponent } from './incident-query-controlled-substance-accountability.component';

describe('IncidentQueryControlledSubstanceAccountabilityComponent', () => {
  let component: IncidentQueryControlledSubstanceAccountabilityComponent;
  let fixture: ComponentFixture<IncidentQueryControlledSubstanceAccountabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryControlledSubstanceAccountabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryControlledSubstanceAccountabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
