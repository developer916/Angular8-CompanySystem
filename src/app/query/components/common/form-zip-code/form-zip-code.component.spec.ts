import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZipCodeComponent } from './form-zip-code.component';

describe('FormZipCodeComponent', () => {
  let component: FormZipCodeComponent;
  let fixture: ComponentFixture<FormZipCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormZipCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormZipCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
