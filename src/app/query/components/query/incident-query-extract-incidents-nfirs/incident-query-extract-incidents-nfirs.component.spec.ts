import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryExtractIncidentsNfirsComponent } from './incident-query-extract-incidents-nfirs.component';

describe('IncidentQueryExtractIncidentsNfirsComponent', () => {
  let component: IncidentQueryExtractIncidentsNfirsComponent;
  let fixture: ComponentFixture<IncidentQueryExtractIncidentsNfirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryExtractIncidentsNfirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryExtractIncidentsNfirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
