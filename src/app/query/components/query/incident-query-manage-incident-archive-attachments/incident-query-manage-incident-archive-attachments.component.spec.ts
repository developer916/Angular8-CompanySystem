import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryManageIncidentArchiveAttachmentsComponent } from './incident-query-manage-incident-archive-attachments.component';

describe('IncidentQueryManageIncidentArchiveAttachmentsComponent', () => {
  let component: IncidentQueryManageIncidentArchiveAttachmentsComponent;
  let fixture: ComponentFixture<IncidentQueryManageIncidentArchiveAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryManageIncidentArchiveAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryManageIncidentArchiveAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
