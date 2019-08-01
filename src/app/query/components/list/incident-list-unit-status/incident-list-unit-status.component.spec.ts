import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListUnitStatusComponent } from './incident-list-unit-status.component';

describe('IncidentListUnitStatusComponent', () => {
  let component: IncidentListUnitStatusComponent;
  let fixture: ComponentFixture<IncidentListUnitStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListUnitStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListUnitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
