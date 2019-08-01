import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUnNumberComponent } from './form-un-number.component';

describe('FormUnNumberComponent', () => {
  let component: FormUnNumberComponent;
  let fixture: ComponentFixture<FormUnNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUnNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUnNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
