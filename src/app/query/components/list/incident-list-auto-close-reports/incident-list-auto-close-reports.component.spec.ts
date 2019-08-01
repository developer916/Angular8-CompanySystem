import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAutoCloseReportsComponent } from './incident-list-auto-close-reports.component';

describe('IncidentListAutoCloseReportsComponent', () => {
  let component: IncidentListAutoCloseReportsComponent;
  let fixture: ComponentFixture<IncidentListAutoCloseReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAutoCloseReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAutoCloseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
