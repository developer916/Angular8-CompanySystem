import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaintenanceNumberComponent } from './form-maintenance-number.component';

describe('FormMaintenanceNumberComponent', () => {
  let component: FormMaintenanceNumberComponent;
  let fixture: ComponentFixture<FormMaintenanceNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaintenanceNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaintenanceNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
