import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiscalYearComponent } from './form-fiscal-year.component';

describe('FormFiscalYearComponent', () => {
  let component: FormFiscalYearComponent;
  let fixture: ComponentFixture<FormFiscalYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFiscalYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiscalYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
