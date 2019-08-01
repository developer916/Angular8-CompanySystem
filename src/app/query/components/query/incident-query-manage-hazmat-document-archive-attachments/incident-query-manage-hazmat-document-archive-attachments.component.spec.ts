import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent } from './incident-query-manage-hazmat-document-archive-attachments.component';

describe('IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent', () => {
  let component: IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent;
  let fixture: ComponentFixture<IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
