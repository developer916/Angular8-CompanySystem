import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListSecureReportsComponent } from './incident-list-secure-reports.component';

describe('IncidentListSecureReportsComponent', () => {
  let component: IncidentListSecureReportsComponent;
  let fixture: ComponentFixture<IncidentListSecureReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListSecureReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListSecureReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
