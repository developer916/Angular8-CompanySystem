import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSystemTypeComponent } from './form-system-type.component';

describe('FormSystemTypeComponent', () => {
  let component: FormSystemTypeComponent;
  let fixture: ComponentFixture<FormSystemTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSystemTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSystemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
