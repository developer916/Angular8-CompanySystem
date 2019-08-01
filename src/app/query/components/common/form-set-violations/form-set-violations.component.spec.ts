import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetViolationsComponent } from './form-set-violations.component';

describe('FormSetViolationsComponent', () => {
  let component: FormSetViolationsComponent;
  let fixture: ComponentFixture<FormSetViolationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSetViolationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetViolationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
