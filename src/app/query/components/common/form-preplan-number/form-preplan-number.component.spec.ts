import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreplanNumberComponent } from './form-preplan-number.component';

describe('FormPreplanNumberComponent', () => {
  let component: FormPreplanNumberComponent;
  let fixture: ComponentFixture<FormPreplanNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPreplanNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreplanNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
