import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUseLoginComponent } from './form-use-login.component';

describe('FormUseLoginComponent', () => {
  let component: FormUseLoginComponent;
  let fixture: ComponentFixture<FormUseLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUseLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUseLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
