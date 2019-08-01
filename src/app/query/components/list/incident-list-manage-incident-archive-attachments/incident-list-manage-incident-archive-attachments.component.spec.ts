import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListManageIncidentArchiveAttachmentsComponent } from './incident-list-manage-incident-archive-attachments.component';

describe('IncidentListManageIncidentArchiveAttachmentsComponent', () => {
  let component: IncidentListManageIncidentArchiveAttachmentsComponent;
  let fixture: ComponentFixture<IncidentListManageIncidentArchiveAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListManageIncidentArchiveAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListManageIncidentArchiveAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
