import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionZoneComponent } from './form-inspection-zone.component';

describe('FormInspectionZoneComponent', () => {
  let component: FormInspectionZoneComponent;
  let fixture: ComponentFixture<FormInspectionZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInspectionZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInspectionZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
