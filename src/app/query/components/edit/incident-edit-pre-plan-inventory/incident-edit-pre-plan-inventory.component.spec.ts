import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditPrePlanInventoryComponent } from './incident-edit-pre-plan-inventory.component';

describe('IncidentEditPrePlanInventoryComponent', () => {
  let component: IncidentEditPrePlanInventoryComponent;
  let fixture: ComponentFixture<IncidentEditPrePlanInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditPrePlanInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditPrePlanInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
