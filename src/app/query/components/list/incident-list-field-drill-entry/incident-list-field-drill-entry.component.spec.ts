import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListFieldDrillEntryComponent } from './incident-list-field-drill-entry.component';

describe('IncidentListFieldDrillEntryComponent', () => {
  let component: IncidentListFieldDrillEntryComponent;
  let fixture: ComponentFixture<IncidentListFieldDrillEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListFieldDrillEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListFieldDrillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
