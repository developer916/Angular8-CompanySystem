import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditAgencyPersonnelComponent } from './incident-edit-agency-personnel.component';

describe('IncidentEditAgencyPersonnelComponent', () => {
  let component: IncidentEditAgencyPersonnelComponent;
  let fixture: ComponentFixture<IncidentEditAgencyPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditAgencyPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditAgencyPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
