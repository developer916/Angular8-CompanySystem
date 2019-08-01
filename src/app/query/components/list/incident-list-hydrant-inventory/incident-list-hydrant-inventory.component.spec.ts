import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListHydrantInventoryComponent } from './incident-list-hydrant-inventory.component';

describe('IncidentListHydrantInventoryComponent', () => {
  let component: IncidentListHydrantInventoryComponent;
  let fixture: ComponentFixture<IncidentListHydrantInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListHydrantInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListHydrantInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
