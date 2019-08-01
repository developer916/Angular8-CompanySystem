import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChemicalBeginsWithComponent } from './form-chemical-begins-with.component';

describe('FormChemicalBeginsWithComponent', () => {
  let component: FormChemicalBeginsWithComponent;
  let fixture: ComponentFixture<FormChemicalBeginsWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChemicalBeginsWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChemicalBeginsWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
