import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchMonthComponent } from './form-search-month.component';

describe('FormSearchMonthComponent', () => {
  let component: FormSearchMonthComponent;
  let fixture: ComponentFixture<FormSearchMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
