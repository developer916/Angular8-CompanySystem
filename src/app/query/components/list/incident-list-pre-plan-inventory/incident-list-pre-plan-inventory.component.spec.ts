import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListPrePlanInventoryComponent } from './incident-list-pre-plan-inventory.component';

describe('IncidentListPrePlanInventoryComponent', () => {
  let component: IncidentListPrePlanInventoryComponent;
  let fixture: ComponentFixture<IncidentListPrePlanInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListPrePlanInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListPrePlanInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
