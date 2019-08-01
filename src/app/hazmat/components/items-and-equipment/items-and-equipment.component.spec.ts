import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAndEquipmentComponent } from './items-and-equipment.component';

describe('ItemsAndEquipmentComponent', () => {
  let component: ItemsAndEquipmentComponent;
  let fixture: ComponentFixture<ItemsAndEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAndEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAndEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
