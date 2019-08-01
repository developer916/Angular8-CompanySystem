import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChemicalNameComponent } from './form-chemical-name.component';

describe('FormChemicalNameComponent', () => {
  let component: FormChemicalNameComponent;
  let fixture: ComponentFixture<FormChemicalNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChemicalNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChemicalNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
