import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryReadOnlyUnitStatusComponent } from './incident-query-read-only-unit-status.component';

describe('IncidentQueryReadOnlyUnitStatusComponent', () => {
  let component: IncidentQueryReadOnlyUnitStatusComponent;
  let fixture: ComponentFixture<IncidentQueryReadOnlyUnitStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryReadOnlyUnitStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryReadOnlyUnitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
