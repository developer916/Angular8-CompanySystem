import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateOffsetComponent } from './form-date-offset.component';

describe('FormDateOffsetComponent', () => {
  let component: FormDateOffsetComponent;
  let fixture: ComponentFixture<FormDateOffsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDateOffsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDateOffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
