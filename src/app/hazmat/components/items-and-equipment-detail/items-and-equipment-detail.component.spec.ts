import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAndEquipmentDetailComponent } from './items-and-equipment-detail.component';

describe('ItemsAndEquipmentDetailComponent', () => {
  let component: ItemsAndEquipmentDetailComponent;
  let fixture: ComponentFixture<ItemsAndEquipmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAndEquipmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAndEquipmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
