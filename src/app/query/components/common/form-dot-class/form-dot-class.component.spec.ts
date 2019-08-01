import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDotClassComponent } from './form-dot-class.component';

describe('FormDotClassComponent', () => {
  let component: FormDotClassComponent;
  let fixture: ComponentFixture<FormDotClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDotClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDotClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
