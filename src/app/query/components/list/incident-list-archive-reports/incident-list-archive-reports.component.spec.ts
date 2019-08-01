import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListArchiveReportsComponent } from './incident-list-archive-reports.component';

describe('IncidentListArchiveReportsComponent', () => {
  let component: IncidentListArchiveReportsComponent;
  let fixture: ComponentFixture<IncidentListArchiveReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListArchiveReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListArchiveReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
