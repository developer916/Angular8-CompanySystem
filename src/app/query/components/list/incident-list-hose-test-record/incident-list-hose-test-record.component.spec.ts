import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListHoseTestRecordComponent } from './incident-list-hose-test-record.component';

describe('IncidentListHoseTestRecordComponent', () => {
  let component: IncidentListHoseTestRecordComponent;
  let fixture: ComponentFixture<IncidentListHoseTestRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListHoseTestRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListHoseTestRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
