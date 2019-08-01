import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryCadIncidentsComponent } from './incident-query-cad-incidents.component';

describe('IncidentQueryCadIncidentsComponent', () => {
  let component: IncidentQueryCadIncidentsComponent;
  let fixture: ComponentFixture<IncidentQueryCadIncidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryCadIncidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryCadIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
