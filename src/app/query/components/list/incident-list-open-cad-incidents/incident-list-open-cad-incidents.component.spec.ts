import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListOpenCadIncidentsComponent } from './incident-list-open-cad-incidents.component';

describe('IncidentListOpenCadIncidentsComponent', () => {
  let component: IncidentListOpenCadIncidentsComponent;
  let fixture: ComponentFixture<IncidentListOpenCadIncidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListOpenCadIncidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListOpenCadIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
