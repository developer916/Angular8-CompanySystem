import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropertyUseComponent } from './form-property-use.component';

describe('FormPropertyUseComponent', () => {
  let component: FormPropertyUseComponent;
  let fixture: ComponentFixture<FormPropertyUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPropertyUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPropertyUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
