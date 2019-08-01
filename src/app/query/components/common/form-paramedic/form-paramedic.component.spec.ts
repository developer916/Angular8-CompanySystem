import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParamedicComponent } from './form-paramedic.component';

describe('FormParamedicComponent', () => {
  let component: FormParamedicComponent;
  let fixture: ComponentFixture<FormParamedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormParamedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParamedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
