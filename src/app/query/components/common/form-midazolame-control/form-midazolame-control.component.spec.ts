import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMidazolameControlComponent } from './form-midazolame-control.component';

describe('FormMidazolameControlComponent', () => {
  let component: FormMidazolameControlComponent;
  let fixture: ComponentFixture<FormMidazolameControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMidazolameControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMidazolameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
