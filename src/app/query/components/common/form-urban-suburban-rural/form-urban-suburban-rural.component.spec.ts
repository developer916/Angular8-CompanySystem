import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUrbanSuburbanRuralComponent } from './form-urban-suburban-rural.component';

describe('FormUrbanSuburbanRuralComponent', () => {
  let component: FormUrbanSuburbanRuralComponent;
  let fixture: ComponentFixture<FormUrbanSuburbanRuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUrbanSuburbanRuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUrbanSuburbanRuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
