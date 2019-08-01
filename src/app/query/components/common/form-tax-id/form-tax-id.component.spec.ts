import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaxIdComponent } from './form-tax-id.component';

describe('FormTaxIdComponent', () => {
  let component: FormTaxIdComponent;
  let fixture: ComponentFixture<FormTaxIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTaxIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTaxIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
