import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryFieldDrillEntryComponent } from './incident-query-field-drill-entry.component';

describe('IncidentQueryFieldDrillEntryComponent', () => {
  let component: IncidentQueryFieldDrillEntryComponent;
  let fixture: ComponentFixture<IncidentQueryFieldDrillEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryFieldDrillEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryFieldDrillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
