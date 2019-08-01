import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHydrantNumberComponent } from './form-hydrant-number.component';

describe('FormHydrantNumberComponent', () => {
  let component: FormHydrantNumberComponent;
  let fixture: ComponentFixture<FormHydrantNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHydrantNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHydrantNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
