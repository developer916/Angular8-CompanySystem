import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLicensePlateComponent } from './form-license-plate.component';

describe('FormLicensePlateComponent', () => {
  let component: FormLicensePlateComponent;
  let fixture: ComponentFixture<FormLicensePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLicensePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLicensePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
