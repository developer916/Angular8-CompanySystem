import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallHourComponent } from './form-call-hour.component';

describe('FormCallHourComponent', () => {
  let component: FormCallHourComponent;
  let fixture: ComponentFixture<FormCallHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCallHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCallHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
