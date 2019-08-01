import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLicenseNumberComponent } from './form-license-number.component';

describe('FormLicenseNumberComponent', () => {
  let component: FormLicenseNumberComponent;
  let fixture: ComponentFixture<FormLicenseNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLicenseNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLicenseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
