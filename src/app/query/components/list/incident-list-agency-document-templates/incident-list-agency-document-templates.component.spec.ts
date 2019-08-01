import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListAgencyDocumentTemplatesComponent } from './incident-list-agency-document-templates.component';

describe('IncidentListAgencyDocumentTemplatesComponent', () => {
  let component: IncidentListAgencyDocumentTemplatesComponent;
  let fixture: ComponentFixture<IncidentListAgencyDocumentTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListAgencyDocumentTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListAgencyDocumentTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
