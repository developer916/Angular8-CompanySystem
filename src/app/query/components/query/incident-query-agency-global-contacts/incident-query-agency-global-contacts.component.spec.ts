import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryAgencyGlobalContactsComponent } from './incident-query-agency-global-contacts.component';

describe('IncidentQueryAgencyGlobalContactsComponent', () => {
  let component: IncidentQueryAgencyGlobalContactsComponent;
  let fixture: ComponentFixture<IncidentQueryAgencyGlobalContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryAgencyGlobalContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryAgencyGlobalContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
