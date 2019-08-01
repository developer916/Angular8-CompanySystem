import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryHydrantInventoryComponent } from './incident-query-hydrant-inventory.component';

describe('IncidentQueryHydrantInventoryComponent', () => {
  let component: IncidentQueryHydrantInventoryComponent;
  let fixture: ComponentFixture<IncidentQueryHydrantInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryHydrantInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryHydrantInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
