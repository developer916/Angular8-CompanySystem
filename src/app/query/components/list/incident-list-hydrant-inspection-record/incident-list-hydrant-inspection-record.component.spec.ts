import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListHydrantInspectionRecordComponent } from './incident-list-hydrant-inspection-record.component';

describe('IncidentListHydrantInspectionRecordComponent', () => {
  let component: IncidentListHydrantInspectionRecordComponent;
  let fixture: ComponentFixture<IncidentListHydrantInspectionRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListHydrantInspectionRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListHydrantInspectionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
