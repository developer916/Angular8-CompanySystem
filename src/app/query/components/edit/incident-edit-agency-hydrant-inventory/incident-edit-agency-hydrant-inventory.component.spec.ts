import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditAgencyHydrantInventoryComponent } from './incident-edit-agency-hydrant-inventory.component';

describe('IncidentEditAgencyHydrantInventoryComponent', () => {
  let component: IncidentEditAgencyHydrantInventoryComponent;
  let fixture: ComponentFixture<IncidentEditAgencyHydrantInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditAgencyHydrantInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditAgencyHydrantInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
