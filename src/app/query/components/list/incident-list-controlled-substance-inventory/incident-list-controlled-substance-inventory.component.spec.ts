import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListControlledSubstanceInventoryComponent } from './incident-list-controlled-substance-inventory.component';

describe('IncidentListControlledSubstanceInventoryComponent', () => {
  let component: IncidentListControlledSubstanceInventoryComponent;
  let fixture: ComponentFixture<IncidentListControlledSubstanceInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListControlledSubstanceInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListControlledSubstanceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
