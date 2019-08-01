import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListReadOnlyComponent } from './incident-list-read-only.component';

describe('IncidentListReadOnlyIncidentReportsComponent', () => {
  let component: IncidentListReadOnlyComponent;
  let fixture: ComponentFixture<IncidentListReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
