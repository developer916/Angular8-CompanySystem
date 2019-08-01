import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListManageHazmatDocumentArchiveAttachmentsComponent } from './incident-list-manage-hazmat-document-archive-attachments.component';

describe('IncidentListManageHazmatDocumentArchiveAttachmentsComponent', () => {
  let component: IncidentListManageHazmatDocumentArchiveAttachmentsComponent;
  let fixture: ComponentFixture<IncidentListManageHazmatDocumentArchiveAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListManageHazmatDocumentArchiveAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListManageHazmatDocumentArchiveAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
