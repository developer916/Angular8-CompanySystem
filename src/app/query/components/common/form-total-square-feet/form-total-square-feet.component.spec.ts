import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTotalSquareFeetComponent } from './form-total-square-feet.component';

describe('FormTotalSquareFeetComponent', () => {
  let component: FormTotalSquareFeetComponent;
  let fixture: ComponentFixture<FormTotalSquareFeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTotalSquareFeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTotalSquareFeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
