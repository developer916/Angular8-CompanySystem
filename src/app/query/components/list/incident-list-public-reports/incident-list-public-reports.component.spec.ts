import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListPublicReportsComponent } from './incident-list-public-incident-reports.component';

describe('IncidentListPublicIncidentReportsComponent', () => {
  let component: IncidentListPublicReportsComponent;
  let fixture: ComponentFixture<IncidentListPublicReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListPublicReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListPublicReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
