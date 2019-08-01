import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAgencyPersonnelComponent } from './incident-list-agency-personnel.component';

describe('IncidentListAgencyPersonnelComponent', () => {
  let component: IncidentListAgencyPersonnelComponent;
  let fixture: ComponentFixture<IncidentListAgencyPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAgencyPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAgencyPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
