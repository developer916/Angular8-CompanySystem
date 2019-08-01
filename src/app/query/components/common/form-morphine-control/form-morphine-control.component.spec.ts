import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMorphineControlComponent } from './form-morphine-control.component';

describe('FormMorphineControlComponent', () => {
  let component: FormMorphineControlComponent;
  let fixture: ComponentFixture<FormMorphineControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMorphineControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMorphineControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
