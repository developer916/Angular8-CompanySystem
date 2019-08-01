import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListHazmatDocumentArchiveComponent } from './incident-list-hazmat-document-archive.component';

describe('IncidentListHazmatDocumentArchiveComponent', () => {
  let component: IncidentListHazmatDocumentArchiveComponent;
  let fixture: ComponentFixture<IncidentListHazmatDocumentArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListHazmatDocumentArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListHazmatDocumentArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
