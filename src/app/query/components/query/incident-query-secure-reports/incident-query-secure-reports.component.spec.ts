import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQuerySecureReportsComponent } from './incident-query-secure-reports.component';

describe('IncidentQuerySecureReportsComponent', () => {
  let component: IncidentQuerySecureReportsComponent;
  let fixture: ComponentFixture<IncidentQuerySecureReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQuerySecureReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQuerySecureReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
