import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryAgencyPersonnelComponent } from './incident-query-agency-personnel.component';

describe('IncidentQueryAgencyPersonnelComponent', () => {
  let component: IncidentQueryAgencyPersonnelComponent;
  let fixture: ComponentFixture<IncidentQueryAgencyPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryAgencyPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryAgencyPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
