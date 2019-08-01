import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDistrictComponent } from './form-district.component';

describe('FormDistrictComponent', () => {
  let component: FormDistrictComponent;
  let fixture: ComponentFixture<FormDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
