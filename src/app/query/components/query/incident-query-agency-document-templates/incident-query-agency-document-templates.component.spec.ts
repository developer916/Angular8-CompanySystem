import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryAgencyDocumentTemplatesComponent } from './incident-query-agency-document-templates.component';

describe('IncidentQueryAgencyDocumentTemplatesComponent', () => {
  let component: IncidentQueryAgencyDocumentTemplatesComponent;
  let fixture: ComponentFixture<IncidentQueryAgencyDocumentTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryAgencyDocumentTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryAgencyDocumentTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
