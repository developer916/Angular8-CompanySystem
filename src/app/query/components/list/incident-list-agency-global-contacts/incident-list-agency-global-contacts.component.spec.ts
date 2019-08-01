import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAgencyGlobalContactsComponent } from './incident-list-agency-global-contacts.component';

describe('IncidentListAgencyGlobalContactsComponent', () => {
  let component: IncidentListAgencyGlobalContactsComponent;
  let fixture: ComponentFixture<IncidentListAgencyGlobalContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAgencyGlobalContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAgencyGlobalContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
