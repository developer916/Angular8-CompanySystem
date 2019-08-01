import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryControlledSubstanceDrugControlNumberComponent } from './incident-query-controlled-substance-drug-control-number.component';

describe('IncidentQueryControlledSubstanceDrugControlNumberComponent', () => {
  let component: IncidentQueryControlledSubstanceDrugControlNumberComponent;
  let fixture: ComponentFixture<IncidentQueryControlledSubstanceDrugControlNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryControlledSubstanceDrugControlNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryControlledSubstanceDrugControlNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
