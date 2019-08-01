import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActivityTypeComponent } from './form-activity-type.component';

describe('FormActivityTypeComponent', () => {
  let component: FormActivityTypeComponent;
  let fixture: ComponentFixture<FormActivityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActivityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
