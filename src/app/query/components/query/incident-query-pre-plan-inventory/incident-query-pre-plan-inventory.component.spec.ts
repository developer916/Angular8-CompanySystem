import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryPrePlanInventoryComponent } from './incident-query-pre-plan-inventory.component';

describe('IncidentQueryPrePlanInventoryComponent', () => {
  let component: IncidentQueryPrePlanInventoryComponent;
  let fixture: ComponentFixture<IncidentQueryPrePlanInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryPrePlanInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryPrePlanInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
