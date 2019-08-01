import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryPublicReportsComponent } from './incident-query-public-reports.component';

describe('IncidentQueryPublicReportsComponent', () => {
  let component: IncidentQueryPublicReportsComponent;
  let fixture: ComponentFixture<IncidentQueryPublicReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryPublicReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryPublicReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
