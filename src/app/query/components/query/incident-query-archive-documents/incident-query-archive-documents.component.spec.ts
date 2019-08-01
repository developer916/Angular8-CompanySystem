import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryArchiveDocumentsComponent } from './incident-query-archive-documents.component';

describe('IncidentQueryArchiveDocumentsComponent', () => {
  let component: IncidentQueryArchiveDocumentsComponent;
  let fixture: ComponentFixture<IncidentQueryArchiveDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryArchiveDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryArchiveDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
