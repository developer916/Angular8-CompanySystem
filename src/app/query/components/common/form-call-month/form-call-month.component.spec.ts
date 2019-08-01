import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallMonthComponent } from './form-call-month.component';

describe('FormCallMonthComponent', () => {
  let component: FormCallMonthComponent;
  let fixture: ComponentFixture<FormCallMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCallMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCallMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
