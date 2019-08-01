import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryHazmatDocumentArchiveComponent } from './incident-query-hazmat-document-archive.component';

describe('IncidentQueryHazmatDocumentArchiveComponent', () => {
  let component: IncidentQueryHazmatDocumentArchiveComponent;
  let fixture: ComponentFixture<IncidentQueryHazmatDocumentArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryHazmatDocumentArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryHazmatDocumentArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
