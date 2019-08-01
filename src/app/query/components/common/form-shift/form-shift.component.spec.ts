import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShiftComponent } from './form-shift.component';

describe('FormShiftComponent', () => {
  let component: FormShiftComponent;
  let fixture: ComponentFixture<FormShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
